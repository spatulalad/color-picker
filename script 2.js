window.onload = function () {
    initColorPicker();
};

function initColorPicker () {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    setColorPickereventListeners(colorBox, rgb);
}

function setColorPickereventListeners(colorBox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("Red value: ", rgb.red.value);
    })
    rgb.green.addEventListener('change', () => {
        console.log("Red value: ", rgb.green.value);
    })
    rgb.blue.addEventListener('change', () => {
        console.log("Red value: ", rgb.blue.value);
    });
}