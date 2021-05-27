noseX=0;
noseY=0;

function preload() {
    mustache_img=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas =createCanvas(400,400);
    canvas.center();

    video= createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet(video, modelIsLoaded);
    poseNet.on('pose',isGotPoses);
}
function isGotPoses(results) {
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-5;
        noseY=results[0].pose.nose.y-5;
        console.length("nose x= "+results[0].pose.nose.x);
        console.length("nose y= "+results[0].pose.nose.y);
    }
}
function modelIsLoaded() {
    console.log("PoseNet has Started ");
}
function draw() {
    image(video,0,0,400,400);
    image(mustache_img,noseX,noseY,30,30);

}
function take_snapshot() {
    save('mustache.png');
}
function home() {
    window.location='index.html';
}