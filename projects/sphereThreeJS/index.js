var group;
var container, stats;
var particlesData = [];
var camera, scene, renderer;
var positions, colors, colorsV;
var fullScreenState = 1;
var gui;

//our dynamic color controls for RGB
var rColor = 0.5; 
var gColor = 0.5; 
var bColor = 0.5; 
//The rate of change for our dynamic RGB values
var rColorChange = 0.005; 
var gColorChange = 0.005; 
var bColorChange = 0.005; 
//The three way 'switch' that alternates which RGB we are changing
var colorChoice = 0;

var particles;
var pointCloud;
var particlePositions;
var linesMesh;
var maxParticleCount = 1000;
var particleCount = 500;
// var r = 800;
var radius = 510;
// var rHalf = r / 2;
var effectController = {
	showDots: true,
	showLines: true,
	minDistance: 150,
	limitConnections: false,
	maxConnections: 20,
	particleCount: 500,
	Fullscreen: false
};
init();
animate();
function initGUI() {
	// var gui = new dat.GUI();
	gui = new dat.GUI({ autoPlace: false });
	gui.add( effectController, "showDots" ).onChange( function ( value ) {
		pointCloud.visible = value;
	} );
	gui.add( effectController, "showLines" ).onChange( function ( value ) {
		linesMesh.visible = value;
	} );
	gui.add( effectController, "minDistance", 10, 300 );
	gui.add( effectController, "limitConnections" );
	gui.add( effectController, "maxConnections", 0, 30, 1 );
	gui.add( effectController, "particleCount", 0, maxParticleCount, 1 ).onChange( function ( value ) {
		particleCount = parseInt( value );
		particles.setDrawRange( 0, particleCount );
	} );
	gui.add( effectController, 'Fullscreen').onChange((value) =>{
		goFullScreen(value);
	});
	var guiContainer = document.getElementById("SphereControls");
	guiContainer.style.position = "relative";
	gui.domElement.style.position = "absolute";
	gui.domElement.style.right = 0;
	gui.domElement.style.top = 0;
	guiContainer.appendChild(gui.domElement);
}
function init() {
	initGUI();
	container = document.getElementById( 'SphereContainer' );
	// SphereContainer.style.position = "relative";
	//declare our stats object
	stats = new Stats();
	// stats.domElement.style.position = "relative";
	stats.domElement.style.top = null;
	stats.domElement.style.zIndex = null;
	stats.domElement.style.left = null;
	stats.domElement.style.bottom = 0;
	stats.domElement.style.right = 0;
	container.appendChild( stats.domElement );
	

	// camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 4000 );
	camera = new THREE.PerspectiveCamera( 45, container.innerWidth / container.innerHeight, 1, 4000 );
	camera.position.z = 1750;
	var controls = new THREE.OrbitControls( camera, container );
	scene = new THREE.Scene();
	group = new THREE.Group();
	scene.add( group );
	// var helper = new THREE.BoxHelper( new THREE.Mesh( new THREE.BoxBufferGeometry( r, r, r ) ) );
	var segments = 25;
	var rings = 15;
	var sphereGeom = new THREE.SphereGeometry(radius,segments,rings);
	var sphereMat = new THREE.MeshBasicMaterial({
		color: 0x2fff00,
		wireframe: true,
		transparent: true,
		opacity: 0.05
	});

	var sphere = new THREE.Mesh(sphereGeom,sphereMat);
	group.add(sphere);
	
	var segments = maxParticleCount * maxParticleCount;
	positions = new Float32Array( segments * 3 );
	colors = new Float32Array( segments * 3 );
	//add in colorsV array to handle our shifting vertex colors
	colorsV = new Float32Array( maxParticleCount * 3 );

	//set our starting color to white for our particle cloud
	// var initVertColor = new THREE.Color(vColor,vColor,vColor);
	var pMaterial = new THREE.PointsMaterial( {
		// Colors: Vertices,
		// color: initVertColor, //originally white
		// color: 0x2fff00, //green
		vertexColors: THREE.VertexColors,
		// vertexColors: 0x2fff00,
		// color: THREE.VertexColors,
		size: 3,
		blending: THREE.AdditiveBlending,
		transparent: true,
		sizeAttenuation: false
	} );
	particles = new THREE.BufferGeometry();
	particlePositions = new Float32Array( maxParticleCount * 3 );
	for ( var i = 0; i < maxParticleCount; i ++ ) {
		//here we are initiliazing our points randomly within a cube
		//generate a random number within the radius of our sphere
		//Math.floor(Math.random()*(max-min+1)+min);
		var validPoint = 0;
		while(validPoint == 0){
			//generate a random point within a cube of our radius size
			var x = Math.floor(Math.random()*(radius + radius)-radius);
			var y = Math.floor(Math.random()*(radius + radius)-radius);
			var z = Math.floor(Math.random()*(radius + radius)-radius);
			//keep going until this point falls within the cube
			if(x*x + y*y + z*z < radius * radius){
				validPoint = 1;
			}
						
		}

		//store all of our particle positions in a single array
		//notice that we are using the multiply by 3 to correctly
		//paramaterize three coordinates per particle
		particlePositions[ i * 3 ] = x;
		particlePositions[ i * 3 + 1 ] = y;
		particlePositions[ i * 3 + 2 ] = z;
		// add it to the geometry
		particlesData.push( {
			velocity: new THREE.Vector3( - 1 + Math.random() * 2, - 1 + Math.random() * 2, - 1 + Math.random() * 2 ),
			numConnections: 0
		} );
	}
	particles.setDrawRange( 0, particleCount );
	particles.addAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3 ).setDynamic( true ) );
	particles.addAttribute( 'color', new THREE.BufferAttribute( colorsV, 3 ).setDynamic( true ) );
	// create the particle system
	pointCloud = new THREE.Points( particles, pMaterial );
	//THIS IS A SPECIFIC TRANSLATION FOR MY WEBPAGE TO FIX CENTERING ISSUE
	group.add( pointCloud );
	var geometry = new THREE.BufferGeometry();
	geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ).setDynamic( true ) );
	geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ).setDynamic( true ) );
	geometry.computeBoundingSphere();
	geometry.setDrawRange( 0, 0 );

	var material = new THREE.LineBasicMaterial( {
		vertexColors: THREE.VertexColors,
		blending: THREE.AdditiveBlending,
		transparent: true
	} );
	linesMesh = new THREE.LineSegments( geometry, material );
	//specifically to align on offset webpage

	group.add( linesMesh );
	//
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	// renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setSize(container.clientWidth, container.clientHeight);	
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
	//Document Event Listenrs: Detect 'esc' click leaving fullscreen
	document.addEventListener('fullscreenchange', exitHandler);
	document.addEventListener('webkitfullscreenchange', exitHandler);
	document.addEventListener('mozfullscreenchange', exitHandler);
	document.addEventListener('MSFullscreenChange', exitHandler);
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	// renderer.setSize( window.innerWidth, window.innerHeight );
 	var container =	document.getElementById("SphereContainer");
	renderer.setSize( container.clientWidth, container.clientHeight );
}

