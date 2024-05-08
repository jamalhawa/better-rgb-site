// RGB Colors

//element variables
var redInput = document.getElementById("redInput");
var greenInput = document.getElementById("greenInput");
var blueInput = document.getElementById("blueInput");

var widthInput = document.getElementById("widthInput");
var heightInput = document.getElementById("heightInput");

var display = document.getElementById("display");
var rgbText = document.getElementById("rgbText");

//event listeners
redInput.addEventListener("input", RGB);
greenInput.addEventListener("input", RGB);
blueInput.addEventListener("input", RGB);

widthInput.addEventListener("input", Size);
heightInput.addEventListener("input", Size);

//rbg function
function RGB() {
  var red = +redInput.value;
  var green = +greenInput.value;
  var blue = +blueInput.value;

  if (red > 255 || green > 255 || blue > 255) {
    if (red > 255) {
      redInput.value = 255;
      red = 255;
    } else if (green > 255) {
      greenInput.value = 255;
      green = 255;
    } else if (blue > 255) {
      blueInput.value = 255;
      blue = 255;
    }
  } else if (red < 0 || green < 0 || blue < 0)
    if (red < 0) {
      redInput.value = 0;
      red = 0;
    } else if (green < 0) {
      greenInput.value = 0;
      green = 0;
    } else if (blue < 0) {
      blueInput.value = 0;
      blue = 0;
    } else {
      alert("Error");
    }

  var rgb = `rgb(${red},${green},${blue})`;

  display.style.background = rgb;
  rgbText.innerHTML = rgb;
}

//size function
function Size() {
  var width = widthInput.value;
  var height = heightInput.value;

  if (width >= 500 || height >= 300) {
    if (width >= 500) {
      widthInput.value = 500;
      width = 500;
    } else if (height >= 300) {
      heightInput.value = 300;
      height = 300;
    }
  } else if (width <= 50 || height <= 25)
    if (width <= 50) {
      widthInput.value = 50;
      width = 50;
    } else if (height <= 25) {
      heightInput.value = 25;
      height = 25;
    } else {
      alert("Error");
    }
  var widthOutput = `${width}px`;
  var heightOutput = `${height}px`;

  display.style.width = widthOutput;
  display.style.height = heightOutput;
}
