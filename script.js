var room2Scene1=document.getElementById("room2-scene1");
var room2Scene2=document.getElementById("room2-scene2");
var room2Scene3=document.getElementById("room2-scene3");

var createDrawing = document.getElementById("create-drawing");

if(startButton){
    startButton.addEventListener('click', function(){
        window.location.href = "intro.html";
    })
}
    

// tileMovement(){
//     List<String>
// }

if(createDrawing&&room2Scene1&&room2Scene2){
    createDrawing.addEventListener('click', function(){
    room2Scene1.classList.add("hidden");
    room2Scene2.classList.remove("hidden");
    })
}
    



var canvas = document.getElementById("drawingCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle="black";
