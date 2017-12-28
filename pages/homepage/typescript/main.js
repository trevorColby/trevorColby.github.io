//Trevor Colby
//12.26.2017
//Main Typescript for homepage of dartmouth.life

function scrollEffect(){

}

// window.onload = scrollEffect();
window.addEventListener('scroll',function(e){
	stickTextBox();
	alert("Func Called");
});

function calcScrollFactor(){
	//var textOffset = window.offset.top(); alternet?
	var offset = window.pageYoffset;
}

function stickTextBox(){
	var textBox = document.getElementById("textBox");
	var displacement = textBox.offsetTop;
		if(window.pageYoffset >= displacement){
			textBox.classList.add("sticky");
		}
		else {
			textBox.classList.remove("sticky");
		}
}
