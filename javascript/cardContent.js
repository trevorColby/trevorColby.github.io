//function collection to load images under stag/wolf/bull/boar links
var stagLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/biomed.jpg');
	addImage('fig','../../media/projects/Carousel/fpga.png');
	addImage('fig','../../media/projects/Carousel/vivado.jpg');
	addImage('fig','../../media/projects/Carousel/heartmonitor.jpg');
	addImage('fig','../../media/projects/Carousel/samara.PNG');
	addImage('fig','../../media/projects/Carousel/stirling.png');
	addImage('fig','../../media/projects/Carousel/numericalapprox.png');
}

var wolfLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/tibetScreenshot.png');
	addImage('fig','../../media/projects/Carousel/lightSphere.PNG');
	addImage('fig','../../media/projects/Carousel/leaflet.gif');
	addImage('fig','../../media/projects/Carousel/rayTrace.jpg');
	addImage('fig','../../media/projects/Carousel/recursiveRayTracing.png');
	addImage('fig','../../media/projects/Carousel/threejs.jpg');
	addImage('fig','../../media/projects/Carousel/sidewalk.jpg');
	addImage('fig','../../media/projects/Carousel/arm.png');
}

var bullLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/auroraSilhouette.jpg');
	addImage('fig','../../media/projects/Carousel/team.jpg');
	addImage('fig','../../media/projects/Carousel/rocks.jpg');
	addImage('fig','../../media/projects/Carousel/lookout.jpg');
	addImage('fig','../../media/projects/Carousel/bike.jpg');
	addImage('fig','../../media/projects/Carousel/pantherHunter.png');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/nordic.jpg');
}

var boarLinkImages = function(){
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/dartmouth.jpg');
	addImage('fig','../../media/projects/Carousel/');
	addImage('fig','../../media/projects/Carousel/opti.jpeg');
	addImage('fig','../../media/projects/Carousel/meredith.jpg');
	addImage('fig','../../media/projects/Carousel/');
}

//content of each carousel page
var stagContent = { 
	card0: {
		title: 'Biomedical Engineering',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
		video: 'https://www.youtube.com/embed/hT1-QEgtMWA&enablejsapi=1',
	}, 
	card1:{
		title:'Control Theory',
		subTitle: 'FPGA Programming',
		content: '',
		link: ' ',
		linkImg:' ',
	},
	card2:{
		title: 'VHDL',
		subTitle: ' ',
		content: ' ',
		link: ' ',
		linkImg:' ',
	}, 
	card3:{
		title: 'Hardware Design',
		subTitle:'Building a heart rate monitor',
		content: ' ',
		link: ' ',
		linkImg:' ',
	}, 
	card4:{
		title: 'Biophysics',
		subTitle: 'Leading Edge Vortex Analysis',
		content: 'Maple Samara',
		link: 'samara/samara.html',
		linkImg:'media/projects/Carousel/linkImages/mapleSamara.png',
	}, 
	card5:{
		title: 'Thermodynamics',
		subTitle: 'Built a Stirling Engine From Scratch',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card6:{
		title: 'Numerical Analysis',
		subTitle: 'Numerical Methods and Computation',
		content: 'Function approximation using various order methods. Newton\'s, Runge-Kutta, etc.',
		link: ' ',
		linkImg:' ',
	}, 
};

//content of each carousel page
var wolfContent = {
	card0: {
		title: 'Tibet',
		subTitle: "Visualizing a Tibetan Nomad's Artwork with ThreeJS",
		content: "For this project I partnered with Dartmouth's Anthropology department to create a 3D navigable rendition of the Qinghai Province in Tibet. In this 3D creation, users are able to freely navigate throughout the region and explore over 300 different toponyms ranging from regional religious sites to local settlments.<br><br>",
		link: 'tibet/language.html',
		linkImg:'media/projects/Carousel/linkImages/endlessKnot.png',
	}, 
	card1:{
		title:'Search Engine',
		subTitle: 'Cosc 50 Project',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card2:{
		title: 'Leaflet',
		subTitle: 'Filtering Algorithm Design',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card3:{
		title: 'Ray Tracing',
		subTitle:'Cosc 77',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card4:{
		title: 'Phong Shading',
		subTitle: 'Cosc 77',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card5:{
		title: 'ThreeJS',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card6:{
		title: 'Sidewalk Labs',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card7:{
		title: 'Skinning',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
};

var bullContent = {
	card0: {
		title: 'Hiking',
		subTitle: "The Great Outdoors",
		content: "",
		link: '',
		linkImg:'',
	}, 
	card1:{
		title:'Running',
		subTitle: 'Captain of Dartmouth Track and Field Team',
		content: 'High school record holder for 400m, 800m, 4x800m, and 4x400m events',
		link: '',
		linkImg:'',
	}, 
	card2:{
		title: 'Photography',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card3:{
		title: 'Rock Climbing',
		subTitle:'',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card4:{
		title: 'Mountain Biking',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card5:{
		title: 'Web Development',
		subTitle: 'Panther Hunter',
		content: 'A Three JS Style webpage exhibiting classical style art with HSL color shading parametrized to mouse position',
		link: 'pantherHunter/hunter.html',
		linkImg:'media/projects/Carousel/linkImages/pantherHunter.png',
	}, 
	card6:{
		title: 'Front End Design',
		subTitle: 'UI/UX Development',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card7:{
		title: 'Nordic Skiing',
		subTitle: '3x New Hampshire Division Champion',
		content: '',
		link: '',
		linkImg:'',
	}, 
};

//content of each carousel page
var boarContent = {
	card0: {
		title: 'Resumé',
		subTitle: 'Click to Download',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card1:{
		title: 'Dartmouth',
		subTitle: 'B.A in Engineering Sciences and a B.E in Computer Engineering',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card2:{
		title:'Track & Field',
		subTitle: 'Senior Captain',
		content: 'Middle distance runner specializing in the 800m. Ivy League Championship 3rd Place 4x800 relay. Margerie Chase Award Recipient.',
		link: '',
		linkImg:'',
	}, 
	card3:{
		title: 'Work Experience',
		subTitle:'',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card4:{
		title: 'Hometown',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
	card5:{
		title: 'Interests',
		subTitle: '',
		content: '',
		link: '',
		linkImg:'',
	}, 
};
