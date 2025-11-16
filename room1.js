const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const btn = document.getElementById("startBtn");
let xPos = {1: 100, 2: 325, 3: 545};
let yPos = {1: -210, 2: -260, 3: -240, 4: -185, 5: -175, 6: -225};
let heightTaken = [false, false, false, false, false, false];
let tiles = [tile1, tile2, tile3, tile4, tile5];
let tileInPlace = [false, false, false, false, false];
let time = Date.now();
const rounds = 10;
let coords = [];

function randomizeTilePosition(tile){
    const maxAttempts = 50;
    let attempts = 0;
    let coordStr;
    let xIndex, yIndex;

    do {
        xIndex = Math.floor(Math.random() * 3) + 1;    
        yIndex = Math.floor(Math.random() * 6) + 1;    
        coordStr = `${xPos[xIndex]},${yPos[yIndex]}`;
        attempts++;
        if (attempts >= maxAttempts) {
            break;
        }
    } while (coords.includes(coordStr));

    tile.style.left = xPos[xIndex] + "px";
    tile.style.top = yPos[yIndex] + "px";

    if (!coords.includes(coordStr)) {
        coords.push(coordStr);
    }
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
    tiles.forEach(tile => tile.classList.add("animate"));
    if (btn) btn.innerHTML = "Running";
}