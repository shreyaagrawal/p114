noseX_lip=0;
noseY_lip=0;
function preload() {
    lipstick_img=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function gotPoses(result) {
    if (result.length>0) {
        console.log(result);
        noseX_lip=result[0].pose.nose.x-5;
        noseY_lip=result[0].pose.nose.y-5;
        console.log("nose x="+result[0].pose.nose.x);
        console.log("nose y="+result[0].pose.nose.y);
    }
}
function modelLoaded() {
    console.log("PoseNet has Started ");
}
function draw() {
    image(video,0,0,300,300);
    image(lipstick_img,noseX_lip,noseY_lip,30,30);
}
function take_snapshot() {
    save('lipstick.png');
}
function home() {
    window.location='index.html';
}