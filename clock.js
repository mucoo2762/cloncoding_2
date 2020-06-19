'use strict';

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("span");

function getTimeForClockTitle(){
    const date = new Date();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    
    clockTitle.innerText = `${hour}:${minute}:${second}`;
}


function init(){
    setInterval(getTimeForClockTitle, 1000);
}
init();