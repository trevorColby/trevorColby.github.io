//Trevor Colby
//12.26.2017
//Main Typescript for homepage of dartmouth.life

// load position so it knows when to turn sticky on/off
var textBox = document.getElementById("textBox");
var displacement = textBox.offsetTop;

// function scrollEffect(){

// }


// window.onload = scrollEffect();
window.addEventListener('scroll',function(e){
	stickTextBox(displacement);
});

// function transformText(){
// 	var allText = document.querySelectorAll(".starWarsBar p");
// 	var offset = window.pageYoffset;
// }

function stickTextBox(displacement){
		console.log("Displacement: " + displacement);
		console.log("Page Y Offset: " + window.pageYOffset);
		if(window.pageYOffset  >= displacement){
			textBox.classList.add("sticky");
		}
		else {
			textBox.classList.remove("sticky");
		}
}

function addNumberToPixel(pixNum,numberToAdd){
	numStr = str.slice(0, -2);
	numStr = parseInt(numStr);
	numStr += numberToAdd;
	numStr + "px";
	return numStr;
}
