var sBrowser, sUsrAg = navigator.userAgent;

// The order matters here, and this may report false positives for unlisted browsers.

if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
  sBrowser = "Opera";
  //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
  sBrowser = "unknown";
}
if(sBrowser != "Google Chrome or Chromium" || sBrowser != "Opera"){
	alert("You are using: " + sBrowser + "\nThis website offers the best experience in Google Chrome.\nSome images may not load correctly.\n");
}

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
