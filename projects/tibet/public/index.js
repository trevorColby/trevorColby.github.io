// Trevor Colby
// 11/15/2018
// This project is working to load in local data from a text file and use it to render a 3D navigable map that represents the Qinghai region of China.
// For texturing this map will use a projection of the artistic rendering of the region painted by a tibetan nomad.

var resolution = 'low'; //this is switch to choose our resolution ('high'/'low')
//variables we need to be global
var hudWidth, hudHeight;
var container, stats;
var fullScreenState = 1;
var points,
    gui,
    controls, 
    texture, 
    group, 
    camera, 
    scene, 
    renderer, 
    mapWidth, 
    mapDepth, 
    mapHeight, 
    lightHeight, 
    scaleFactor,
    screenGeometry,
    hudScene,
    hudCamera,
    bitMap,
    north,
    east,
    south,
    west,
    direction; 
var compass = new Image();
compass.src = 'tibet/public/media/compass.png';

var material = new THREE.MeshBasicMaterial();
var clock = new THREE.Clock();
var currentPos = [1500,-2000,-1000];
var sceneController = {//the stored values for our GUI
	Texture: 3,
	Fullscreen: false
};

// if ( WEBGL.isWebGLAvailable() === false ) {
// 	document.body.appendChild( WEBGL.getWebGLErrorMessage() );
// }


init();
animate();
function initGUI() {
	gui = new dat.GUI({ autoPlace: false });
	// var gui = new dat.GUI();
	gui.add( sceneController, 'Texture',{ Mesh: 0, Gradient: 1, Satelite: 2, Artwork: 3 }  ).onChange((value) => {
		updateTexture(value);	
	});
	gui.add( sceneController, 'Fullscreen').onChange((value) =>{
		goFullScreen(value);
	});
	var guiContainer = document.getElementById("MapControls");	
	guiContainer.style.position = "relative";
	gui.domElement.style.position = "absolute";
	gui.domElement.style.right = 0;
	gui.domElement.style.top = 0;
	guiContainer.appendChild(gui.domElement);
}

function init() {
	launchInstructionModal();
	initGUI();
	//This is our container to hold our canvas
	container = document.getElementById( "MapContainer" );	

	var url;
	// may be able to just use github pages to just get the json
	if (resolution == 'high'){
		 // url ='tibet/public/data/xyz_MetersHighRes.json'; //high res
	}else{
		 url ='tibet/public/data/xyz_MetersLowResOptimized.json'; //low res
	}
	texture = new THREE.TextureLoader().load( 'tibet/public/media/modArt.png' ); // <---	

	var pointData = (function () {
	    var json = null;
	    $.ajax({
		'async': false,
		'global': false,
		'url': url,
		'dataType': "json",
		'success': function (data) {
		    json = data;
		}
	    });
	    return json;
	})(); 
	
	// camera
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );

	//create an array from our vertices that we read in	
	points = createVertices(pointData); 
	
	//initialize our scene basics
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xbfd1e5 );

	// controls = new THREE.PointerLockControls(camera);
	controls = new THREE.OrbitControls(camera, container);
	// controls = new THREE.FirstPersonControls( camera );
	// controls.movementSpeed = 1000;
	// controls.lookSpeed = 0.1;

	camera.position.y = currentPos[0];
	camera.position.x = currentPos[1];
	camera.position.z = currentPos[2];
	var geometry;
	if(resolution == 'high'){
		//this is sampled at 30m intervals ergo we are multiplying by 3 here to preserve the proportion
		geometry = new THREE.PlaneBufferGeometry(mapWidth*3, mapDepth*3, mapWidth, mapDepth); //for high res
	}
	else{
		//this is sampled at 120m intervals ergo we are multiplying by 12 here to preserve the proportion
		geometry = new THREE.PlaneBufferGeometry(mapWidth*12, mapDepth*12, mapWidth, mapDepth);//for low res
	}
	geometry.rotateX( - Math.PI / 2 );
	
	var vertices = geometry.attributes.position.array;
	for ( var i = 0, j = 0, l = points.length; i < l; i ++, j += 3 ) {
		//need to figure out a precise scale factor
		vertices[ j + 1 ] = (points[ i ].z / mapHeight) * 600;
	}
	texture = new THREE.TextureLoader().load( 'tibet/public/media/modArt.png' ); // <---	
	//Below is in case our image isn't power of 2 (supress warning)	
	texture.generateMipmaps = false;
	texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
	texture.minFilter = THREE.LinearFilter;

	material.map = texture; //<---
	material.wireframe = false;
	material.color = null;

	mesh = new THREE.Mesh( geometry, material );

	scene.add(mesh);
	scene.add(new THREE.AmbientLight(0xeeeeee));
	var pointLight = new THREE.PointLight( 0xff0000, 1);
	pointLight.position.set( mapWidth, mapDepth, lightHeight );
	scene.add( pointLight );
	
	renderer = new THREE.WebGLRenderer({antialias: false});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( container.clientWidth, container.clientHeight );
	renderer.autoClear = false;	
	container.innerHTML = "";
	
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	container.appendChild( renderer.domElement );


	//generate our stats and append them to the child
	stats = new Stats();
	stats.domElement.style.top = null;
	stats.domElement.style.zIndex = null;
	stats.domElement.style.left = null;
	stats.domElement.style.bottom = 0;
	stats.domElement.style.right = '10px';
	container.appendChild( stats.domElement );
	
	//now that we have loaded in our scene lets load in our HUD: Heads Up Display
	hudWidth = container.clientWidth;
	hudHeight = container.clientHeight;
	var HUD = document.createElement('canvas');
	HUD.width = hudWidth;
	HUD.height = hudHeight; 
	bitMap = HUD.getContext('2d');
	bitMap.font = "Normal 20px Palatino";
	bitMap.textAlign = 'center';
	bitMap.fillStyle = 'rgba(0, 0, 0, 0.75)';
	bitMap.fillText('Jarvis booting up ...', hudWidth/2, hudHeight/2);

	hudCamera = new THREE.OrthographicCamera(-hudWidth/2, hudWidth/2, hudHeight/2, -hudHeight/2, 0, 30);
	hudCamera.aspect = window.innerWidth / window.innerHeight;
	hudScene = new THREE.Scene();
	hudTexture = new THREE.Texture(HUD);
	hudTexture.needsUpdate = true;

	var hudMat = new THREE.MeshBasicMaterial({map: hudTexture});
	hudMat.transparent = true;
	
	var screenGeometry = new THREE.PlaneGeometry(hudWidth, hudHeight);
	// var screenGeometry = new THREE.PlaneGeometry(hudHeight, hudWidth);//original
	var hudMesh = new THREE.Mesh(screenGeometry, hudMat);
	// hudMesh.visible = false;
	hudScene.add(hudMesh);

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'reload', onWindowReload, false );
	
	document.addEventListener('fullscreenchange', exitHandler);
	document.addEventListener('webkitfullscreenchange', exitHandler);
	document.addEventListener('mozfullscreenchange', exitHandler);
	document.addEventListener('MSFullscreenChange', exitHandler);
}

