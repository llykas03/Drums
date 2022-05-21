window.addEventListener("keydown", (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);
    if (!keyElement) return;
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch (code) {
        case 73:
        case 75:
            animateHiHatCloset();
            break;
        case 69:
        case 82:
            animateCrashOrRide();
            break;

    }
    keyElement.classList.add('playing');
    keyElement.addEventListener("transitionend", () => {
        keyElement.classList.remove('playing');
    });
});

let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}
const animateHiHatCloset = () => {
    hiHatTop.style.top = '171px';
}

// const removeKeyTransition = e => {
//     if (e.prpertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }

// let drumKeys = document.querySelectorAll('.key');
// drumKeys.forEach(key => {
//     key.addEventListener("transitioned", removeKeyTransition);
// })

crashRide.addEventListener("transitionend", () => {
    crashRide.style.transform = 'rotate(-7.2deg) scale(1.5)';
});
hiHatTop.addEventListener("transitionend", () => {
    hiHatTop.style.top = '166px';
});

