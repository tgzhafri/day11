var key = document.querySelectorAll(".key");
var keyList = [];

var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("sound2");
var sound3 = document.getElementById("sound3");
var sound4 = document.getElementById("sound4");
var sound5 = document.getElementById("sound5");
var sound6 = document.getElementById("sound6");
var sound7 = document.getElementById("sound7");
var sound8 = document.getElementById("sound8");
var sound9 = document.getElementById("sound9");

var key1 = document.getElementById("key1");
var key2 = document.getElementById("key2");
var key3 = document.getElementById("key3");
var key4 = document.getElementById("key4");
var key5 = document.getElementById("key5");
var key6 = document.getElementById("key6");
var key7 = document.getElementById("key7");
var key8 = document.getElementById("key8");
var key9 = document.getElementById("key9");

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);

function keyPressed (evt) {
    keyList[evt.keyCode] = true;

    if(keyList[49]) {
        console.log("key 1 pressed");
        sound1.play();
        key1.classList.add("pressed");
  
    }
    if(keyList[50]) {
        console.log("key 2 pressed");
        sound2.play();
        key2.classList.add("pressed");
    }
    if(keyList[51]) {
        console.log("key 3 pressed");
        sound3.play();
        key3.classList.add("pressed");
    }
    if(keyList[52]) {
        console.log("key 4 pressed");
        sound4.play();
        key4.classList.add("pressed");
    }
    if(keyList[53]) {
        console.log("key 5 pressed");
        sound5.play();
        key5.classList.add("pressed");
    }
    if(keyList[54]) {
        console.log("key 6 pressed");
        sound6.play();
        key6.classList.add("pressed");
    }
    if(keyList[55]) {
        console.log("key 7 pressed");
        sound7.play();
        key7.classList.add("pressed");
    }
    if(keyList[56]) {
        console.log("key 8 pressed");
        sound8.play();
        key8.classList.add("pressed");
    }
    if(keyList[57]) {
        console.log("key 9 pressed");
        sound9.play();
        key9.classList.add("pressed");
    }
}
function keyReleased (evt) {
    delete keyList[evt.keyCode];
    key1.classList.remove("pressed");
    key2.classList.remove("pressed");
    key3.classList.remove("pressed");
    key4.classList.remove("pressed");
    key5.classList.remove("pressed");
    key6.classList.remove("pressed");
    key7.classList.remove("pressed");
    key8.classList.remove("pressed");
    key9.classList.remove("pressed");
}


// slider function

var sliderHolder = document.getElementById('slider-holder');

var sliderItem = [
    {
        bgImg: "url(images/img-1.jpg)",
        // title: "Let's go on Vacation!",
    },
    {
        bgImg: "url(images/img-2.jpg)",
        // title: "Let's go on Vacation!",
    },
    {
        bgImg: "url(images/img-3.jpg)",
        // title: "Let's go on Vacation!",
    },
    {
        bgImg: "url(images/img-4.jpg)",
        // title: "Let's go on Vacation!",
    },
    {
        bgImg: "url(images/img-5.jpg)",
        // title: "Let's go on Vacation!",
    },
]

sliderHolder.style.width = sliderItem.length * 100 + "vw";

for(var i = 0; i < sliderItem.length; i++) {
    var sliderEle = document.createElement('div');
    // var sliderTitle = document.createElement('h1');
    // sliderTitle.innerHTML = sliderItem[i].title;

    sliderEle.classList.add('slider');
    // sliderEle.appendChild(sliderTitle);

    sliderEle.style.backgroundImage = sliderItem[i].bgImg;
    sliderHolder.appendChild(sliderEle);
}

var pos = 0;
var sliderTimerID = null;
sliderTimerID = setInterval(sliderTimer, 3000);

function sliderTimer() {
    pos-= 100;
    if(pos < -((sliderItem.length-1)* 100)) {
        pos = 0;
    }
    sliderHolder.style.transform = `translate(${pos}vw)`;
}

function stopTimer() {
    clearInterval(sliderTimerID);
}

function resumeTimer() {
    console.log("mouse out")
    sliderTimerID = setInterval(sliderTimer, 2000);
}

