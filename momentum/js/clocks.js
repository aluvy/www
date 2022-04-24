const clock = document.querySelector(".clock");

function setClock(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, "0");
    const Menutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML=`${Hours}:${Menutes}:${seconds}`;
}

setClock();
setInterval(setClock, 1000);