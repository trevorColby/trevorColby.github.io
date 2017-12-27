//Trevor Colby
//12.26.2017
//Main Typescript for homepage of dartmouth.life

function paintBackground(){
	document.body.style.backgroundImage = "url('https://trevorColby.github.io/media/homepage/pictures/HopPhoto.jpg')";
	alert("Function Called");
	console.log("background loaded");
}

window.onload = paintBackground();
