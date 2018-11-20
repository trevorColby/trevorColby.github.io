// Change style of navbar on scroll
window.addEventListener( 'scroll', onWindowScroll, false );

var transitionPoint = 10;
// Modify navbar format for all pages
function onWindowScroll(){
    var navbar = document.getElementById("myNavbar");
    var mobileDropDown = document.getElementById("navDemo");
    // if(!document.getElementById("placeHolder")){
		// var placeHolder = document.createElement("a");
		// placeHolder.setAttribute("class","w3-bar-item w3-button");
		// placeHolder.setAttribute("id","placeHolder");
		// placeHolder.innerHTML = " . ";
		// mobileDropDown.insertBefore(placeHolder,mobileDropDown.firstChild);	
	// }
    if (document.body.scrollTop > transitionPoint || document.documentElement.scrollTop > transitionPoint) {
    	if (mobileDropDown.className.indexOf("w3-show") == -1) {
        	navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
	} else {
        	navbar.className = "w3-bar" + " w3-white";
	}
    } else {
    	if (mobileDropDown.className.indexOf("w3-show") == -1) {
        	navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
	}else{
        	navbar.className = "w3-bar" + " w3-white";
	}
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    //this one is the mobile dropdown
    var x = document.getElementById("navDemo");
    //this is the regular dropdown
    var navbar = document.getElementById("myNavbar");
    if (x.className.indexOf("w3-show") == -1) {
	//If dropdown isn't showing
	// - make dropdown show, give it shadow
	// - give navbar color 
    	x.className += " w3-card";
	x.className += " w3-show";
	navbar.className = " w3-bar" +  " w3-white";
    } else {
	//if dropdown needs to be minimized
	    // - make invisible
	    // - remove shadow
	x.className = x.className.replace(" w3-card", "");
	x.className = x.className.replace(" w3-show", "");
	//depending on page locaiton, modify uppermost navbar	
	if (document.body.scrollTop > transitionPoint || document.documentElement.scrollTop > transitionPoint) {
        	navbar.className = "w3-bar" + " w3-card" + " w3-white";
	} else {
        	navbar.className = " w3-bar";
	}
    }
}



// Used to toggle the menu on small screens when clicking on the menu button
function homeToggleFunction() {
    //this one is the mobile dropdown
    var x = document.getElementById("navDemo");
    //this is the regular dropdown
    var navbar = document.getElementById("myNavbar");
    if (x.className.indexOf("w3-show") != -1) {
	//if dropdown needs to be minimized
	    // - make invisible
	    // - remove shadow
	x.className = x.className.replace(" w3-card", "");
	x.className = x.className.replace(" w3-show", "");
	//depending on page locaiton, modify uppermost navbar	
	if (document.body.scrollTop > transitionPoint || document.documentElement.scrollTop > transitionPoint) {
        	navbar.className = "w3-bar" + " w3-card" + " w3-white";
	} else {
        	navbar.className = " w3-bar";
	}
    }
}
