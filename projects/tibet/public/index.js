// Trevor Colby
// 11/15/2018
// This project is working to load in local data from a text file and use it to render a 3D navigable map that represents the Qinghai region of China.
// For texturing this map will use a projection of the artistic rendering of the region painted by a tibetan nomad.

//NOTE: THE HIGH RESOLUTION ONLY WORKS LOCALLY, GITHUB CAN'T HOST LARGE ENOUGH FILES FOR HIGH RESOLUTION
var resolution = 'low'; //this is switch to choose our resolution ('high'/'low')
//variables we need to be global
var hudWidth, hudHeight;
var container, stats;
var fullScreenState = 1;
//these are used for scaling our mountains and then converting their values 
//back into real world measurments for display
var firstX = firstY = 0; 
var firstZ = 0;
var points,
    gui,
    controls, 
    texture, 
    camera, 
    scene, 
    renderer, 
    mapWidth, 
    mapDepth, 
    mapHeight, 
    screenGeometry,
    hudScene,
    hudCamera,
    bitMap;

//Our Compass Point Colors
//These indicate which key is being pressed
var north = 'black';
var east = 'black';
var south = 'black';
var west = 'black';

//allow real time texture choice
var material = new THREE.MeshBasicMaterial();

//allow real time background choice
var skyBoxMaterial = new THREE.ShaderMaterial();
var skyTextureLoader = new THREE.CubeTextureLoader();
skyTextureLoader.setPath('tibet/public/media/' );

//our starting position
var currentPos = [3700,-100,4500];

//the stored values for our GUI
var sceneController = {
	Texture: 0,
	Background: 0,
	Fullscreen: false
};

init();
animate();
function initGUI() {
	//turn off autoplace so we can put it relative to our canvas
	gui = new dat.GUI({ autoPlace: false });
	gui.add( sceneController, 'Texture',{ Mesh: 0, Gradient: 1, Satelite: 2, Artwork: 3 }  ).onChange((value) => {
		updateTexture(value);	
	});
	gui.add( sceneController, 'Background',{ Blue: 0, Altitude: 1, Aurora: 2, Sunset: 3 , Snow: 4}  ).onChange((value) => {
		updateBackground(value);	
	});
	gui.add( sceneController, 'Fullscreen').onChange((value) =>{
		goFullScreen(value);
	});
	var guiContainer = document.getElementById("MapControls");
	//format our GUI's position
	guiContainer.style.position = "relative";
	gui.domElement.style.position = "absolute";
	gui.domElement.style.right = 0;
	gui.domElement.style.top = 0;
	guiContainer.appendChild(gui.domElement);
}

