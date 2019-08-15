//Only load in items on first launch
var carouselLaunched = 0;
var isHorizontal = true;
var verticalOffset;
//check for vibrate support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

//Need to check if we are on mobile or desktop to set our appropriate zoom for svg
function isMobileDevice() {
	    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//function to solve javascript modulus bug
function mod(n, m) {
	  return ((n % m) + m) % m;
}

var cssSuffix = '';
if(isMobileDevice()) {
	//change the css suffix so that I can add the appropriate css class if on mobile device
	cssSuffix = '-mobile';
	isHorizontal = false;
}

document.getElementById('homeIconSVG').classList.add('svg-nav-icon' + cssSuffix);
document.getElementById('svgElem').classList.add('svg-animation-elem' + cssSuffix);

var rotationAxis = isHorizontal ? 'rotateY' : 'rotateX'


//Formatting Solution for SVG animation of spotlight unerline
//this is a dynamic calc so I probably can't pull it out but may want to transfer it into a cleaner private function call for setup
var pageSelect0 = document.getElementById("pageSelect0");
var pS0Container = document.getElementById("pageSelect0C");
pageSelect0.style.left = (pS0Container.offsetWidth - pageSelect0.offsetWidth)/2 + "px";

var pageSelect1 = document.getElementById("pageSelect1");
var pS1Container = document.getElementById("pageSelect1C");
pageSelect1.style.left = (pS1Container.offsetWidth - pageSelect1.offsetWidth)/2 + "px";

var pageSelect2 = document.getElementById("pageSelect2");
var pS2Container = document.getElementById("pageSelect2C");
pageSelect2.style.left = (pS2Container.offsetWidth - pageSelect2.offsetWidth)/2 + "px";

var pageSelect3 = document.getElementById("pageSelect3");
var pS3Container = document.getElementById("pageSelect3C");
pageSelect3.style.left = (pS3Container.offsetWidth - pageSelect3.offsetWidth)/2 + "px";

window.onresize = function(event){
	//Formatting Solution for SVG animation of spotlight unerline
	var pageSelect0 = document.getElementById("pageSelect0");
	var pS0Container = document.getElementById("pageSelect0C");
	pageSelect0.style.left = (pS0Container.offsetWidth - pageSelect0.offsetWidth)/2 + "px";

	var pageSelect1 = document.getElementById("pageSelect1");
	var pS1Container = document.getElementById("pageSelect1C");
	pageSelect1.style.left = (pS1Container.offsetWidth - pageSelect1.offsetWidth)/2 + "px";

	var pageSelect2 = document.getElementById("pageSelect2");
	var pS2Container = document.getElementById("pageSelect2C");
	pageSelect2.style.left = (pS2Container.offsetWidth - pageSelect2.offsetWidth)/2 + "px";

	var pageSelect3 = document.getElementById("pageSelect3");
	var pS3Container = document.getElementById("pageSelect3C");
	pageSelect3.style.left = (pS3Container.offsetWidth - pageSelect3.offsetWidth)/2 + "px";

}

var removeAllAnimations = function(){
	cPaths.forEach(function(path, index){
		anime.remove(path.id);
	});
}

//function to set the stroke color and optionally weight for all paths with matching animation ID
var setStrokeColor = function(color,width){
	document.querySelectorAll('path').forEach(function(path) {
		 path.style.stroke = color;
		if(width != 0){
			path.style.strokeWidth = width + 'px';
		}
	});
}

//function to set the fill color and fill-opacity for all paths with matching animation ID
var setFillColor = function(color, opacity){
	document.querySelectorAll('path').forEach(function(path) {
		 path.style.fill = color;
		 path.style.fillOpacity = opacity; 
	});
}

//detect if triangles are explode or not
var explode = false;

//0: Stag
//1: Wolf 
//2: Bull
//3: Boar
var currState = -1;
var changeState = function(nextState){
	if(explode == false) {
		if(currState != nextState){
			removeAllAnimations();
			if(currState == -1){
				if(nextState == 0){
					circleS.seek(2500);
					circleS.play();	
				}
				else if(nextState == 1){
					circleW.restart();
					circleW.play();	
				}
				else if(nextState == 2){
					circleB.restart();
					circleB.play();	
				}
				else if(nextState == 3){
					circleBA.restart();
					circleBA.play();	
				}
				currState = nextState;
			}else if(currState == 0){
				if(nextState == 1){
					stagWolf.seek(2500);
					stagWolf.play();
					currState = nextState;
				}
				else if(nextState == 2){
					stagBull.seek(2500);
					stagBull.play();
					currState = nextState;
				}
				else if(nextState == 3){
					stagBoar.seek(2500);	
					stagBoar.play();	
					currState = nextState;
				}
				else if(nextState == -1){
						sCircle.seek(2500);
						sCircle.play();
						currState = nextState;
				}
			}else if(currState == 1){
				if(nextState == 0){
					wolfStag.seek(2500);
					wolfStag.play();
					currState = nextState;
				}
				else if(nextState == 2){
					wolfBull.seek(2500);
					wolfBull.play();
					currState = nextState;
				}
				else if(nextState == 3){
					wolfBoar.seek(2500);
					wolfBoar.play();
					currState = nextState;
				}
				else if(nextState == -1){
					wCircle.seek(2500);
					wCircle.play();
					currState = nextState;
				}
			}else if(currState == 2){
				if(nextState == 0){
					bullStag.seek(2500);
					bullStag.play();
					currState = nextState;
				}
				else if(nextState == 1){
					bullWolf.seek(2500);
					bullWolf.play();
					currState = nextState;
				}
				else if(nextState == 3){
					bullBoar.seek(2500);
					bullBoar.play();
					currState = nextState;
				}
				else if(nextState == -1){
					bCircle.seek(2500);
					bCircle.play();
					currState = nextState;
				}
			}else if(currState == 3){
				if(nextState == 0){
					boarStag.seek(2500);
					boarStag.play();
					currState = nextState;
				}
				else if(nextState == 1){
					boarWolf.seek(2500);
					boarWolf.play();
					currState = nextState;
				}
				else if(nextState == 2){
					boarBull.seek(2500);
					boarBull.play();
					currState = nextState;
				}
				else if(nextState == -1){
					baCircle.seek(2500);
					baCircle.play();
					currState = nextState;
				}
			}
		}
	}
}

//create our closure wrapper
var funcClosure = function(func, context, params){
	return function(){
		func.apply(context, params);	
	}
}

var hideItem = function(eId){
    //hides an element from the document
    var e = document.getElementById(eId);
    e.style.visibility = 'hidden'; 
}

var showItem = function(eId){
    //hides an element from the document
    var e = document.getElementById(eId);
    e.style.visibility = 'visible'; 
}

var removeItem = function(elemId){
	var e = document.getElementById(elemId);
	e.parentNode.removeChild(e);
}

var addItem = function(parentId,elemTag,elemId,innerHTML,classNames){
    var pID = document.getElementById(parentId);
    var newElem = document.createElement(elemTag);
    newElem.setAttribute('id', elemId);
    if(innerHTML != ''){
        newElem.innerHTML = innerHTML;
    }
    if(classNames.length != 0){
	for(var i = 0; i < classNames.length; i++){
            newElem.classList.add(classNames[i]);   
	}
    }
    pID.appendChild(newElem);
}

var imageNum = 0;
var addImage = function(parentId,source){
    var pID = document.getElementById(parentId);
    var newElem = document.createElement('img');
    newElem.setAttribute('id', 'card' + imageNum);
    imageNum = imageNum + 1;
    newElem.src = source;
    newElem.alt = "Could not load image";
    newElem.classList.add('cImg');   
    newElem.classList.add('carousel__cell' + cssSuffix);   
    pID.appendChild(newElem);
}

function setTitle(linkNum){
	if(linkNum == 0){
		addItem('floatContainer','h1','pageTitle','Home',[`pageTitle${cssSuffix}`]);
	}else if(linkNum == 1){
		addItem('floatContainer','h1','pageTitle','Coding Projects',[`pageTitle${cssSuffix}`]);
	}else if(linkNum == 2){
		addItem('floatContainer','h1','pageTitle','Portfolio',[`pageTitle${cssSuffix}`]);
	}else if(linkNum == 3){
		addItem('floatContainer','h1','pageTitle','About Me',[`pageTitle${cssSuffix}`]);
	}	
}
//function called when a link in the directory is clicked
//Hides items and on the first time through will add the neccesary features for rendering the carousel
var hideAnimationStage = function(linkNum){
	explode = true;
	hideItem("pageSelect0C");	
	hideItem("pageSelect1C");	
	hideItem("pageSelect2C");	
	hideItem("pageSelect3C");	
	setTitle(linkNum);
	showItem('pageTitle');
	var tileContainer = document.getElementById('tileContainer');
	var floatContainer = document.getElementById('floatContainer');
	var mobileOffset = isHorizontal ? 0 : 50;
	tileContainer.style.marginTop = (floatContainer.getBoundingClientRect().height + mobileOffset).toString() + 'px';
	var h = document.getElementById("homeIcon").offsetHeight;
	var w = document.getElementById("homeIcon").offsetWidth;
	document.getElementById("homeIconSVG").setAttribute("viewBox", "30 30 150 150");
	setTimeout(function(){
		carouselLaunch(linkNum);
	},1500);		
	setTimeout(function(){
		hideItem("animationContainer");
		showItem("homeIcon");	
		setStrokeColor("#000000",0.4);		
	},1500);		
}

var hoverOnHomeIcon = function(){
	var home = document.getElementById('homeIconSVG');
	home.addEventListener('mouseover',function(){
		setStrokeColor(redColor,0);	
		
	})
	home.addEventListener('mouseout',function(){
		if (explode) {
			setStrokeColor('#000',0);	
		}
	})
}

var revealAnimationStage = function(click){
	imageNum = 0;
	curtain.restart();
	curtain.play();
	explode = false;
	if(isMobileDevice()){
		clearColors();
	}
	changeState(-1);
	setTimeout(function(){
		hideItem("homeIcon");
		showItem("pageSelect0C");	
		showItem("pageSelect1C");	
		showItem("pageSelect2C");	
		showItem("pageSelect3C");	
		removeItem('pageTitle');
		showItem("animationContainer");
		removeItem("carouselTitle");
		removeItem("nav");
		removeItem("carousel");
		removeItem("infoCard");
		fadeBlack.restart();
		fadeBlack.play();

	}, 1000);
	setTimeout(function(){setStrokeColor(redColor,0.4);},1800);
}

var currLink = 0;
var clickAnimation = function(click){
	if(!isMobileDevice()){
		if(click == 0){
			stagImplode.seek(2500);
			stagImplode.play();
			hideAnimationStage(0);
			currLink = 0;
		}
		else if(click == 1){
			wolfImplode.seek(2500);
			wolfImplode.play();
			hideAnimationStage(1);
			currLink = 1;
		}
		else if(click == 2){
			bullImplode.seek(2500);
			bullImplode.play();
			hideAnimationStage(2);
			currLink = 2;
		}
		else if(click == 3){
			boarImplode.seek(2500);
			boarImplode.play();
			hideAnimationStage(3);
			currLink = 3;
		}
	} else { 
		//if we are on a mobile device we don't have hover events so we should stall out
		//the hover state machine by setting explode = true; and then manually perform the transformations
		//from whatever state we are currently in, to the state that has been clicked on. Then we finish by 
		//performing the implode/explode animation and calling the hideAnimationStage() function with the appropriate
		//paramter corresponding to whatever link was clicked
		if(click == 0){
			mobileImplodeHelper(0, stagImplode)	
		}
		else if(click == 1){
			mobileImplodeHelper(1, wolfImplode)	
		}
		else if(click == 2){
			mobileImplodeHelper(2, bullImplode)	
		}
		else if(click == 3){
			mobileImplodeHelper(3, boarImplode)	
		}
	}

};

function implodeHelper(animalNum, imploder) {
	imploder.seek(2500);
	imploder.play();
	hideAnimationStage(animalNum);
	currLink = animalNum;
}

function mobileImplodeHelper(animalNum) {
	var imploder = 
		animalNum == 0 ? 
		stagImplode : animalNum == 1 ?
		wolfImplode : animalNum == 2 ?
		bullImplode : boarImplode;
	explode = true;
	currLink = animalNum;
	clearColors();
	if (currState != -1){
		document.getElementById(`pageSelect${currState}C`).style.color = colorRouter();
		document.getElementById(`pageSelect${currState}`).style.color = colorRouter();
	}
	setTimeout(function(){
		imploder.seek(2500);
		imploder.play();
		hideAnimationStage(animalNum);
	},1500);
}

var createTile = function(tileId,imageSrc,header,headerDescrip,date){
	var div1Classes = ['w3-card-4', 'w3-margin', 'w3-white'];
	var div2Classes = ['w3-container'];
	addItem('tileContainer','div',tileId,'',div1Classes);
	addImage(tileId,imageSrc);
	addItem(tileId,'div','div2','',div2Classes);
	addItem('div2','h3','head',header,[]);
	document.getElementById('head').style.fontWeight = 'bold';
	addItem('div2','h5','headerD',headerDescrip,[]);
	addItem('headerD','span','',date,["w3-opacity"]);
}
var imagePreloader = function(){
	var imageObj = new Image();

	var images = new Array();
	images[0] ='../../media/projects/Carousel/tibetScreenshot.png';
	images[1] ='../../media/projects/Carousel/HopPhoto.jpg';
	images[2] ='../../media/projects/Carousel/leaflet.gif';
	images[3] ='../../media/projects/Carousel/rayTrace.jpg';
	images[4] ='../../media/projects/Carousel/recursiveRayTracing.png';
	images[5] ='../../media/projects/Carousel/threeJSSphere.png';
	images[5] ='../../media/projects/Carousel/teapot.png';
	images[6] ='../../media/projects/Carousel/arm.png';

	for(var i = 0; i <7; i++){
		imageObj.src = images[i];	
	}
}

//function collection to load images under stag/wolf/bull/boar links
var stagLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/tibetScreenshot.png');
	addImage('fig','../../media/projects/Carousel/HopPhoto.jpg');
	addImage('fig','../../media/projects/Carousel/leaflet.gif');
	addImage('fig','../../media/projects/Carousel/rayTrace.jpg');
	addImage('fig','../../media/projects/Carousel/recursiveRayTracing.png');
	addImage('fig','../../media/projects/Carousel/threeJSSphere.png');
	addImage('fig','../../media/projects/Carousel/leaflet.gif');
	addImage('fig','../../media/projects/Carousel/teapot.png');
	addImage('fig','../../media/projects/Carousel/arm.png');
}

var wolfLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/tibetScreenshot.png');
	addImage('fig','../../media/projects/Carousel/HopPhoto.jpg');
	addImage('fig','../../media/projects/Carousel/leaflet.gif');
	addImage('fig','../../media/projects/Carousel/rayTrace.jpg');
	addImage('fig','../../media/projects/Carousel/recursiveRayTracing.png');
	addImage('fig','../../media/projects/Carousel/threeJSSphere.png');
	addImage('fig','../../media/projects/Carousel/teapot.png');
	addImage('fig','../../media/projects/Carousel/arm.png');
}

var bullLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
}

var boarLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/');
}

var carouselLaunch = function(linkNum){
	addItem('tileContainer','div','carousel','',[`carousel${cssSuffix}`]);
	showItem('carousel');
	document.getElementById('carousel').setAttribute('data-gap',12);
	addItem('carousel','div','fig','',[]);
	showItem('fig');

	// addItem('body','div','footerContainer','',[]);
	//add in carousel title
	addItem('tileContainer','h1','carouselTitle','',['data-morph',`carouselTitle${cssSuffix}`]);
	showItem('carouselTitle');
	//add in carousel buttons nav container
	addItem('tileContainer','nav','nav','',[]);
	showItem('nav');
	//add in next and prev buttons
	addItem('nav','button','prev','Prev',['nav','prev']);
	showItem('prev');
	addItem('nav','button','next','Next',['nav', 'next']);
	showItem('next');
	if(!isHorizontal) {
		verticalOffset = document.getElementById('fig').getBoundingClientRect().height * 0.80;
		document.getElementById('carouselTitle').style.marginTop = verticalOffset + 'px';
	}
	//carousel images
	if(linkNum == 0){
		stagLinkImages();	
	}else if(linkNum == 1){
		wolfLinkImages();	
	}else if(linkNum == 2){
		bullLinkImages();	
	}else if(linkNum == 3){
		boarLinkImages();	
	}
	//javacsript to control carousel rotation
	var carousels = document.querySelectorAll('.carousel' + cssSuffix);
	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}

	function carousel(root) {
		var figure = root.querySelector('#fig');
		var nav = root.querySelector('nav');
		var images = figure.children;
		var n = images.length;
		var gap = root.dataset.gap || 0;
		var bfc = 'bfc' in root.dataset;
		var theta =  360 / n;
		var currImage = 0.0;
		var radius;
		
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
		window.addEventListener('resize', () => { 
			setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
		});

		setupNavigation();
		// var buttonHeight = document.getElementById('next').offsetHeight;
		setupCardClick(linkNum);
		function setupCarousel(n, s) {
			//add in title for carousel slides

			var screenW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var screenH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			var res = screenW/screenH;
			var width = document.getElementById('fig').offsetWidth; //for vertical orientation will need both
			var height = document.getElementById('fig').offsetHeight; //for vertical orientation will need both
			var cellSize = isHorizontal ? width : height;
			radius = Math.round((cellSize/2)/Math.tan( Math.PI / 9)); //need to make this dynamic to adapt to cell width
			for (var i = 0; i < n; i++){
				images[i].style.transform = `${rotationAxis}(${i * theta}deg) translateZ(${radius}px)`;
			}
			rotateCarousel(currImage);
			if(!isHorizontal) {
				//if we are not horizontal i.e mobile, listen for up/down swipes
				var body = document.getElementsByTagName('body')[0];
				var hammerC = new Hammer.Manager(body);
				var swipeC = new Hammer.Swipe();
				hammerC.add(swipeC);
				hammerC.on('swipeup', function(ev) {
					if(!isHorizontal && explode) {
						if(!document.getElementById('card' + mod(currImage,8)).classList.contains('expand')) {
							currImage = currImage - 1;
						}
					}
					rotateCarousel(currImage);
				});
				
				hammerC.on('swipedown', function(ev) {
					if(!isHorizontal && explode) {
						if(!document.getElementById('card' + mod(currImage,8)).classList.contains('expand')) {
							currImage = currImage + 1;	
						}
					}
					rotateCarousel(currImage);
				});
			
			}
		}

		function setupNavigation() {
			var navig = document.getElementById('nav');	
			navig.addEventListener('click', onClick, true);
			function onClick(e) {
				e.stopPropagation();
				var t = e.target;
				if (t.tagName.toUpperCase() != 'BUTTON')
					return;
				if (t.classList.contains('next')) {
					currImage++;
				}
				else {
					currImage--;
				}
				rotateCarousel(currImage);
			}
		}

		//function to fill the card content on a click event
		//NOTE: The infoObjects for this are defined near the top of the file
		function setCardContent(infoObject, numCard){
			var cardElem = document.getElementById(numCard);
			cardElem.classList.add('expand');
			var translation = cardElem.style.transform;
			var scaleFactor = isHorizontal ? 5 : 1.5;
			cardElem.style.transform = translation + ` scale(${scaleFactor})`;
			var infoElem = document.getElementById('infoCard');
			infoElem.classList.add('showCard');
			document.getElementById('cardLink').href = infoObject[numCard].link;
			document.getElementById('cardImgLink').src = infoObject[numCard].linkImg;
			var infoCard = document.getElementById('infoCard');
			infoCard.childNodes[1].innerHTML = infoObject[numCard].title;	
			infoCard.childNodes[2].childNodes[0].innerHTML = infoObject[numCard].subTitle;
			infoCard.childNodes[2].childNodes[1].innerHTML = infoObject[numCard].content;
		}
		
		//helper function to pass in correct object to other helper functions
		function cardClickSwitchBoard(infoObj, cardID){
			var num = mod(currImage,8);
			if(cardID == num){
				if(num == 0){
					setCardContent(infoObj,'card0');
				}else if(num == 1){
					setCardContent(infoObj,'card1');
				}else if(num == 2){
					setCardContent(infoObj,'card2');
				}else if(num == 3){
					setCardContent(infoObj,'card3');
				}else if(num == 4){
					setCardContent(infoObj,'card4');
				}else if(num == 5){
					setCardContent(infoObj,'card5');
				}else if(num == 6){
					setCardContent(infoObj,'card6');
				}else if(num == 7){
					setCardContent(infoObj,'card7');
				}else if(num == 8){
					setCardContent(infoObj,'card8');
				}else if(num == 9){
					setCardContent(infoObj,'card9');
				}
			}
		}

		//this is a closure to create a click event for each individual image
		//	- i.e each image has its own individual cardID local variable that is different
		//	  and can be compared to the currImage value
		function cardClick(cardID, linkNum){
			if(linkNum == 0){
				return function(){
					cardClickSwitchBoard(stagContent, cardID);
				}
			}
			else if(linkNum == 1){
				return function(){
					cardClickSwitchBoard(wolfContent, cardID);
				}
			}else if(linkNum == 2){
				return function(){
					cardClickSwitchBoard(wolfContent, cardID);
				}
					
			}else if(linkNum == 3){
				return function(){
					cardClickSwitchBoard(wolfContent, cardID);
				}
			}else if(linkNum == 3){
				return function(){
					cardClickSwitchBoard(wolfContent, cardID);
				}
			}
		}
		function setupCardClick(linkNum) {
			for(var i =0; i < imageNum; i ++){
				var card = document.getElementById('card' + i);	
				card.addEventListener('click',cardClick(i,linkNum) , true);
			
			}
			//This is the info div that will become visible on cardClick()
			addItem('tileContainer','div','infoCard','',['infoCard']);
			//this is just a holder for the info and pic that will be filled on click
			// ********* NEED TO FIGURE OUT HOW I WANT THIS PROJECT PRESENTATION TO LOOK ******** 
			// addImage('infoCard','');
			// var imageC = document.getElementById('card' + (imageNum - 1));
			// imageC.style.position = 'absolute';
			// imageC.style.left = 0;
			// imageC.style.height = '25%';
			// imageC.style.width = '20%';
			// imageC.style.clipPath = 'circle(10% at 10% 10%)';
			addItem('infoCard','div','x','',[`close${cssSuffix}`]);
			var x = document.getElementById('x');
			x.addEventListener('click', xClick, true);
			addItem('infoCard','h2','','John Doe',['cardTitle']);
			addItem('infoCard','div','cardBody','',['cardBody']);
			addItem('cardBody','p','','Architect and Engineer',['cardSubTitle']);
			addItem('cardBody','p','','Hope this works',['cardContent']);
			addItem('cardBody','a','cardLink','',[]);
			addItem('cardLink','img','cardImgLink','',['cardImgLink']);
		}

		function xClick(event){
			var num = mod(currImage,8);
			document.getElementById('infoCard').classList.remove('showCard');
			var curCard = document.getElementById('card' + num);
			curCard.classList.remove('expand');	
			var transf = curCard.style.transform;
			var shrinkFactor = isHorizontal ? 0.2 : 1/1.5;
			curCard.style.transform = transf + `scale(${shrinkFactor})`;
			var cardImg = document.getElementById('cardImgLink');
			setTimeout(function(){cardImg.src = '';},400);
		}

		function rotateCarousel(imageIndex) {
			var roundImageIndex = Math.round(imageIndex);
			var roundCurrImage = Math.round(currImage);
			figure.style.transform = `translateZ(${-radius}px) ${rotationAxis}(${roundImageIndex * -theta}deg)`;
			updateClickable(mod(roundCurrImage,n));
			updateMorphText(mod(roundCurrImage,n));
			if (!isHorizontal && navigator.vibrate) {
				navigator.vibrate(10);
			}
		}
		function updateClickable(cImage){
			for(var i=0; i < 8; i ++){
				var card = document.getElementById('card' + i);
				if(i == cImage){
					card.classList.add('clickable');
					card.classList.remove('notClickable');
				}else{
					card.classList.remove('clickable');
					card.classList.add('notClickable');
				}
			}	
		}
	}
}


