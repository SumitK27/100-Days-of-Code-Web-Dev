const imageElement = document.getElementById("main-image");
new simpleParallax(imageElement, {
    scale: 1.6,
    delay: 0.1,
});

const imageTwoElement = document.getElementById("image-two");
new simpleParallax(imageTwoElement, {
    orientation: "right",
    scale: 1.6,
    delay: 0.1,
});

const imageThreeElement = document.getElementById("image-three");
new simpleParallax(imageThreeElement, {
    orientation: "up left",
    scale: 1.6,
    delay: 0.1,
});

const imageFourElement = document.getElementById("image-four");
new simpleParallax(imageFourElement, {
    orientation: "down right",
    scale: 1.6,
    delay: 0.1,
});

const imageFiveElement = document.getElementById("image-five");
new simpleParallax(imageFiveElement, {
    orientation: "down right",
    overflow: true,
    delay: 0.1,
});