function init() {
	//launch a modal with instructions for the user on how to navigate the map
	launchInstructionModal();
	initGUI();

	//This is our container to hold our canvas
	container = document.getElementById( "MapContainer" );	
	var url;
	
	if (resolution == 'high'){
		 // url ='tibet/public/data/xyz_MetersHighRes.json'; //high res //github couldn't handle this
	}else{
		 url ='tibet/public/data/xyz_MetersLowResOptimized.json'; //low res
	}

	//use jquery ajax request to get json data
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

	//create an array from our vertices that we read in from compressed json	
	points = createVertices(pointData); 
	
	//initialize our scene basics
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xbfd1e5 );
	controls = new THREE.OrbitControls(camera, container);
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
		geometry = new THREE.PlaneBufferGeometry(mapWidth*12 * 0.8888, mapDepth*12 * 0.68175, mapWidth, mapDepth);//for low res
	}
	geometry.rotateX( - Math.PI / 2 );

	//walk through all of our vertices and scale our height
	var vertices = geometry.attributes.position.array;
	for ( var i = 0, j = 0, l = points.length; i < l; i ++, j += 3 ) {
		//need to figure out a precise scale factor
		vertices[ j + 1 ] = (points[ i ].z / mapHeight) * 700;
	}

	//set our first texture for geometry 
	texture = new THREE.TextureLoader().load( 'tibet/public/media/modArt.png' );	
	// texture.repeat.x = 0.8888889;	
	// texture.repeat.y = 0.68175;
	// texture.repeat.x = 0.000146297457621;
	// texture.repeat.y = -0.000146298747745;
	// texture.offset.y = 33.315727779381810;
	// texture.offset.x = 96.361874853131368;
	//Below is in case our image isn't power of 2 (supress warning)	
	// texture.generateMipmaps = false;
	texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
	// texture.wrapS = 0.000146297457621;
	// texture.wrapT = -0.000146298747745;
	// texture.offset = new THREE.Vector2(96.361874853131368,33.315727779381810);
			// // new THREE.Vector2(0.000146297457621,-0.000146298747745);
			// texture.transformUv(new THREE.Vector2(0.000146297457621,-0.000146298747745));	
			// texture.transfromUv(new THREE.Vector2(96.361874853131368,33.315727779381810));
	
	
	texture.minFilter = THREE.LinearFilter;
	texture.needsUpdate = true;
	// texture.transformUv(new THREE.Vector2(0.8888889,0.68175));	
	material.map = texture; 
	material.wireframe = false;
	material.color = null;
	
	//create a mesh with our new texture
	mesh = new THREE.Mesh( geometry, material );
	scene.add(mesh);
	//set our actual first texture (after initialized) to be a black mesh
	material.wireframe = true;
	material.color = new THREE.Color(0,0,0);
	
	//generate a cube textured skybox: we will use the ssme "material swapping" technique as with the mesh to change textures in realtime
	var skyTexture = skyTextureLoader.load( [
		'turquoise.jpg', 'turquoise.jpg',
		'turquoise.jpg', 'turquoise.jpg',
		'turquoise.jpg', 'turquoise.jpg',
	] );
	var skyShader = THREE.ShaderLib[ 'cube' ];
	skyShader.uniforms[ 'tCube' ].value = skyTexture;
	skyBoxMaterial = new THREE.ShaderMaterial( {
		fragmentShader: skyShader.fragmentShader,
		vertexShader: skyShader.vertexShader,
		uniforms: skyShader.uniforms,
		side: THREE.BackSide
	} );
	var skyBox = new THREE.Mesh( new THREE.BoxBufferGeometry( mapWidth * 50, mapWidth * 50, mapWidth * 50), skyBoxMaterial );
	scene.add( skyBox );
	// light
	var amLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( amLight );
	var dirLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
	dirLight.position.set( - 1, 1, 1 );
	scene.add( dirLight );
	
	//generate our renderer
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
	var hudMesh = new THREE.Mesh(screenGeometry, hudMat);
	hudScene.add(hudMesh);

	//Window Event Listeners
	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'reload', onWindowReload, false );

	//Document Event Listenrs: Detect 'esc' click leaving fullscreen
	document.addEventListener('fullscreenchange', exitHandler);
	document.addEventListener('webkitfullscreenchange', exitHandler);
	document.addEventListener('mozfullscreenchange', exitHandler);
	document.addEventListener('MSFullscreenChange', exitHandler);

	document.addEventListener('keydown', function (e) {
	    if (e.defaultPrevented) {
		//don't want to trigger if default is supposed to be prevented	
		return;
	    }
	
	    //key either our key or keyCode if the key doesn't exist
	    var keyPressed = e.key || e.keyCode;

	    if (keyPressed === 'w' ||
		keyPressed === 'keyW' ||
                keyPressed === 97) {
		north = 'red'; 
		east = south = west = 'black';
	    }
	    if (keyPressed === 's' ||
		keyPressed === 'keyS' ||
                keyPressed === 83) {
		south = 'red'; 
		east = north = west = 'black';
	    }
	    if (keyPressed === 'a' ||
		keyPressed === 'keyA' ||
                keyPressed === 65) {
		west = 'red'; 
		east = south = north = 'black';
	    }
	    if (keyPressed === 'd' ||
		keyPressed === 'keyD' ||
                keyPressed === 68) {
		east = 'red'; 
		north = south = north = 'black';
	    }
	});
	document.addEventListener('keyup', function (e) {
	    if (e.defaultPrevented) {
		//don't want to trigger if default is supposed to be prevented	
		return;
	    }
	
	    //key either our key or keyCode if the key doesn't exist
	    var keyPressed = e.key || e.keyCode;

	    if (keyPressed === 'w' ||
		keyPressed === 'keyW' ||
                keyPressed === 97) {
		north = east = south = west = 'black';
	    }
	    if (keyPressed === 's' ||
		keyPressed === 'keyS' ||
                keyPressed === 83) {
		south = east = north = west = 'black';
	    }
	    if (keyPressed === 'a' ||
		keyPressed === 'keyA' ||
                keyPressed === 65) {
		west = east = south = north = 'black';
	    }
	    if (keyPressed === 'd' ||
		keyPressed === 'keyD' ||
                keyPressed === 68) {
		east = north = south = west = 'black';
	    }
	});
}