//morphing text experiment
/**
 * morpher() morph a text to another
 * It loops over chars to morph the text
 *
 * @param {Element} element
 * @param {String} start
 * @param {String} end
 */
const morpher = (element, start, end) => {
  /**
   * Write parameters
   *
   * [1] : chars is an array of characters you choose to randomly morph the text between start and end
   * [2] : duration is the duration of the global morph
   * [3] : frameRate is the speed of the morph for each letter
   */
  const chars     = ['a','b','c','d','e','f','g','0','1','2','3','4','5','6','7','8','9','%','$','?','!']; /*[1]*/
  const duration  = 0.5;  /*[2]*/
  const frameRate = 25; /*[3]*/

  /**
   * Write text variables
   */
  const string = start.split('');
  const result = end.split('');
  const slen   = string.length;
  const rlen   = result.length;
   
// Write time variables
  let present   = new Date();
  let past      = present.getTime();
  let count     = 0;
  let spentTime = 0;
  // SplitTime  = milliseconds / letters
  let splitTime = (duration * 1000) / Math.max(slen, rlen);
  const update = () => {
    // Update present date and spent time
    present    = new Date();
    spentTime += present.getTime() - past;
    // Random letters
    for (let i = count; i < Math.max(slen, rlen); i++) {
      const random = Math.floor(Math.random() * (chars.length - 1));
      // Change letter
      string[i] = chars[random];
    }
    // Morph letters from start to end
    if (spentTime >= splitTime) {
      // Update count of letters to morph
      count += Math.floor(spentTime / splitTime);
      // Morphing
      for (let j = 0; j < count; j++) {
        string[j] = result[j] || null;
      }
      // Reset spent time
      spentTime = 0;
    }
    // Update DOM
    element.textContent = string.join('');
    // Save present date
    past = present.getTime();
    // Loop
    if (count < Math.max(slen, rlen)) {
      // Only use a setTimeout if the frameRate is lower than 60FPS
      // Remove the setTimeout if the frameRate is equal to 60FPS
      setTimeout(() => {
        window.requestAnimationFrame(update);
      }, 500 / frameRate);
    }
  };

  // Start loop
  update();
}

