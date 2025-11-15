<<<<<<< HEAD

var startButton = document.getElementById("start-button");
var room3 = document.getElementById("room-3");
// var tile1 = document.getElementById("tile1");
// var tile2 = document.getElementById("tile2");
// var tile3 = document.getElementById("tile3");

=======
>>>>>>> b8e353edec3c0413a29d907df84dfc2e8a6bfa78
var room2Scene1=document.getElementById("room2-scene1");
var room2Scene2=document.getElementById("room2-scene2");
var room2Scene3=document.getElementById("room2-scene3");

var createDrawing = document.getElementById("create-drawing");
var finishDrawing = document.getElementById("finish-drawing");
var canvas = document.getElementById("drawingCanvas");
var ctx = canvas.getContext("2d");
var finishDrawing = document.getElementById("finish-drawing");
if (startButton){
    startButton.addEventListener('click', function(){
        window.location.href = "intro.html";
    })
}

if (room3) {
    room3.addEventListener('click', function() {
        window.location.href = "room3.html";
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
    
if(finishDrawing&&canvas&&ctx){
    let isDrawing = false;
    let lastX=0;
    let lastY=0;

    canvas.addEventListener('mousedown', (e)=>{
        isDrawing=true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', (e)=>{
        if(!isDrawing) return;
        ctx.beginPath();
        ctx.lineCap="round";
        ctx.lineJoin="round";
        ctx.lineWidth=11;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mouseup', ()=> isDrawing=false);
    canvas.addEventListener('mouseout', () => isDrawing=false);

    finishDrawing.addEventListener('click', function(){
        room2Scene2.classList.add("hidden");
        room2Scene3.classList.remove("hidden");
    });
}




<<<<<<< HEAD



// const tile1 = document.getElementById("tile1");
// const tile2 = document.getElementById("tile2");
// const tile3 = document.getElementById("tile3");
// const tile4 = document.getElementById("tile4");
// const tile5 = document.getElementById("tile5");
// const btn = document.getElementById("startButton");
// let positions = {1: 50, 2:275, 3: 490};
// let tiles = [tile1, tile2, tile3, tile4, tile5];
// let tileInPlace = [false, false, false];
// function tileMovement(){
//     for (let i = 0; i < tiles.length; i++){
//         let currentTile = tiles[i];
//         const index = Math.floor(Math.random() * 3) + 1;
//         currentTile.style.left = positions[index] + "px";
//     }

// }
=======
ctx.fillStyle="black";
>>>>>>> b8e353edec3c0413a29d907df84dfc2e8a6bfa78
