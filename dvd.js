const colorList = ["blue", "red", "white", "purple", "orange", "yellow"];
let xVel = 0;
let yVel = 0;

let forceMultiplier = 5;

document.addEventListener("DOMContentLoaded", () => {
    const logoSvg = document.getElementById("DvdLogo");

    while (xVel === 0) {
        xVel = (Math.random() * 2) - 1;
    }
    while (yVel === 0) {
        yVel = (Math.random() * 2) - 1;
    }

    setInterval(() => {
        // Ensure to use parseFloat to convert the style values to numbers
        const curTop = parseFloat(logoSvg.style.top) || 0;
        const curLeft = parseFloat(logoSvg.style.left) || 0;

        logoSvg.style.top = (curTop + (yVel * forceMultiplier)) + "px";
        logoSvg.style.left = (curLeft + (xVel * forceMultiplier)) + "px"; 
    }, 10);
});
