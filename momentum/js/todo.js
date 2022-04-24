const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify()를 이용해 배열 문자 형태로 localStorage에 저장
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.type ="button";
    button.innerText = "❎";
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);

    toDoList.appendChild(li); 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    };

    console.log(toDos.length);
    if(toDos.length < 7){
        toDos.push(newTodoObj);    // toDos Array에 Push
        paintToDo(newTodoObj);
        saveToDos();
    } else {
        alert("You can only enter up to 7.");
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){ // savedToDos가 없으면 null이 반환된다.(false) 있으면 true
    const parsedToDos = JSON.parse(savedToDos); // 문자형태인 savedToDos를 array 형태로 반환
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
    // parsedToDos.forEach(paintTodo);
}