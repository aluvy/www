const weatherIcon = {
    "01": "fa-sun",    // clear sky
    "02": "fa-cloud-sun",  // few clouds
    "03": "fa-cloud",  // scattered clouds
    "04": "fa-cloud-meatball", // broken clouds
    "09": "fa-cloud-rain", // shower rain
    "10": "fa-cloud-showers-heavy", // rain
    "11": "fa-cloud-bolt", // thunderstorm
    "13": "fa-snowflake", // snow
    "50": "fa-water", // mist
};

const API_KEY = "ab25b9205ac4992cdb13d1409a98f3d6";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then(response => response.json()).then(data =>{
        // const weatherWrap = document.querySelector(".weather");
        const icon = document.querySelector(".weather i");
        const temp = document.querySelector(".weather span:nth-of-type(1)");
        const weather = document.querySelector(".weather span:nth-of-type(2)");
        const city = document.querySelector(".weather p");

        const iconNum = (data.weather[0].icon).substr(0,2); // icon번호
        const iconEmoji = weatherIcon[iconNum]; // 배열에서 fontawsome class 받아오기
        icon.classList.add(iconEmoji)   // 해당 클래스 +

        temp.innerText = `${Math.floor(data.main.temp)}℃`;
        weather.innerText = `${data.weather[0].main}`;
        city.innerText = data.name;
    });

    // http://openweathermap.org/img/w/10d.png
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);