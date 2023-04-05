difference  =0;
rightWristX =0;
leftWristX =0;



function setup(){
    video = createCapture(VIDEO);
    video.size(700,700);

    canvas=createCanvas(850,850);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#D3D3D3');
    text("Mason Z.", 50,400);
    textSize(difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ difference+ " difference = ");
    }
}