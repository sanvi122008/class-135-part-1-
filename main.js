function setup()
{
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";
}   