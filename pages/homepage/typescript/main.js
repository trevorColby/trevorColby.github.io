//Trevor Colby
//12.26.2017
//Main Typescript for homepage of dartmouth.life

function scrollEffect(){

}

// window.onload = scrollEffect();
window.addEventListener('scroll',function(e){
	var textBox = document.getElementById("textBox");
	var displacement = textBox.offsetTop;
	stickTextBox(displacement);
});

function calcScrollFactor(){
	//var textOffset = window.offset.top(); alternet?
	var offset = window.pageYoffset;
}

function stickTextBox(displacement){
		console.log("Displacement: " + displacement);
		console.log("Page Y Offset: " + window.pageYoffset);
		if(window.pageYoffset >= displacement){
			alert("condition met");
			textBox.classList.add("sticky");
		}
		else {
			textBox.classList.remove("sticky");
		}
}
