function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    background('white');
}
function clearCanvas(){
    background('white');
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}