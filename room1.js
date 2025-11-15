const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const btn = document.getElementById("startBtn");
let positions = {1: 50, 2:275, 3: 490};
let tiles = [tile1, tile2, tile3, tile4, tile5];
let tileInPlace = [false, false, false];

function tileMovement(){
    for (let i = 0; i < tiles.length; i++){
        let currentTile = tiles[i];
        const index = Math.floor(Math.random() * 3) + 1;
        currentTile.style.left = positions[index] + "px";
    }
    btn.innerHTML = "debug";
}