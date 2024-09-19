const colorList = ["blue", "red", "white", "purple", "orange", "yellow"];
let xVel = 0;
let yVel = 0;

let forceMultiplier = 5;

document.addEventListener("DOMContentLoaded", () => {
    const logoSvg = document.getElementById("DvdLogo");
    const body = document.body;
    const path1 = document.getElementById("path1");
    const path2 = document.getElementById("path2");

    var cornerHitAmount = 0;
    var sideHitAmount = 0;

    var cornerHitText = document.getElementById("cornerHitText")
    var sideHitText = document.getElementById("sideHitText")
    
    var newColor = colorList[Math.floor(Math.random() * colorList.length)];
    path1.style.fill = newColor;
    path2.style.fill = newColor;

    while (xVel === 0) {
        xVel = Math.floor(Math.random() * 3) - 1;
    }
    while (yVel === 0) {
        yVel = Math.floor(Math.random() * 3) - 1;
    }

    setInterval(() => {
        // Ensure to use parseFloat to convert the style values to numbers
        var checkBottom = parseFloat(window.getComputedStyle(body).height) || 0;
        var checkRight = parseFloat(window.getComputedStyle(body).width) || 0;

        var logoHeight = parseFloat(window.getComputedStyle(logoSvg).height) || 0;
        var logoWidth = parseFloat(window.getComputedStyle(logoSvg).width) || 0;

        checkBottom -= logoHeight;
        checkRight -= logoWidth;

        const computedStyle = window.getComputedStyle(logoSvg);

        const curTop = parseFloat(computedStyle.top) || 0;
        const curLeft = parseFloat(computedStyle.left) || 0;

        while (newColor == String(path1.style.fill)) {
            newColor = colorList[Math.floor(Math.random() * colorList.length)];
        }

        var rand_times = [1.1, 0.9];
        var offset = rand_times[Math.floor(Math.random() * rand_times.length)];

        var flag1, flag2 = false;

        if (curLeft <= 0 || curLeft >= checkRight){
            xVel = -xVel * offset;
            path1.style.fill = newColor;
            path2.style.fill = newColor;
            flag1 = true;
            sideHitAmount += 1;
            sideHitText.innerHTML = `hits: ${sideHitAmount}`;
        }
        if (curTop <= 0 || curTop >= checkBottom){
            yVel = -yVel * offset;
            path1.style.fill = newColor;
            path2.style.fill = newColor;
            flag2 = true;
            sideHitAmount += 1;
            sideHitText.innerHTML = `hits: ${sideHitAmount}`;
        }

        if (flag1 & flag2) {
            cornerHitAmount += 1;
            sideHitAmount -= 1;
            cornerHitText.innerHTML = `corner hits: ${cornerHitAmount}`;
            sideHitText.innerHTML = `hits: ${sideHitAmount}`;
        }

        logoSvg.style.top = (curTop + (yVel * forceMultiplier)) + "px";
        logoSvg.style.left = (curLeft + (xVel * forceMultiplier)) + "px";
    }, 10);
});
