'use strict';

const nameForm = document.querySelector(".js-nameForm");
const input = nameForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_NAME_LS = "userName";
const SHOW_DISPLAY_CLS_NM = "showDisplay";


function saveNameLocalStorage(name){
    localStorage.setItem(USER_NAME_LS, name);
}

function handlerFormSubmit(event){
    event.preventDefault();

    const submitUserName = input.value;
    paintGreeting(submitUserName);

    saveNameLocalStorage(submitUserName);
}


function askUserName(){
    nameForm.classList.add(SHOW_DISPLAY_CLS_NM);
    nameForm.addEventListener("submit", handlerFormSubmit);
}

function paintGreeting(name){
    nameForm.classList.remove(SHOW_DISPLAY_CLS_NM);
    greeting.classList.add(SHOW_DISPLAY_CLS_NM);
    greeting.innerHTML = `Hello ${name}! <br>Welcome to This Page!`;
}

function loadName(){
    const currentName = localStorage.getItem(USER_NAME_LS);

    if(currentName === null){
        askUserName();
    } else {
        paintGreeting(currentName);
    }
}

function init(){
    loadName();
}
init();