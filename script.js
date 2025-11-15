
var startButton = document.getElementById("start-button");
var tile1 = document.getElementById("tile1");
var tile2 = document.getElementById("tile2");
var tile3 = document.getElementById("tile3");

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

const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const btn = document.getElementById("startButton");
let positions = {1: 50, 2:275, 3: 490};
let tiles = [tile1, tile2, tile3, tile4, tile5];
let tileInPlace = [false, false, false];
function tileMovement(){
    for (let i = 0; i < tiles.length; i++){
        let currentTile = tiles[i];
        const index = Math.floor(Math.random() * 3) + 1;
        currentTile.style.left = positions[index] + "px";
    }

}