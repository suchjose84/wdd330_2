function makeVideoOldTimey() {
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvasOverlay");
    var context = canvas.getContext("2d");

    video.addEventListener("play", function() { 
    draw(video,context,canvas);               
    }, false);  

}