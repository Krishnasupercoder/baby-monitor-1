var video;
var canvas;
var storemodel;
var storestatus = "";
function preload(){
    video = createVideo("video.mp4");
    video.hide(); 
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    
}

 function draw(){
    image(video,0,0,480,380);
    
 }

 function load(){
  storemodel = ml5.objectDetector("cocossd",alerter);
  document.getElementById("status").innerHTML ="Status : Detecting Objects"
 }

 function alerter(){
   console.log("Model had been loaded");
   storestatus = true;
   video.loop();
   video.speed(1);
   video.volume(0);
 }