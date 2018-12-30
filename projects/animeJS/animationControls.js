//Everything to animate the "snake effect on the input form
const nameFocus = document.querySelector("#name");
const emailFocus = document.querySelector("#email");
const messageFocus = document.querySelector("#message");
const submitFocus = document.querySelector("#submit");

var currAnimation = null;
nameFocus.addEventListener('focus', (e) => {
	if(currAnimation) {
		currAnimation.pause()
	};
	currAnimation = anime({
	  targets: 'path',
	  strokeDashoffset: {
	    value: -10,
	    duration: 1000,
	    easing: 'easeOutQuart'
	  },
	  strokeDasharray: {
	    value: '145 1000',
	    duration: 1000,
	    easing: 'easeOutQuart'
	  }
	});	
});
emailFocus.addEventListener('focus', (e) => {
	if(currAnimation) {
		currAnimation.pause()
	};
	currAnimation = anime({
	  targets: 'path',
	  strokeDashoffset: {
	    value: -210,
	    duration: 1000,
	    easing: 'easeOutQuart'
	  },
	  strokeDasharray: {
	    value: '145 1000',
	    duration: 1000,
	    easing: 'easeOutQuart'
	  }
	});	
});

messageFocus.addEventListener('focus', (e) => {
	if(currAnimation) {
		currAnimation.pause()
	};
	currAnimation = anime({
	  targets: 'path',
	  strokeDashoffset: {
	    value: -420,
	    duration: 1000,
	    easing: 'easeOutQuart'
	  },
	  strokeDasharray: {
	    value: '145 1000',
	    duration: 1000,
	    easing: 'easeOutQuart'
	  }
	});	
});
submitFocus.addEventListener('focus', (e) => {
	if(currAnimation) {
		currAnimation.pause()
	};
	currAnimation = anime({
	  targets: 'path',
	  strokeDashoffset: {
	    value: -625,
	    duration: 1000,
	    easing: 'easeOutQuart'
	  },
	  strokeDasharray: {
	    value: '400 1000',
	    duration: 1000,
	    easing: 'easeOutQuart'
	  }
	});	
});
