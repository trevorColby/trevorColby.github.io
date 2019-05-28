function toggleShow(i){
	return function(){
		console.log(i);
		var imgs = document.getElementsByClassName("carouselImg");
		if(imgs[i].classList.contains("showCap")){
			imgs[i].classList.remove("showCap");
			$("#carCap"+(i+1)).fadeOut();	
		}
		else{
			$("#carCap"+(i+1)).fadeOut();	
			imgs[i].classList.add("showCap");
			setTimeout(()=>{document.getElementById("carCap"+(i+1)).style.visibility = "visible"},600);
			$("#carCap"+(i+1)).fadeIn();	
		}
	}
}

window.onload = function(){
	var imgs = document.getElementsByClassName("carouselImg");
	for(var i =0; i< imgs.length; i++){
		if(imgs[i].classList.contains("showCap")){
			document.getElementById("carCap"+(i+1)).style.visibility = "hidden";	
			imgs[i].classList.remove("showCap");
		}
	}
};

var imgs = document.getElementsByClassName("carouselImg");

for(var i =0; i< imgs.length; i++){
	imgs[i].addEventListener('click',toggleShow(i));
}
		

// Modal Image Gallery
function launchCarouselModal() {
  var element = document.getElementsByClassName("active")[1].childNodes[1];
  console.log(element);
  document.getElementById("fullScreenImage").src = element.src;
  document.getElementById("modal01").style.display = "block";
  document.getElementById("modal01").style.zIndex = 20;
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
