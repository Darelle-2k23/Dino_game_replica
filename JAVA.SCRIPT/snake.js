
<canvas id="gc" width="400" height="400"></canvas>

let snakes=document.getElementById('snakey')
snakes.innerHTML 
window.onload=function(){
    canv=document.getElementById('gc');
    ctx=canv.context("2d");
    document.addElementListener("keydown",keypush);
    setInterval(game,1000/15);
}

px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
trail=5;
function game(){
    px+=xv;
    py+=yv;

    if(px<0){
        px=tc-1;
    }
    if (px>tc-1){
        px=0;
    }
    if(py<0){
        py=tc-1;
    }
    if(py>tc-1){
        py=0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height)
}


























































