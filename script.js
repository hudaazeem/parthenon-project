
var room3 = document.getElementById("room-3");
// var tile1 = document.getElementById("tile1");
// var tile2 = document.getElementById("tile2");
// var tile3 = document.getElementById("tile3");
var centerX=800/2;
var centerY=500/2;
var radius=70;
var background = document.querySelector(".background");
var x1;
var x2; 
var y1; 
var y2;
var room2Scene1=document.getElementById("room2-scene1");
var room2Scene2=document.getElementById("room2-scene2");
var room2Scene3=document.getElementById("room2-scene3");
var room2Scene4=document.getElementById("room2-scene4");
var createDrawing = document.getElementById("create-drawing");
var canvas = document.getElementById("drawingCanvas");
if(canvas){
    var ctx = canvas.getContext("2d");
}   
var finishDrawing = document.getElementById("finish-drawing");
var drawnPixels=[];


var door = document.getElementById("doorAnimation");
var drawAgain = document.getElementById("draw-again");

var doorToRoom3 = document.getElementById("move-to-room-3");

var clayroomScene1 = document.getElementById("clayroom-scene1");
var clayroomScene2 = document.getElementById("clayroom-scene2");

var clayDropped = 0;
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
    //template circle provided...


    ctx.beginPath();

    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
    ctx.strokeStyle="grey";
    ctx.lineWidth=3;
    ctx.stroke();
    //where the user actually draws
    var isDrawing = false;
    var lastX=0;
    var lastY=0;

    canvas.addEventListener('mousedown', (e)=>{
        isDrawing=true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', (e)=>{
        
        if(!isDrawing) return;

        x1 = lastX;
        x2 = e.offsetX;
        y1 = lastY;
        y2 = e.offsetY;

        drawnPixels.push({x: x2, y: y2});
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineCap="round";
        ctx.lineJoin="round";
        ctx.lineWidth=11;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        [lastX, lastY] = [x2, y2];
    });

    canvas.addEventListener('mouseup', ()=> isDrawing=false);
    canvas.addEventListener('mouseout', () => isDrawing=false);

    finishDrawing.addEventListener('click', function(){
        var accuracy=calculateDistance();
        document.getElementById("accuracyDisplay").textContent ="Your accuracy: " + accuracy.toFixed(2) + "%";

        room2Scene2.classList.add("hidden");
        room2Scene3.classList.remove("hidden");
        if (accuracy<80){
            door.classList.add("hidden");
            doorToRoom3.classList.add("hidden");
            drawAgain.classList.remove("hidden");
    
        }else{
            door.classList.remove("hidden");
            doorToRoom3.classList.remove("hidden");
            drawAgain.classList.add("hidden");
        }
    });
}

function calculateDistance(){
    var totalError = 0;
    var maxError = 20;

    drawnPixels.forEach(p => {
        var dx = p.x - centerX;
        var dy = p.y - centerY;
        var distance = Math.sqrt(dx * dx + dy * dy);

        var error = Math.abs(distance - radius);

        totalError += error;
    });

    var avgError = totalError / drawnPixels.length;

    var accuracy = 100 - (avgError / maxError) * 100;

    if (accuracy < 0) accuracy = 0;
    if (accuracy > 100) accuracy = 100;

    return accuracy;
}

if(doorToRoom3){
    doorToRoom3.addEventListener('click', function(){
        window.location.href = "room3.html";

    })
}

if(drawAgain){
    drawAgain.addEventListener('click', function(){
        ctx.clearRect(0,0, 800, 500);
        drawnPixels=[];

        room2Scene3.classList.add("hidden");
        room2Scene2.classList.remove("hidden");

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI*2);
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 3;
        ctx.stroke();
    })
}

function makeDraggable(element) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        const rect = element.getBoundingClientRect();
        element.style.cursor = "grabbing";
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        var bounds = clayroomScene1.getBoundingClientRect();
        element.style.left = (e.clientX - bounds.left - element.offsetWidth / 2) + "px";
        element.style.top = (e.clientY - bounds.top - element.offsetHeight / 2) + "px";
        checkClayOnTable();
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        element.style.cursor = "grab";
    });
}

if(clayroomScene1){
    makeDraggable(document.getElementById("clay1"));
    makeDraggable(document.getElementById("clay2"));
    makeDraggable(document.getElementById("clay3"));
}
//new thing
function isOverlapping(a, b) {
    const r1 = a.getBoundingClientRect();
    const r2 = b.getBoundingClientRect();

    return !(
        r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom
    );
}

function checkClayOnTable() {
    const clay1 = document.getElementById("clay1");
    const clay2 = document.getElementById("clay2");
    const clay3 = document.getElementById("clay3");
    const table = document.getElementById("clay-table");
    const key = document.getElementById("key");

    const c1 = isOverlapping(clay1, table);
    const c2 = isOverlapping(clay2, table);
    const c3 = isOverlapping(clay3, table);

    

    if (c1 && c2 && c3) {
        var rect = clay1.getBoundingClientRect();
        var parentRect = clayroomScene1.getBoundingClientRect();
        const relativeX = rect.left - parentRect.left;
        const keyHeight = key.getBoundingClientRect().height;
        const bottomY = parentRect.height - keyHeight-70;        key.style.left = relativeX + "px";
        key.style.top = bottomY + "px";

        key.classList.remove("hidden");
        clay1.style.display = "none";
        clay2.style.display = "none";
        clay3.style.display = "none";
    } 
}

var key = document.getElementById("key");

if (key) {
    key.addEventListener("click", function() {
        window.location.href = "ending.html";
    })
}


//new thing (ended)