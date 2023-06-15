function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background("rgb(137, 231, 176)");
}

function modelLoaded() {
    console.log('Pose net se inicio');
}

function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);
    }
}