function updateBackground(backgroundChoice){
	//ALL OF OUR TEXTURING OPTIONS 
	switch(backgroundChoice){
		case '4':
			var skyTexture = skyTextureLoader.load( [
				'snow/frozen_rt.jpg', 'snow/frozen_lf.jpg',
				'snow/frozen_up.jpg', 'snow/frozen_dn.jpg',
				'snow/frozen_bk.jpg', 'snow/frozen_ft.jpg',
			] );
			var skyShader = THREE.ShaderLib[ 'cube' ];
			skyShader.uniforms[ 'tCube' ].value = skyTexture;
			skyBoxMaterial.uniforms = skyShader.uniforms;
			break;
		case '3':
			var skyTexture = skyTextureLoader.load( [
				'spires/spires_rt.jpg', 'spires/spires_lf.jpg',
				'spires/spires_up.jpg', 'spires/spires_dn.jpg',
				'spires/spires_bk.jpg', 'spires/spires_ft.jpg',
			] );
			var skyShader = THREE.ShaderLib[ 'cube' ];
			skyShader.uniforms[ 'tCube' ].value = skyTexture;
			skyBoxMaterial.uniforms = skyShader.uniforms;
			break;
		case '2': 
			var skyTexture = skyTextureLoader.load( [
				'aurora/midnight-silence_rt.jpg', 'aurora/midnight-silence_lf.jpg',
				'aurora/midnight-silence_up.jpg', 'aurora/midnight-silence_dn.jpg',
				'aurora/midnight-silence_bk.jpg', 'aurora/midnight-silence_ft.jpg',
			] );
			var skyShader = THREE.ShaderLib[ 'cube' ];
			skyShader.uniforms[ 'tCube' ].value = skyTexture;
			skyBoxMaterial.uniforms = skyShader.uniforms;
			break;
		case '1': 
			var skyTexture = skyTextureLoader.load( [
				'glacier/glacier_rt.jpg', 'glacier/glacier_lf.jpg',
				'glacier/glacier_up.jpg', 'glacier/glacier_dn.jpg',
				'glacier/glacier_bk.jpg', 'glacier/glacier_ft.jpg',
			] );
			var skyShader = THREE.ShaderLib[ 'cube' ];
			skyShader.uniforms[ 'tCube' ].value = skyTexture;
			skyBoxMaterial.uniforms = skyShader.uniforms;
			break;
		case '0':
			var skyTexture = skyTextureLoader.load( [
				'turquoise.jpg', 'turquoise.jpg',
				'turquoise.jpg', 'turquoise.jpg',
				'turquoise.jpg', 'turquoise.jpg',
			] );
			// var skyTexture = skyTextureLoader.load( [
			// 	'midBlue (1).jpg', 'midBlue (1).jpg',
			// 	'midBlue (1).jpg', 'midBlue (1).jpg',
			// 	'midBlue (1).jpg', 'midBlue (1).jpg',
			// ] );
			var skyShader = THREE.ShaderLib[ 'cube' ];
			skyShader.uniforms[ 'tCube' ].value = skyTexture;
			skyBoxMaterial.uniforms = skyShader.uniforms;
			break;
	}
}

