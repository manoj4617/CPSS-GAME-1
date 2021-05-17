const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

var rectOneX = canvas.width - 900;
var rectOneY = canvas.height - 600;
var rectTwoX = (canvas.width/2);
var rectTwoY = (canvas.height/2);
var rectOneWidth = 400;
var rectOneHeight = 100;
var rectTwoWidth = 400;
var rectTwoHeight = 100;

var moveBoxOneX = rectOneX + 5;
var moveBoxOneY = rectOneY + 5;
var moveBoxTowX = rectTwoX + 5;
var moveBoxTowY = rectTwoY + 5;

var toMoveBoxOneX = moveBoxOneX + 4;
var toMoveBoxOneY = moveBoxOneY + 4;
var toMoveBoxTwoX = moveBoxTowX + 4;
var toMoveBoxTwoY = moveBoxTowY + 4;

var dx = 2;
var dy = 2;

const drawRect = ()=>{
    ctx.beginPath();
    ctx.rect(rectOneX,rectOneY,rectTwoHeight,rectOneWidth);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.rect(rectTwoX,rectTwoY,rectTwoWidth,rectTwoHeight);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}
const drawMoveBox = () => {
    ctx.beginPath();
    ctx.rect(moveBoxTowX,moveBoxTowY,90,90);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(moveBoxOneX,moveBoxOneY,90,90);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();
}

const drawMovingBox = ()=>{
    ctx.beginPath();
    ctx.rect(toMoveBoxOneX,toMoveBoxOneY,80,80);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(toMoveBoxTwoX,toMoveBoxTwoY,80,80);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}
const draw = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawRect();
    drawMoveBox();
    drawMovingBox();

    if(moveBoxOneY < rectOneY + 5 || moveBoxOneY  >= rectOneY + rectOneWidth - 95){
        dy = -dy;
    }
    moveBoxOneY += dy;

    if(moveBoxTowX < rectTwoX + 5 || moveBoxTowX >= rectTwoX + rectTwoWidth - 95){
        dx = -dx;
    }
    moveBoxTowX += dx;
    requestAnimationFrame(draw);
}

draw();
