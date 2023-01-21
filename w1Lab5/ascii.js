window.onload = loadPageEvents;

function loadPageEvents(e) {
    console.log("page is fully loaded");
    //alert("loaded");
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("animation").onchange = changeAnimationOption;
    document.getElementById("fontsize").onchange = changeFontSizeOptions;
    document.getElementById("turbo").onchange = changeTurboDelay;
}

const animationNames = ["blank","custom","exercise","juggler","bike","dive"];
let runningIntervalId;
let currentAnimation = 0;

function startAnimation() {
    //alert("start animation");
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    const turbo = document.getElementById("turbo").checked;
    console.log("turbo : " + turbo)
    //document.getElementById("text-area").value = animationNames[currentAnimation]; //ANIMATIONS[2]; //ANIMATIONS["exercise"];
    const animArea =  document.getElementById("text-area");
    if(turbo) {
        runAnimationInterval(animArea, 50);
     } else  {
        runAnimationInterval(animArea, 250);
     }
    
}

function runAnimationInterval(animArea, interval) {
    runningIntervalId =  setInterval(function(){
            animArea.value = ANIMATIONS[animationNames[currentAnimation]];
            currentAnimation++;
            currentAnimation = currentAnimation % 6;
        }, interval);
}

function stopAnimation() {
    clearInterval(runningIntervalId);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    const animation = document.getElementById("animation").value;
    currentAnimation = animationNames.indexOf(animation.toLowerCase());
    console.log("current ani: " + currentAnimation);
    document.getElementById("text-area").value = ANIMATIONS[animationNames[currentAnimation]];
}

function changeAnimationOption() {
    stopAnimation();
    const animation = document.getElementById("animation").value;
    currentAnimation = animationNames.indexOf(animation.toLowerCase());
    //alert(currentAnimation)
    console.log("selected animation option: " + animation);
    startAnimation();
}

function changeFontSizeOptions() {
    stopAnimation();
    const fontSizeOption = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fontSizeOption;
    console.log("selected font-size: " + fontSizeOption);
    startAnimation();
}

function changeTurboDelay() {
    stopAnimation();
    startAnimation();
}
