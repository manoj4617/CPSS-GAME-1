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

var dx = 1;
var dy = 1;

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
const draw = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawRect();
    drawMoveBox();

    if(moveBoxOneY < rectOneY + 5 || moveBoxOneY  >= rectOneWidth - 5){
        console.log(moveBoxOneY);
        dy = -dy;
    }
    moveBoxOneY += dy;

    requestAnimationFrame(draw);
}

draw();
