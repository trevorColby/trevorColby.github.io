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


//circle to stag
cPaths.forEach(function(path, index) {
 circleS 
  .add({
    targets: path.id,
    stroke: '#f90000',
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  1000 + 10 * index
  });
});
sPaths.forEach(function(path, index) {
 circleS 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  2600 + 10 * index
  });
});

//stag to circle
sPaths.forEach(function(path, index) {
sCircle 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});


cPaths.forEach(function(path, index) {
sCircle 
  .add({
    targets: path.id,
    stroke: redColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//circle to wolf
wPaths.forEach(function(path, index) {
 circleW 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  10 * index
  });
});

//wolf to circle
wPaths.forEach(function(path, index) {
wCircle 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

cPaths.forEach(function(path, index) {
wCircle 
  .add({
    targets: path.id,
    stroke: redColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//circle to bull 
bPaths.forEach(function(path, index) {
 circleB 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  10 * index
  });
});

//bull to circle
bPaths.forEach(function(path, index) {
bCircle 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

cPaths.forEach(function(path, index) {
bCircle 
  .add({
    targets: path.id,
    stroke: redColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//circle to boar 
baPaths.forEach(function(path, index) {
 circleBA 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  10 * index
  });
});

//boar to circle
baPaths.forEach(function(path, index) {
baCircle 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

cPaths.forEach(function(path, index) {
baCircle 
  .add({
    targets: path.id,
    stroke: redColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});


//************************************ Implode Transitions ************************************
var stagImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var wolfImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var bullImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var boarImplode = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var fadeBlack = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });
var curtain = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

var pictureExpand = anime.timeline({ autoplay: false, direction: 'alternate', loop: false });

//backgorund color change fade dark during return to directory screen
//fade to black
fadeBlack.add({
    targets: 'body',
    backgroundColor: '#000',
    duration: 2000,
    easing: 'easeInCubic',
    offset: 100
});

//curtain animation
curtain.add({
    targets: '#transitionCurtain',
    backgroundColor: '#000',
    opacity: 1,
    duration: 1000,
    easing: 'easeInCubic',
    offset: 0 
});
curtain.add({
    targets: '#transitionCurtain',
    backgroundColor: '#fff',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutCubic',
    offset: 1500 
});

//stag implode 
sPaths.forEach(function(path, index) {
stagImplode	 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInCubic'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});

iPaths.forEach(function(path, index) {
stagImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 100,
      easing: 'easeInCubic'
    },
    // offset: 2600 
    offset: 2600 + 2 * index
  });
});

ePaths.forEach(function(path, index) {
stagImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 150,
      easing: 'easeInCubic'
    },
    offset: 3400 + 2 * index
    // offset: 3500
  });
});
//background color change for stagImplode
// background 
stagImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing: 'easeInCubic',
    offset: 3700
});

//wolf implode
wPaths.forEach(function(path, index) {
wolfImplode	 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInCubic'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});

iPaths.forEach(function(path, index) {
wolfImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 200,
      easing: 'easeInCubic'
    },
    // offset: 2600 
    offset: 2600 + 3 * index
  });
});

ePaths.forEach(function(path, index) {
wolfImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 150,
      easing: 'easeInCubic'
    },
    offset: 3500 + 2 * index
    // offset: 3500
  });
});
//background color change
wolfImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing: 'easeInCubic',
    offset: 3700
});


//bull implode animation
bPaths.forEach(function(path, index) {
bullImplode	 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInCubic'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});
iPaths.forEach(function(path, index) {
bullImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 200,
      easing: 'easeInCubic'
    },
    // offset: 2600 
    offset: 2600 + 3 * index
  });
});
ePaths.forEach(function(path, index) {
bullImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 150,
      easing: 'easeInCubic'
    },
    offset: 3500 + 2 * index
    // offset: 3500
  });
});

// background 
bullImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing: 'easeInCubic',
    offset: 3700
});

//boar implode animation
baPaths.forEach(function(path, index) {
boarImplode	 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInCubic'
    },
    offset: 1000 + 10 * index
    // offset:  5 * index
  });
});

iPaths.forEach(function(path, index) {
boarImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 200,
      easing: 'easeInCubic'
    },
    // offset: 2600 
    offset: 2600 + 3 * index
  });
});

ePaths.forEach(function(path, index) {
boarImplode	 
  .add({
    targets: path.id,
    d: {
      value: path.d,
      duration: 150,
      easing: 'easeInCubic'
    },
    offset: 3500 + 2 * index
    // offset: 3500
  });
});

// background 
boarImplode.add({
    targets: 'body',
    // targets: '#pageSelect0C',
    backgroundColor: '#e6e6e6',
    duration: 200,
    easing: 'easeInCubic',
    offset: 3700
});

//PictureExpand
//Animation for Expanding Pictures in Carousel
pictureExpand.add({
  targets: '#carousel',
  scale: 2,
  duration: 200,
  easing: 'easeInCubic',
  offset: 100
});


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

//stag to to bull
sPaths.forEach(function(path, index) {
 stagBull 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  1000 + 10 * index
  });
});

bPaths.forEach(function(path, index) {
 stagBull 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  2600 + 10 * index
  });
});

//stag to wolf
sPaths.forEach(function(path, index) {
 stagWolf
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

wPaths.forEach(function(path, index) {
 stagWolf
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//stag to Boar
sPaths.forEach(function(path, index) {
stagBoar 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

baPaths.forEach(function(path, index) {
stagBoar 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset:  2600 + 10 * index
  });
});

//Wolf to Bull
wPaths.forEach(function(path, index) {
wolfBull 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});

bPaths.forEach(function(path, index) {
wolfBull 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//Bull to Wolf
bPaths.forEach(function(path, index) {
bullWolf 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
wPaths.forEach(function(path, index) {
bullWolf 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//Bull to boar
bPaths.forEach(function(path, index) {
bullBoar 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
baPaths.forEach(function(path, index) {
bullBoar
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});


//Boar to bull
baPaths.forEach(function(path, index) {
boarBull 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
bPaths.forEach(function(path, index) {
boarBull
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//Wolf to Boar
wPaths.forEach(function(path, index) {
wolfBoar 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
baPaths.forEach(function(path, index) {
wolfBoar 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});


//Boar to Wolf
baPaths.forEach(function(path, index) {
boarWolf 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
wPaths.forEach(function(path, index) {
boarWolf 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});

//Wolf to Stag
wPaths.forEach(function(path, index) {
wolfStag 
  .add({
    targets: path.id,
    stroke: blueColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
sPaths.forEach(function(path, index) {
wolfStag 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});


//Bull to Stag
bPaths.forEach(function(path, index) {
bullStag 
  .add({
    targets: path.id,
    stroke: orangeColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
sPaths.forEach(function(path, index) {
bullStag 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});


//Boar to Stag
baPaths.forEach(function(path, index) {
boarStag 
  .add({
    targets: path.id,
    stroke: purpleColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 1000 + 10 * index
  });
});
sPaths.forEach(function(path, index) {
boarStag 
  .add({
    targets: path.id,
    stroke: greenColor,
    d: {
      value: path.d,
      duration: 700,
      easing: 'easeInOutQuad'
    },
    offset: 2600 + 10 * index
  });
});
