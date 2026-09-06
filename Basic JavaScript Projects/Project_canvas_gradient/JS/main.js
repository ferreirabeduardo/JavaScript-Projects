var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);

var gradientCanvas = document.getElementById("gradientCanvas");
var gtx = gradientCanvas.getContext("2d");
var grad = gtx.createLinearGradient(0, 0, 300, 0);
grad.addColorStop(0, "red");
grad.addColorStop(0.5, "yellow");
grad.addColorStop(1, "green");
gtx.fillStyle = grad;
gtx.fillRect(0, 0, 300, 150);
