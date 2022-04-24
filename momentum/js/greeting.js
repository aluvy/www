const formWrap = document.querySelector(".form-wrap");
const formWrapInput = formWrap.querySelector("input");
const formWrapButton = formWrap.querySelector("button");

const greeting = document.querySelector(".greeting");

const USERNAME = localStorage.getItem("username");


if(USERNAME == null){   // username이 비어있으면
    formWrap.classList.remove("hidden");
    formWrap.addEventListener("submit", HandlerFormSubmit);
    formWrapInput.value = "";
} else {    // username이 있으면
    PrintGreeting(USERNAME);
}



function HandlerFormSubmit(event){
    event.preventDefault();

    const username = formWrapInput.value;
    localStorage.setItem("username", username);
    formWrap.classList.add("hidden");

    PrintGreeting(username);
}

// <i class="fa-solid fa-face-smile"></i>

function PrintGreeting(username){
    greeting.classList.remove("hidden");
    greeting.innerHTML = `Hello <i class="fa-solid fa-face-smile"></i> ${username}!`;
}