status1 = "";


function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(300, 300);
}

function preload(){

}

function draw(){
image(video, 0, 0, 300, 300);
}

function start(){
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
object = document.getElementById("text_input").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
}