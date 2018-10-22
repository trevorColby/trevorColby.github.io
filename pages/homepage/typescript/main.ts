//Trevor Colby
//12.26.2017
//Main Typescript for homepage of dartmouth.life
// import angular; //TODO: need to check if this is the correct import
var textBox = document.getElementById("textBox");
var prevPos = window.pageYOffset || document.documentElement.scrollTop;
var allText = <NodeListOf<HTMLElement>>document.querySelectorAll(".starWarsBar p");
var firstText = document.querySelector(".starWarsBar p");
var textBoxWrapper = document.getElementById("textBoxWrapper");
var textBoxElement = document.getElementById("textBox");
if (textBoxElement) {
	//set wrapper size/
	var textBoxRect = textBoxElement.getBoundingClientRect();
}
if (textBox && textBox.offsetTop) {
	var displacement = textBox.offsetTop;
}
if (firstText) {
	var firstTextRect = firstText.getBoundingClientRect();
	var firstTextPosition = firstTextRect.top;
}

//control scroll animations
window.addEventListener('scroll',function(e){
	stickTextBox(displacement); //function to toggle sticky class on textBox/navbar
	textAnimation(); //funciton to control transformations on star wars text
});

//function that toggles stick class depending on scroll location
function stickTextBox(displacement: number){
	var accordion = <HTMLElement>document.getElementById('#myAccordion');
	// console.log("Displacement: " + displacement);
	// console.log("Page Y Offset: " + window.pageYOffset);
	if(window.pageYOffset  >= displacement && textBox && accordion){
		textBox.classList.add("sticky");
		accordion.collapse('hide');
		if (textBoxWrapper) {	
			textBoxWrapper.style.height = textBoxRect.height.toString();
		}	
		// console.log('stuck');
		//in the future may way to add navbar transformation here which stretches textBox to 100$ width and removes text box leaving only navbar
		//just fade out opacity as percent width increases then remove elements after opacity disappears / considering switching with angular/bootsrap
		//to make it a drop down and simply activate accordion effect when sticky hits
	}
	else if(textBox){	
		textBox.classList.remove("sticky");
		// $('#myAccordion').collapse('show');
		accordion.collapse('show');
	}
}


//star wars text animation ******************************
window.onload = setupText;

//set initial state of star wars text
function setupText(){
	// var allText = document.querySelectorAll(".starWarsBar p");
	var opac = 1;
	var skew = 1;
	var translate = 0;
	for(var i=0; i<allText.length; i++){
		allText[i].style.opacity = opac.toString(); 
		allText[i].style.transform = "matrix("+skew+", 0, 0,"+ skew+", 0, 0)";
		skew -= .1;
		opac -= .25;
		translate += 100;
		// translate(0%, "+translate+"%) //place this in front of matrix if needed (think it simulates scrolling since their page never actually scrolls)
	}
}

//call apropriate function based on scroll direction
 function textAnimation(){
 	var curPos = window.pageYOffset || document.documentElement.scrollTop;
        	
 	if (prevPos > curPos){
 		scrollUp();
 	}
 	else {
 		scrollDown();
 	}
 	prevPos = curPos;
 }



function scrollUp(){   //simplify see text to self
	console.log('scroll Up');
	//for(var i=0; i<allText.length; i++){
	//	if(allText[i] && allText[i].style && allText[i].style.opacity){
	//		var curTextRect = allText[i].getBoundingClientRect();
	//		var curTextPos = curTextRect.top;
			
	//		//in desired range
	//		if(curTextPos-firstTextPosition < 50 && curTextPos - firstTextPosition > -50){
	//			allText[i].style.opacity = '1';
	//			// allText
	//			allText[i].style.transform = 'scale('+1/allText[i].scale+')';
	//		}
	//		//above acceptable range
	//		else if(curTextPos <= firstTextPosition-400){
	//			allText[i].style.opacity = '0';
	//			allText[i].style.transform = "scale(2)";			
	//		}

	//		//below acceptable range
	//		else if(curTextPos >= firstTextPosition+600){
	//			allText[i].style.opacity = '0';
	//			allText[i].style.transform = "scale(.2)";
	//		}

	//		//within target top
	//		else if(curTextPos >= firstTextPosition-50){
	//			allText[i].style.opacity += .1;
	//			TweenLite.to(allText[i],.05, {scale: "-=.03"});
	//		}

	//		//within target bottom
	//		// else if(curTextPos <= firstTextPosition+100){
	//		else {
	//			allText[i].style.opacity -= .1;
	//			TweenLite.to(allText[i],.05, {scale: "-=.03"});
	//		}
	//	}
	//}
}


function scrollDown() { //simplify see text to self
	console.log("scroll Down");
	//for(var i=0; i<allText.length; i++){
	//	var curTextRect = allText[i].getBoundingClientRect();
	//	var curTextPos = curTextRect.top;
		
	//	//in desired range
	//	if(curTextPos-firstTextPosition < 50 && curTextPos - firstTextPosition > -50){
	//		allText[i].style.opacity = '1';
	//		allText[i].style.transform = "scale("+1/allText[i].scale+")";
	//	}
	//	//above acceptable range
	//	else if(curTextPos <= firstTextPosition-400){
	//		allText[i].style.opacity = '0';
	//		allText[i].style.transform = "scale(2)";			
	//	}

	//	//below acceptable range
	//	else if(curTextPos >= firstTextPosition+600){
	//		allText[i].style.opacity = '0';
	//		allText[i].style.transform = "scale(.2)";
	//	}

	//	//within target top
	//	else if(curTextPos >= firstTextPosition-50){
	//		allText[i].style.opacity -= .1;
	//		TweenLite.to(allText[i],.05, {scale: "+=.03"});
	//	}

	//	//within target bottom
	//	// else if(curTextPos <= firstTextPosition+100){
	//	else if(allText[i] && allText[i].style && allText[i].style.opacity) {
	//		allText[i].style.opacity += .1;
	//		TweenLite.to(allText[i],.05, {scale: "+=.03"});
	//	}
	//}
}
//func to control star wars animation of text
function transformText(){
	var allText = document.querySelectorAll(".starWarsBar p");
	var offset = window.pageYOffset;
}


// function addNumberToPixel(pixNum,numberToAdd){
function addNumberToPixel(pixNum: string,numberToAdd: number){
	var numStr = pixNum.slice(0, -2); //remove px ending
	var num = parseInt(numStr); //convert string to int
	num += numberToAdd; //add our desired amount
	num + "px"; //convert back to string and add ending
	return num;
}

function paintBackground(){
	alert("Function Called");
	document.body.style.backgroundImage = 'trevorColby.github.io/media/homepage/pictures/HopPhoto.jpg'
	console.log("background loaded");
}
