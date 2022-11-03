var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);




function drawPattern() {
    var canvas = document.getElementById("potaka");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "images/bikes.png";
    img.onload = function () {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}
drawPattern();

function drawGradient() {
    var canvas = document.getElementById('canvas3');
    var context = canvas.getContext('2d');
    context.strokeStyle = 'red';
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

drawGradient();

function drawCircle(canvas) {

    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}
var canvas4 = document.getElementById('canvas4');
var makeCircle = drawCircle(canvas4);

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));

}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68);
    //getImageData will return imageData which contains width, height, and data
    //data has info about pixels, pixels will have 4 values, rgb and a, a for alpha
    
    //change the color of image to greyscale
    var imageData = context.getImageData(0, 0, 200, 200);
    var red, blue, green, greyscale;
    
    for (var i = 0; i < imageData.data.length; i += 4) {
        var red = imageData.data[i];
        var green = imageData.data[i + 1];
        var blue = imageData.data[i + 2];
            
        var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
            
        imageData.data[i] = grayscale;
        imageData.data[i + 1] = grayscale;
        imageData.data[i + 2] = grayscale;
        } 
        context.putImageData(imageData, 0, 0);

}
drawImageToCanvas();