function updateTexture(textureChoice){
	//ALL OF OUR TEXTURING OPTIONS 
	switch(textureChoice){
		case '3':
			material.color = new THREE.Color(1,1,1);
			material.wireframe = false;
			// texture = new THREE.TextureLoader().load( 'tibet/public/media/map-cropped_8bit-356ppi.jpeg' );	
			texture = new THREE.TextureLoader().load( 'tibet/public/media/tibetScreenshot.png' );	
			material.map = texture; //<---
			break;
		case '2': 
			material.color = new THREE.Color(1,1,1);
			material.wireframe = false;
			texture = new THREE.TextureLoader().load( 'tibet/public/media/dem_as_image.jpg' );	
			material.map = texture; //<---
			break;
		case '1': 
			material.color = new THREE.Color(1,1,1);
			material.wireframe = false;
			texture = new THREE.TextureLoader().load( 'tibet/public/media/matlabHoriz.jpg' ); 	
			material.map = texture; 
			break;
		case '0':
			material.wireframe = true;
			material.map = null; //<---
			material.color = new THREE.Color(0,0,0);
	}
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	hudCamera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	hudCamera.updateProjectionMatrix();
 	container = document.getElementById("MapContainer");
	renderer.setSize( container.clientWidth, container.clientHeight );
	// renderer.setSize( window.innerWidth, window.innerHeight );
	// controls.handleResize();
}

function onWindowReload() {
	//here we scroll to the top to fix formatting issues
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}
}

//function to make sure we can just drop our canvas onto a page
function resizeCanvasToDisplaySize() {
	//need to mess with this to make sure that it is compat with older browsers (may need to use window instead of client)
  const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    hudCamera.aspect = width / height;
    camera.updateProjectionMatrix();
    hudCamera.updateProjectionMatrix();

    // update any render target sizes here
  }
}

