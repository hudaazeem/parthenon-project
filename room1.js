const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
/*const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");*/
const btn = document.getElementById("startBtn");
let positions = {1: 100, 2:325, 3: 540};
let height = {1: -450, 2: -400, 3:-350, 4: -300, 5:-180, 6:-325};
let tiles = [tile1, tile2, tile3];
let tileInPlace = [false, false, false];
let time = Date.now();
const rounds = 10;

function randomizeTilePosition(tile){
    const index = Math.floor(Math.random() * 3) + 1; // 1..3
    tile.style.left = positions[index] + "px";
    const yIndex = Math.floor(Math.random() * 5) + 1; // 1..4
    tile.style.top = height[yIndex] + "px";
}

function restartAnimation(tile){
    tile.classList.remove("animate");
    void tile.offsetWidth;
    tile.classList.add("animate");
}

tiles.forEach(tile => {
    randomizeTilePosition(tile);
    tile.addEventListener("animationend", () => {
        randomizeTilePosition(tile);
        restartAnimation(tile);
    });
});

function startGame(){
    // add the class to start the animations
    tiles.forEach(tile => tile.classList.add("animate"));
    btn.innerHTML = "Running";
}