//function to make sure we can just drop our 3JS demo in a webpage
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
    camera.updateProjectionMatrix();

    // update any render target sizes here
  }
}
function animate() {
	resizeCanvasToDisplaySize();
	var vertexpos = 0;
	var colorpos = 0;
	var numConnected = 0;
	for ( var i = 0; i < particleCount; i ++ )
		particlesData[ i ].numConnections = 0;
	for ( var i = 0; i < particleCount; i ++ ) {

		//change the color
		// colorsV[ i * 3  ] = Math.floor(vColor); //need to floor it to make sure we are using an integer
		// colorsV[ i * 3  ] = 0.5; //need to floor it to make sure we are using an integer
		// colorsV[ i * 3 + 1 ] = 0;
		// colorsV[ i * 3 + 2 ] = 0.5;
		colorsV[ i * 3  ] = rColor; //need to floor it to make sure we are using an integer
		colorsV[ i * 3 + 1 ] = gColor;
		colorsV[ i * 3 + 2 ] = bColor;

		// get the particle
		var particleData = particlesData[ i ];
		particlePositions[ i * 3 ] += particleData.velocity.x;
		particlePositions[ i * 3 + 1 ] += particleData.velocity.y;
		particlePositions[ i * 3 + 2 ] += particleData.velocity.z;
	
		//SPHERE !!!!
		if (((particlePositions[ i * 3 ] * particlePositions[ i * 3 ]) +
		     (particlePositions[ i * 3 + 1 ] * particlePositions[ i * 3 + 1 ]) + 
		     (particlePositions[ i * 3 + 2 ] * particlePositions[ i * 3 + 2 ])) >= (radius * radius)) {

			// if (particlePositions[i*3] >= particlePositions[i*3 +1] && particlePositions[i*3] >= particlePositions[i*3+2]) {
				particleData.velocity.x = - particleData.velocity.x;
			// }
			// else if (particlePositions[i*3+1] >= particlePositions[i*3] && particlePositions[i*3+1] >= particlePositions[i*3+2]) {
				particleData.velocity.y = - particleData.velocity.y;
			// }
			// else {
				particleData.velocity.z = - particleData.velocity.z;
			// }
		}

		//check max connections
		if ( effectController.limitConnections && particleData.numConnections >= effectController.maxConnections )
			continue;
		
		// Check collision
		for ( var j = i + 1; j < particleCount; j ++ ) {
			var particleDataB = particlesData[ j ];
			if ( effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections )
				continue;
			var dx = particlePositions[ i * 3 ] - particlePositions[ j * 3 ];
			var dy = particlePositions[ i * 3 + 1 ] - particlePositions[ j * 3 + 1 ];
			var dz = particlePositions[ i * 3 + 2 ] - particlePositions[ j * 3 + 2 ];
			var dist = Math.sqrt( dx * dx + dy * dy + dz * dz );
			if ( dist < effectController.minDistance ) {
				particleData.numConnections ++;
				particleDataB.numConnections ++;
				var alpha = 1.0 - dist / effectController.minDistance;
				positions[ vertexpos ++ ] = particlePositions[ i * 3 ];
				positions[ vertexpos ++ ] = particlePositions[ i * 3 + 1 ];
				positions[ vertexpos ++ ] = particlePositions[ i * 3 + 2 ];
				positions[ vertexpos ++ ] = particlePositions[ j * 3 ];
				positions[ vertexpos ++ ] = particlePositions[ j * 3 + 1 ];
				positions[ vertexpos ++ ] = particlePositions[ j * 3 + 2 ];
				//changing the color of each line based on if we are within range of another particle or not
				colors[ colorpos ++ ] = alpha*rColor;
				colors[ colorpos ++ ] = alpha*gColor;
				colors[ colorpos ++ ] = alpha*bColor;
				colors[ colorpos ++ ] = alpha*rColor;
				colors[ colorpos ++ ] = alpha*gColor;
				colors[ colorpos ++ ] = alpha*bColor;
				numConnected ++;
			}
		}
	}
	//Increment vColor by our vColorChange i.e our color step size
	// vColor = vColor + vColorChange;
	
	//check if each of our color components have maxed out, once one has, we switch to the next one
	if( colorChoice == 0 ){
		rColor = rColor + rColorChange;
		if (rColor >= 1.0 || rColor <= 0.0){ //if we hit the max/min color, change direction, exclude white/black
			//change our color range to now alter green
			if(rColor <= 0.0){
				rColor = 0.01;
				rColorChange = 0.01;
			}else{
				rColor = 0.99;
				rColorChange = -0.01;
			}
			colorChoice = 1;
		}
	}
	else if(colorChoice == 1){
		gColor = gColor + gColorChange;
		if (gColor >= 1.0 || gColor <= 0.0){ //if we hit the max/min color, change direction, exclude white/black
			//change our color range to now alter green
			if(gColor <= 0.0){
				gColor = 0.01;
				gColorChange = 0.01;
			}else{
				gColor = 0.99;
				gColorChange = -0.01;
			}
			colorChoice = 2;
		}
	}
	else if ( colorChoice == 2){
		bColor = bColor + bColorChange;
		if (bColor >= 1.0 || bColor <= 0.0){ //if we hit the max/min color, change direction, exclude white/black
			//change our color range to now alter green
			if(bColor <= 0.0){
				bColor = 0.01;
				bColorChange = 0.01;
			}else{
				bColor = 0.99;
				bColorChange = -0.01;
			}
			colorChoice = 0;
		}
	}

	pointCloud.geometry.attributes.position.needsUpdate = true;
	pointCloud.geometry.attributes.color.needsUpdate = true;
	linesMesh.geometry.setDrawRange( 0, numConnected * 2 );
	linesMesh.geometry.attributes.position.needsUpdate = true;
	linesMesh.geometry.attributes.color.needsUpdate = true;
	requestAnimationFrame( animate );
	stats.update();
	render();
}
function render() {
	var time = Date.now() * 0.001;
	group.rotation.y = time * 0.1;
	renderer.render( scene, camera );
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
		effectController.Fullscreen = false;
		gui.__controllers[6].updateDisplay();
		onWindowResize();
	}
}