function morphCardTitles(){
	var words = [];
	var content;
	if (currLink == 0) {
		content = stagContent;
	} else if (currLink == 1) {
		content = wolfContent;
	} else if (currLink == 2) {
		content = bullContent;
	} else if (currLink == 3) {
		content = boarContent;
	}
	//iterate through content and fill in words array for morph text 
	for(let [index, card] of Object.entries(content)){
		words[index.substr(index.length - 1)] = card.title; 
	}
	return words;
}

function updateMorphText(counter){
    const morph  = document.querySelector('.data-morph');
    const button = document.querySelector('.js-morph-trigger');
    var words = morphCardTitles();
    const start = morph.innerHTML;
    const end   = words[counter];
    morpher(morph, start, end);
}

//add listener to detect when our mouse moves below the bottom of our page select bar
//Note: we just grab the first choice pageSelect0C and use its bounding rect for the calc
//because its easiest
var rect = document.getElementById('pageSelect0C').getBoundingClientRect();
var body = document.getElementsByTagName('body');
body[0].onmousemove = function(e) {
	if(e.clientY > rect.bottom){
		changeState(-1);
	}
};

//This is Used just to make sure we have consistent stroke weight for our animations
setStrokeColor(redColor,0.4);

//used to set appropriate transition color during a state change
function colorRouter(specificChoice){
	if(specificChoice === undefined || specificChoice === null){
		if(currState == -1){
			return '#808080';
		}else if(currState == 0){
			return greenColor;	
		}else if(currState == 1){
			return blueColor;	
		}else if(currState == 2){
			return orangeColor;
		}else if(currState == 3){
			return purpleColor;
		}
	} else {
		if(specificChoice == -1){
			return '#808080';
		}else if(specificChoice == 0){
			return greenColor;	
		}else if(specificChoice == 1){
			return blueColor;	
		}else if(specificChoice == 2){
			return orangeColor;
		}else if(specificChoice == 3){
			return purpleColor;
		}
	}
}

