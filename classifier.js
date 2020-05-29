//Easing function https://medium.com/hackernoon/writing-an-easing-function-a-slightly-interesting-story-70ce667c212a

function ease({
startValue = 0,
endValue = 1,
durationMs = 700,
onStep,
onComplete = () => {},
}) {
const raf = window.requestAnimationFrame || (func => window.setTimeout(func, 16));

const stepCount = durationMs / 16;
const valueIncrement = (endValue - startValue) / stepCount;
const sinValueIncrement = Math.PI / stepCount;

let currentValue = startValue;
let currentSinValue = 0;

function step() {
    currentSinValue += sinValueIncrement;
    currentValue += valueIncrement * (Math.sin(currentSinValue) ** 2) * 2;
    
    if (currentSinValue < Math.PI) {
    onStep(currentValue);
    raf(step);
    } else {
    onStep(endValue);
    onComplete();
    }
}

raf(step);
}

const easeByID = (element) => {
    console.log(element);
    console.log(element.id);
    let top = document.getElementById(element.id).offsetTop;
    console.log(top);
    top ? top : 0;
    ease({
        startValue: window.scrollY,
        endValue: top - 50,
        onStep: value => window.scroll(0, value),
    });
}

window.onscroll = function(){setHighlight()};

function setHighlight() {
    let top = window.scrollY + 50;
    let categories = document.getElementById('categories-nav');
    let progress = document.getElementById('progress-nav');
    let pitch = document.getElementById('pitch-nav');
    let diagram = document.getElementById('diagram-nav');
    let work = document.getElementById('work-nav');
    
    let progressEl = document.getElementById('progress');
    let pitchEl = document.getElementById('pitch');
    let diagramEl = document.getElementById('diagram');
    let workEl = document.getElementById('work');

    if( top < 60) {
        console.log('1');
        //Make sure we aren't doubling
        categories.classList.remove('w3-blue');
        progress.classList.remove('w3-blue');
        pitch.classList.remove('w3-blue');
        diagram.classList.remove('w3-blue');
        work.classList.remove('w3-blue');
       
        //Add appropriate one
        categories.classList.add('w3-blue');

    } else if(top > progressEl.getBoundingClientRect().top && top < pitchEl.getBoundingClientRect().top){
        console.log('2');
        //Make sure we aren't doubling
        categories.classList.remove('w3-blue');
        progress.classList.remove('w3-blue');
        pitch.classList.remove('w3-blue');
        diagram.classList.remove('w3-blue');
        work.classList.remove('w3-blue');

        //Add appropriate one
        progress.classList.add('w3-blue');

    } else if(top > pitchEl.getBoundingClientRect().top && top < diagramEl.getBoundingClientRect().top){
        console.log('3');
        //Make sure we aren't doubling
        categories.classList.remove('w3-blue');
        progress.classList.remove('w3-blue');
        pitch.classList.remove('w3-blue');
        diagram.classList.remove('w3-blue');
        work.classList.remove('w3-blue');
        
        //Add appropriate one
        pitch.classList.add('w3-blue');
    } else if(top > diagramEl.getBoundingClientRect().top && top < workEl.getBoundingClientRect().top){
        console.log('4');
        //Make sure we aren't doubling
        categories.classList.remove('w3-blue');
        progress.classList.remove('w3-blue');
        pitch.classList.remove('w3-blue');
        diagram.classList.remove('w3-blue');
        work.classList.remove('w3-blue');
        
        //Add appropriate one
        diagram.classList.add('w3-blue');
    } else if(top > workEl.getBoundingClientRect().top ){
        console.log('5');
        //Make sure we aren't doubling
        categories.classList.remove('w3-blue');
        progress.classList.remove('w3-blue');
        pitch.classList.remove('w3-blue');
        diagram.classList.remove('w3-blue');
        work.classList.remove('w3-blue');
        
        //Add appropriate one
        work.classList.add('w3-blue');
    } 
}