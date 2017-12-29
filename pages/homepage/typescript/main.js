//Trevor Colby
//12.26.2017
//Main Typescript for homepage of dartmouth.life

var textBox = document.getElementById("textBox");
var displacement = textBox.offsetTop;

function scrollEffect(){

}

//control scroll animations
window.addEventListener('scroll',function(e){
	stickTextBox(displacement); //function to toggle sticky class on textBox/navbar
	transformText(); //funciton to control transformations on star wars text
});

//function that toggles stick class depending on scroll location
function stickTextBox(displacement){
		// console.log("Displacement: " + displacement);
		// console.log("Page Y Offset: " + window.pageYOffset);
		if(window.pageYOffset  >= displacement){
			textBox.classList.add("sticky");
			$('#myAccordion').collapse('hide');
			//in the future may way to add navbar transformation here which stretches textBox to 100$ width and removes text box leaving only navbar
			//just fade out opacity as percent width increases then remove elements after opacity disappears / considering switching with angular/bootsrap
			//to make it a drop down and simply activate accordion effect when sticky hits
		}
		else {
			textBox.classList.remove("sticky");
			$('#myAccordion').collapse('show');
		}
}

//func to control star wars animation of text
function transformText(){
	var allText = document.querySelectorAll(".starWarsBar p");
	var offset = window.pageYoffset;
}


function addNumberToPixel(pixNum,numberToAdd){
	numStr = str.slice(0, -2);
	numStr = parseInt(numStr);
	numStr += numberToAdd;
	numStr + "px";
	return numStr;
}