function clearColors(current){
	for(var i =0; i < 4; i ++){
		document.getElementById('pageSelect' + i + 'C').style.color = '#808080';
		document.getElementById('pageSelect' + i).style.color = '#808080';
	}
}

// window.onload
window.onload = function(){
	imagePreloader();
	var body = document.getElementsByTagName('body')[0];
	var swipeState = -1;
	var hammer = new Hammer.Manager(body);
	var swipe = new Hammer.Swipe();
	hammer.add(swipe);

	hammer.on('swipeleft', function(ev) {
		if(isMobileDevice() && explode == false){
			swipeState = swipeState - 1;
			if(currState != -1){
				document.getElementById('pageSelect' + currState).style.color = '#808080';
				document.getElementById('pageSelect' + currState + 'C').style.color = '#808080';
			}
			changeState((mod(swipeState,5) - 1));
			if(currState != -1){
				document.getElementById('pageSelect' + currState).style.color = colorRouter();
				document.getElementById('pageSelect' + currState + 'C').style.color = colorRouter();
			}
		}
	});

	hammer.on('swiperight', function(ev) {
		if(isMobileDevice() && explode == false){
			swipeState = swipeState + 1;
			if(currState != -1){
				document.getElementById('pageSelect' + currState).style.color = '#808080';
			}
			changeState((mod(swipeState,5) - 1));
			if(currState != -1){
				document.getElementById('pageSelect' + currState).style.color = colorRouter();
			}
		}
	});

	//function to setup hover color change on homeicon
	hoverOnHomeIcon();

	//Lockdown the screen, important for mobile devices to be more airtight on stray scroll events
	const disableBodyScroll = bodyScrollLock.disableBodyScroll;
	disableBodyScroll(body);
	//remove our loading screen	
	body.classList.add('loaded');	
}
