'use strict';

const formForToDo = document.querySelector(".js-todoForm");
const inputForToDo = formForToDo.querySelector("input");
const ulForToDoList = document.querySelector(".js-todoList");

const TODOS_LS_NM = "todos";
let toDoListArr = [];



function saveToDoList(){
    localStorage.setItem(TODOS_LS_NM, JSON.stringify(toDoListArr));
}

function handlerDeleteToDoData(event){
    const clickedTarget = event.target;
    const liForRemove = clickedTarget.parentNode;
    ulForToDoList.removeChild(liForRemove);

    const cleanToDo = toDoListArr.filter((toDo) => {
        return toDo.id !== parseInt(liForRemove.id);
    });
    toDoListArr = cleanToDo;

    saveToDoList();
}

function addToDoListArr(text, id){
    const toDoObj = {
        id,
        text
    };

    toDoListArr.push(toDoObj);
}

function paintToDoList(toDoText){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const elemID = toDoListArr.length + 1;

    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", handlerDeleteToDoData);
    span.innerText = toDoText;

    li.id = elemID;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    ulForToDoList.appendChild(li);

    addToDoListArr(toDoText, elemID);
}

function loadToDo(){
    const toDoList = localStorage.getItem(TODOS_LS_NM);

    if(toDoList !== null){
        const toDoObj = JSON.parse(toDoList);

        toDoObj.forEach((toDo) => {
            paintToDoList(toDo.text);
            saveToDoList();
        });
    }
}

function handlerForToDoForm(event){
    event.preventDefault();

    const submitToDoText = inputForToDo.value;
    paintToDoList(submitToDoText);
    saveToDoList();
    inputForToDo.value = "";
}

function init(){
    loadToDo();
    formForToDo.addEventListener("submit", handlerForToDoForm);
}

init();