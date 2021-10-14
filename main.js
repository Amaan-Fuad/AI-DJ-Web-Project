song="";
lwx=0;
lwy=0;
rwx=0;
rwy=0;
scorelw=0;
scorerw=0;
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}
function preload(){

}
function draw(){
    
}