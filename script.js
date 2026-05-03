const images = [
    "images/Dental_chair_1.png",
    // "images/Dental_chair_2.png"
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



const slider = document.getElementById("slider");
const before = document.getElementById("before");
const after = document.getElementById("after")
const container = document.getElementById("compare");

let isDragging = false;

slider.addEventListener("mousedown", () => {
    isDragging = true;
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;

    // limit inside container
    x = Math.max(0, Math.min(x, rect.width));

    // move slider
    slider.style.left = x + "px";

    // reveal after image
    before.style.width = x + "px";
    after.style.width = (rect.width - x) + "px";
});


