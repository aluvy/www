const BackgroundImages = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
];

const wrap = document.querySelector(".wrap");

const SelectImage = BackgroundImages[Math.floor(Math.random()*BackgroundImages.length)];
wrap.style.backgroundImage = `url(./img/${SelectImage})`;