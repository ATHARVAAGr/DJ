scoreLW=0; 

song="";

leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,250);

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FFFF00");
    stroke("FF0000");
    circle(rightWristX, rightWristY, 20);

    if(rightWristY>0 && rightWristY<=100){
       document.getElementById("Speed1").innerHTML="Speed= 0.5x";
       song.rate(0.5);
    }
    else if(rightWristY>100 && rightWristY<=200){
        document.getElementById("Speed1").innerHTML="Speed= 1x";
        song.rate(1);
     }
     else if(rightWristY>200 && rightWristY<=300){
        document.getElementById("Speed1").innerHTML="Speed= 1.5x";
        song.rate(1.5);
     }
     else if(rightWristY>300 && rightWristY<=400){
        document.getElementById("Speed1").innerHTML="Speed= 2x";
        song.rate(2);
     }
     else if(rightWristY>400 && rightWristY<=500){
        document.getElementById("Speed1").innerHTML="Speed= 2.5x";
        song.rate(2.5);
     }

    circle(leftWristX, leftWristY, 20);

    NumberleftY=Number(leftWristY);
    removedecimbals=floor(NumberleftY);
    volume=removedecimbals/500;
    document.getElementById("Volume1").innerHTML="volume=" + volume;
    song.setVolume(volume);
}


function preload(){
    song=loadSound("music.mp3");
}

function Play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX="+ leftWristX + "leftWristY=" + leftWristY);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+ rightWristX + "rightWristY=" + rightWristY);
    scoreLW=results[0].pose.keypoints[9].score;
    console.log("scoreleftWrist=" + scoreLW);
}
}