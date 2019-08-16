//This file contains all of the animations to be run with the svg found in svgPaths.js

//COLOR CHOICES FOR OUR TRANSITIONS!
var blueColor = '#00FFFF';
var redColor = '#f90000';
// var orangeColor = '#ff3d00';
var orangeColor = '#ffa500';
var purpleColor = '#FF00FF';
var greenColor = '#00FF00';

//ePaths: explode paths
//iPaths: implode paths
//cPaths: logo paths
//sPaths: stag paths
//bPaths: bull paths
//wPaths: wolf paths
//baPaths: boar paths
//************************************ LOGO Transitions ************************************
var sCircle = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var circleS = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wCircle = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var circleW = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bCircle = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var circleB = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var baCircle = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var circleBA = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

//************************************ Implode Transitions ************************************
var stagImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bullImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var fadeBlack = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var curtain = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var pictureExpand = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

//************************************ Animal To Animal Transitions ************************************
var stagWolf = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var stagBull = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var stagBoar = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfBull = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bullWolf = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfBoar = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarWolf = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfStag = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bullStag = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarStag = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bullBoar = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarBull = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

const easing = 'easeInOutQuad';
const duration = 700;

var l = cPaths.length; //they are all the same length
for(var i = 0; i < l; i++){
	//circle to stag
	circleS.add({
		targets: cPaths[i].id,
		stroke: redColor,
		// translateZ: 0,
		d: {
		value: cPaths[i].d,
		duration,
		easing
		},
		offset:  1000 + 10 * i 
	});
	circleS.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset:  2600 + 10 * i
	});
	
	//stag to circle
	sCircle.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	sCircle.add({
		targets: cPaths[i].id,
		stroke: redColor,
		// translateZ: 0,
		d: {
		value: cPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//circle to wolf
	circleW.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset:  10 * i
	});
	
	//wolf to circle
	wCircle.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	wCircle.add({
		targets: cPaths[i].id,
		stroke: redColor,
		// translateZ: 0,
		d: {
		value: cPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//circle to bull 
	circleB.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset:  10 * i
	});

	//bull to circle
	bCircle.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	bCircle.add({
		targets: cPaths[i].id,
		stroke: redColor,
		// translateZ: 0,
		d: {
		value: cPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//circle to boar 
	circleBA.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset:  10 * i
	});
	
	//boar to circle
	baCircle.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	baCircle.add({
		targets: cPaths[i].id,
		stroke: redColor,
		// translateZ: 0,
		d: {
		value: cPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//stag implode 
	stagImplode.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration: 150,
		easing
		},
		offset: 1000 + 10 * i
	});
	stagImplode.add({
		targets: iPaths[i].id,
		// translateZ: 0,
		d: {
		value: iPaths[i].d,
		duration: 200,
		easing
		},
		offset: 2600 + 2 * i
	});
	stagImplode.add({
		targets: ePaths[i].id,
		// translateZ: 0,
		d: {
		value: ePaths[i].d,
		duration: 150,
		easing
		},
		offset: 3400 + 2 * i
	});
	
	//wolf implode
	wolfImplode.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing: 'easeInCubic'
		},
		offset: 1000 + 10 * i
	});
	wolfImplode.add({
		targets: iPaths[i].id,
		// translateZ: 0,
		d: {
		value: iPaths[i].d,
		duration: 200,
		easing
		},
		offset: 2600 + 3 * i
	});
	wolfImplode.add({
		targets: ePaths[i].id,
		// translateZ: 0,
		d: {
		value: ePaths[i].d,
		duration: 150,
		easing
		},
		offset: 3500 + 2 * i
	});
	
	//bull implode animation
	bullImplode.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	bullImplode.add({
		targets: iPaths[i].id,
		// translateZ: 0,
		d: {
		value: iPaths[i].d,
		duration: 200,
		easing
		},
		offset: 2600 + 3 * i
	});
	bullImplode.add({
		targets: ePaths[i].id,
		// translateZ: 0,
		d: {
		value: ePaths[i].d,
		duration: 150,
		easing
		},
		offset: 3500 + 2 * i
	});
	
	//boar implode animation
	boarImplode.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	boarImplode.add({
		targets: iPaths[i].id,
		// translateZ: 0,
		d: {
		value: iPaths[i].d,
		duration: 200,
		easing
		},
		offset: 2600 + 3 * i
	});
	boarImplode.add({
		targets: ePaths[i].id,
		// translateZ: 0,
		d: {
		value: ePaths[i].d,
		duration: 150,
		easing
		},
		offset: 3500 + 2 * i
	});
	
	//stag to to bull
	stagBull.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset:  1000 + 10 * i
	});
	stagBull.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset:  2600 + 10 * i
	});
	
	//stag to wolf
	stagWolf.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	stagWolf.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//stag to Boar
	stagBoar.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	stagBoar.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset:  2600 + 10 * i
	});
	
	//Wolf to Bull
	wolfBull.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	wolfBull.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});

	//Bull to Wolf
	bullWolf.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	bullWolf.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//Bull to boar
	bullBoar.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	bullBoar.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
	
	//Boar to bull
	boarBull.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	boarBull.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});

	//Wolf to Boar
	wolfBoar.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	wolfBoar.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});

	//Boar to Wolf
	boarWolf.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	boarWolf.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});

	//Wolf to Stag
	wolfStag.add({
		targets: wPaths[i].id,
		stroke: blueColor,
		// translateZ: 0,
		d: {
		value: wPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	wolfStag.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration: 700,
		easing
		},
		offset: 2600 + 10 * i
	});

	//Bull to Stag
	bullStag.add({
		targets: bPaths[i].id,
		stroke: orangeColor,
		// translateZ: 0,
		d: {
		value: bPaths[i].d,
		duration,
		easing 
		},
		offset: 1000 + 10 * i
	});
	bullStag.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});

	//Boar to Stag
	boarStag.add({
		targets: baPaths[i].id,
		stroke: purpleColor,
		// translateZ: 0,
		d: {
		value: baPaths[i].d,
		duration,
		easing
		},
		offset: 1000 + 10 * i
	});
	boarStag.add({
		targets: sPaths[i].id,
		stroke: greenColor,
		// translateZ: 0,
		d: {
		value: sPaths[i].d,
		duration,
		easing
		},
		offset: 2600 + 10 * i
	});
}

//backgorund color change fade dark during return to directory screen
//fade to black
fadeBlack.add({
    targets: 'body',
    backgroundColor: '#000',
    duration: 2000,
    easing,
    offset: 100
});

//curtain animation
curtain.add({
    targets: '#transitionCurtain',
    backgroundColor: '#000',
    opacity: 1,
    duration: 1000,
    easing,
    offset: 0 
});
curtain.add({
    targets: '#transitionCurtain',
    backgroundColor: '#fff',
    opacity: 0,
    duration: 1000,
    easing,
    offset: 1500 
});

//background color change for stagImplode
// background 
stagImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing,
    offset: 3700
});

//background color change
wolfImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing,
    offset: 3700
});

// background 
bullImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing,
    offset: 3700
});

// background 
boarImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing,
    offset: 3700
});

//PictureExpand
//Animation for Expanding Pictures in Carousel
pictureExpand.add({
  targets: '#carousel',
  scale: 2,
  duration: 200,
  easing,
  offset: 100
});
