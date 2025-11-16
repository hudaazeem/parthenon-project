const tile1 = document.getElementById("tile1");
const tile2 = document.getElementById("tile2");
const tile3 = document.getElementById("tile3");
const tile4 = document.getElementById("tile4");
const tile5 = document.getElementById("tile5");
const btn = document.getElementById("startBtn");
const scoreTxt = document.getElementById("scoreTxt");
const hitZone = document.getElementById("hitZone");
const transitionBtn = document.getElementById("transition");
let xPos = { 1: 100, 2: 325, 3: 545 };
let yPos = { 1: -310, 2: -260, 3: -270, 4: -200, 5: -175, 6: -290 };
let heightTaken = [false, false, false, false, false, false];
let tiles = [tile1, tile2, tile3, tile4, tile5];
let tileInPlace = [false, false, false, false, false];
let time = Date.now();
let rounds = 10;
let score = 0;
let coords = [];
let listeningForHit = false;
let inHitZone = false;

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        if (!listeningForHit) return;

        if (listeningForHit && e.key === "ArrowRight") {
            btn.innerHTML = "right";
            listeningForHit = false;
            score++;
        }
        if (score >= 10) {
            score 
            scoreTxt.innerHTML = "Score: " + (score) + "You Win!";
            listeningForHit = false;
            scoreTxt.innerHTML = "Score: " + (score);
            tiles.forEach(t => t.classList.remove("animate"));
            transitionBtn.style.display = "block";

        }
    })
    document.addEventListener("keydown", (e) => {
        if (!listeningForHit) return;

        if (listeningForHit && e.key === "ArrowDown") {
            btn.innerHTML = "down";
            listeningForHit = false;
            score++;
        }
        if (score >= 10) {
            scoreTxt.innerHTML = "Score: " + (score) + "\n You Win!";
            listeningForHit = false;
            scoreTxt.innerHTML = "Score: " + (score);
            tiles.forEach(t => t.classList.remove("animate"));
            transitionBtn.style.display = "block";
        }
    })
    document.addEventListener("keydown", (e) => {
        if (!listeningForHit) return;
        if (listeningForHit && e.key === "ArrowLeft") {
            btn.innerHTML = "left";
            listeningForHit = false;
            score++;

        }
        if (score >= 10) {
            btn.innerHTML = "You Win!";
            listeningForHit = false;
            scoreTxt.innerHTML = "Score: " + (score) + "\n You Win!";
            tiles.forEach(t => t.classList.remove("animate"));
            transitionBtn.style.display = "block";
        }
    })
});

tiles.forEach(tile => {
    randomizeTilePosition(tile);
    tile.addEventListener("animationend", () => {
        randomizeTilePosition(tile);
        restartAnimation(tile);
    });
});

function randomizeTilePosition(tile) {
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

function restartAnimation(tile) {
    tile.classList.remove("animate");
    void tile.offsetWidth;
    tile.classList.add("animate");
}

function startGame() {
    tiles.forEach(tile => {
        tile.classList.add("animate");
        tileHit(tile);
    });
    if (btn) btn.innerHTML = "Running";
    btn.style.display = "none";
}

function tileHit(fallingObj){
    const checkInterval = setInterval(() => {
        const objRect = fallingObj.getBoundingClientRect();
        const hitRect = hitZone.getBoundingClientRect();

        if (objRect.bottom >= hitRect.top && objRect.top <= hitRect.bottom ) {
            inHitZone = true;
            scoreTxt.innerHTML = "Score: " + (score);
            listeningForHit = true;
        } else if (objRect.top > hitRect.bottom) {
            inHitZone = false;
            scoreTxt.innerHTML = "Score: " + (score);
            listeningForHit = false;
            clearInterval(checkInterval);
        }
    }, 20);
}