function animate() {
	resizeCanvasToDisplaySize();
	//update our Heads Up Display
	bitMap.clearRect(0,0,hudWidth,hudHeight);
	
	compass.onload = function (){
		bitMap.drawImage(this,0,0);
	};
	compass.src = 'tibet/public/media/compass.png';
	//Our Position data
	bitMap.fillText('  Elevation: ['+ camera.position.z.toFixed(0) * -1 + ']', hudWidth-140, hudHeight-40);
	bitMap.fillText('Coordinates: ['+camera.position.x.toFixed(0)+', '+ camera.position.y.toFixed(0) + ']', hudWidth-120, hudHeight-10);

	//Determine which direction we are facing, will need to cross reference this later
	north = 'black';
	east = 'black';
	south = 'black';
	west = 'black';
	// camera.getWorldDirection(direction);
	direction = null;
	if(direction){	
		var angle = Math.atan2(direction.x,direction.z);
		if(angle >= 45 && angle <= 315 ){
			if(angle < 45){
				east = 'red';
			}else{
				north = 'red';
			}
		}else{
			if(angle > 225){
				south = 'red';	
			}else{
				west = 'red';
			}
		}
	}

	//Compass
	bitMap.beginPath();
	bitMap.arc(55,hudHeight-55,50,0,2*Math.PI);
	bitMap.stroke();

	//North
	bitMap.beginPath();
	bitMap.moveTo( 55, hudHeight - 105 );
	bitMap.lineTo( 65, hudHeight - 90 );
	bitMap.lineTo( 45, hudHeight - 90 );
	bitMap.lineTo( 55, hudHeight - 105 );//close triangle
	bitMap.fillStyle = north;
	bitMap.fill();

	//East
	bitMap.beginPath();
	bitMap.moveTo( 105, hudHeight - 55 );
	bitMap.lineTo( 90, hudHeight - 65 );
	bitMap.lineTo( 90, hudHeight - 45 );
	bitMap.lineTo( 105, hudHeight - 55 );//close triangle
	bitMap.fillStyle = east;
	bitMap.fill();
	
	//South
	bitMap.beginPath();
	bitMap.moveTo( 55, hudHeight - 5 );
	bitMap.lineTo( 65, hudHeight - 20 );
	bitMap.lineTo( 45, hudHeight - 20 );
	bitMap.lineTo( 55, hudHeight - 5 );//close triangle
	bitMap.fillStyle = east;
	bitMap.fill();

	//West
	bitMap.beginPath();
	bitMap.moveTo( 5, hudHeight - 55 );
	bitMap.lineTo( 20, hudHeight - 65 );
	bitMap.lineTo( 20, hudHeight - 45 );
	bitMap.lineTo( 5, hudHeight - 55 );//close triangle
	bitMap.fillStyle = east;
	bitMap.fill();
	//connectinglines
	bitMap.beginPath();
	bitMap.moveTo( 19, hudHeight - 55 );
	bitMap.lineTo( 91, hudHeight - 55 );
	bitMap.fillstyle = 'black';
	bitMap.stroke();	
	bitMap.beginPath();
	bitMap.moveTo( 55, hudHeight - 89 );
	bitMap.lineTo( 55, hudHeight - 19 );
	bitMap.fillstyle = 'black';
	bitMap.stroke();
	//Outer connecting lines
	// bitMap.beginPath();
	// bitMap.moveTo( 5, window.innerHeight - 55 );
	// bitMap.lineTo( 20, window.innerHeight - 65 );
	// bitMap.lineTo( 20, window.innerHeight - 45 );
	// bitMap.lineTo( 5, window.innerHeight - 55 );//close triangle
	hudTexture.needsUpdate = true;
	
	//need to render
	render();
	stats.update();
	requestAnimationFrame( animate );
}
function render() {
	controls.update( clock.getDelta() );
	// controls.update();
	renderer.render( scene, camera );
	
	//render HUD ontop of our other scene
	renderer.render( hudScene, hudCamera );
}

function createVertices(values) {
	var verticesArray = [];
	//here we need to modify our xyz to be relative to our first point
	// console.log(values[1].d[0]);
	var firstX = values[1].d[0].a;
	var firstY = values[1].d[0].b;
	var firstZ = values[1].d[0].c;
	var yPrev = firstY;
	var xDim = 0;
	var yDim = 0;
	var firstPass = 0;
	var length = 0;
	var zMax = 0;
	var zMin = 0;
	values[1].d.forEach((obj) => {
		length ++;
		//this is used to calculate the dimensions of our region (becuase it isn't square)
		if(obj.b != yPrev){
			xDim ++;
			firstPass = 1;
			yPrev = obj.b;
		}else if(firstPass == 0){
			yDim ++;
		}
		if(firstZ-obj.c < zMin){
			zMin = firstZ - obj.c;	
		}else if (firstZ-obj.c > zMax){
			zMax = firstZ - obj.c;
		}

		verticesArray.push(new THREE.Vector3((obj.c - firstX)/120, -1*(obj.b - firstY)/120, -(firstZ - obj.c))); 
    });
	mapDepth = xDim;
	mapWidth = yDim-1;
	mapHeight = Math.abs(zMax - zMin); 

    return verticesArray;
}

function launchInstructionModal(){
	// Get the modal
	var modal = document.getElementById('insructionsModal');
	//start witht the modal open on init()	
	modal.style.display = "block";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
		modal.style.display = "none";
	    }
	}
}

//go fullscreen with an object, takes element as argument
function goFullScreen(value){
	var elem = document.getElementById('fullscreenContainer');
	if(value){
		  if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) { /* Firefox */
		    elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		    elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE/Edge */
		    elem.msRequestFullscreen();
		  }
		container.style.width = '100vw';
	}else{
		console.log("GUI detected change");
		container.style.width = '80vw';
		exitFullScreen();	
		onWindowResize();
	}
}

//function to exit fullscreen in all browsers
function exitFullScreen(){	
	if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
      	}
}

//handle if the user hits escape instead of using our UI
function exitHandler(){
	fullScreenState = fullScreenState * -1;
	if(fullScreenState > 0){
		container.style.width = '80vw';
		sceneController.Fullscreen = false;
		gui.__controllers[1].updateDisplay();
		onWindowResize();
	}
}
