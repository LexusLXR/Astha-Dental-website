const images = [
    "images/Dental_chair_1.png",
    "images/Dental_chair_2.png"
];

let index = 0;
const hero = document.getElementById("hero");

function changeBackground() {
    hero.style.setProperty(
        "--bg-image",
        `url(${images[index]})`
    );

    hero.style.backgroundImage = `url(${images[index]})`;

    index = (index + 1) % images.length;
}

// initial load
changeBackground();

// change every 4 seconds
setInterval(changeBackground, 4000);