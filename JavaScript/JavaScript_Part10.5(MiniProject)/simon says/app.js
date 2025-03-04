let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        // console.log("game Started");
        started = true;
        levelUp();
    }
});

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); 
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(level > highScore){
            highScore = level;
        }
        document.body.style.backgroundColor = "red";
        setTimeout(function(){
        document.body.style.backgroundColor = "white";
        },100);
        h2.innerHTML = `Game Over Your score was <b>${level}</b> High score is ${highScore}<br>press any key to start`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    // userFlash(btn);
    gameFlash(btn);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1 );
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
