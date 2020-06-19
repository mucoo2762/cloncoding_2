'use strict';

const body = document.querySelector("body");
const IMG_NUM = 6;

function generateRandomNum(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number + 1;
}

function paintImage(imageNum){
    const image = new Image();
    image.src = `images/background_${imageNum}.jpg`;
    image.classList.add("bgImg");
    body.appendChild(image);
}

function init(){
    const randomNum = generateRandomNum();
    paintImage(randomNum);
}
init();