function updateTexture(textureChoice){
	//ALL OF OUR TEXTURING OPTIONS 
	switch(textureChoice){
		case '3':
			material.color = new THREE.Color(1,1,1);
			material.wireframe = false;
			// texture = new THREE.TextureLoader().load( 'tibet/public/media/map-cropped_8bit-356ppi.jpeg' );	
			texture = new THREE.TextureLoader().load( 'tibet/public/media/tibetScreenshot.png' );
			// texture.wrapS = 0.000146297457621;
			// // new THREE.Vector2(0.000146297457621,-0.000146298747745);
			texture.transformUv(new THREE.Vector2(0.8888889,0.68175));	
			// texture.transfromUv(new THREE.Vector2(96.361874853131368,33.315727779381810));
			// texture.wrapT = -0.000146298747745;
			// texture.offset = new THREE.Vector2(96.361874853131368,33.315727779381810);
			// texture.wrapS = 0.000146297457621;
			// texture.wrapT = -0.000146298747745;
			// texture.offset = new THREE.Vector2(96.361874853131368,33.315727779381810);
			// texture.repeat.x = 0.000146297457621;
			// texture.repeat.y = -0.000146298747745;
			// texture.offset.y = 33.315727779381810;
			// texture.offset.x = 96.361874853131368;

			// texture = new THREE.TextureLoader().load( 'tibet/public/media/originalmap_rotate_scale.jpg' );	
			material.map = texture; //<---
			// material.mapping = texture; //<---
			break;
		case '2': 
			material.color = new THREE.Color(1,1,1);
			material.wireframe = false;
			texture = new THREE.TextureLoader().load( 'tibet/public/media/dem_as_image.jpg' );	
			// texture.repeat.x = 0.8888889;	
			// texture.repeat.x = 1.125;
			// texture.repeat.y = 1.466;
			// texture.repeat.y = 0.68175;
			// texture.wrapS = 0.000146297457621;
			// texture.wrapT = -0.000146298747745;
			// texture.transformUv(new THREE.Vector2(0.8888889,0.68175));	
			// texture.offset = new THREE.Vector2(96.361874853131368,33.315727779381810);
			// texture.repeat.x = 0.000146297457621;
			// texture.repeat.y = -0.000146298747745;
			// texture.offset.y = 33.315727779381810;
			// texture.offset.x = 96.361874853131368;
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
	
	//Our Position data
	bitMap.fillStyle = 'black';
	//here we perform the conversion back into meters and project our camera's height onto the screen
	bitMap.fillText('  Elevation: ['+ ((firstZ*1 + (camera.position.y/700)*mapHeight)).toFixed(0) + ']', hudWidth-140, hudHeight-40);
	bitMap.fillText('Coordinates: ['+ camera.position.x.toFixed(0) + ', '+ camera.position.z.toFixed(0) + ']', hudWidth-120, hudHeight-10);

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
	bitMap.fillStyle = south;
	bitMap.fill();

	//West
	bitMap.beginPath();
	bitMap.moveTo( 5, hudHeight - 55 );
	bitMap.lineTo( 20, hudHeight - 65 );
	bitMap.lineTo( 20, hudHeight - 45 );
	bitMap.lineTo( 5, hudHeight - 55 );//close triangle
	bitMap.fillStyle = west;
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
	controls.update();
	renderer.render( scene, camera );
	
	//render HUD ontop of our other scene
	renderer.render( hudScene, hudCamera );
}

function createVertices(values) {
	var verticesArray = [];
	//here we need to modify our xyz to be relative to our first point
	// console.log(values[1].d[0]);
	firstX = values[1].d[0].a;
	firstY = values[1].d[0].b;
	firstZ = values[1].d[0].c;
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

		// verticesArray.push(new THREE.Vector3((obj.c - firstX)/120, -1*(obj.b - firstY)/120, -(firstZ - obj.c))); 
		verticesArray.push(new THREE.Vector3((obj.c - firstX)/30, -(obj.b - firstY)/30, -(firstZ - obj.c))); 
		// verticesArray.push(new THREE.Vector3(-(obj.c - firstX)/30, -(obj.b - firstY)/30, -(firstZ - obj.c))); 
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
		//Move stats to different location
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';
		stats.domElement.style.bottom = null;
		stats.domElement.style.right = null;
		console.log("going fullscreen");
		container.style.width = '100vw';

		  if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		  } else if (elem.mozRequestFullScreen) { /* Firefox */
		    elem.mozRequestFullScreen();
		  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		    elem.webkitRequestFullscreen();
		  } else if (elem.msRequestFullscreen) { /* IE/Edge */
		    elem.msRequestFullscreen();
		  }
	}else{
		if(fullScreenState < 0){
			// Move stats to different location
			stats.domElement.style.left = null;
			stats.domElement.style.top = null;
			stats.domElement.style.bottom = '0px';
			stats.domElement.style.right = '10px';
			//fix container size for canvas	
			container.style.width = '80vw';
			exitFullScreen();	
			onWindowResize();
		}
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
		//Move stats to different location
		stats.domElement.style.left = null;
		stats.domElement.style.top = null;
		stats.domElement.style.bottom = '0px';
		stats.domElement.style.right = '10px';
		//resize canvas	
		container.style.width = '80vw';
		sceneController.Fullscreen = false;
		gui.__controllers[2].updateDisplay();
		onWindowResize();
	}
}
