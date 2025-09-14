let gameSeq = [];
let userSeq = [];

let btns = ["red", "green" ,"blue", "yellow"];
let started = false ;
let level = 0;


let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    // console.log(randomIdx);
    // console.log(randomcolor);
    // console.log(randombtn);
    
   gameFlash(randomBtn);
};

function checkAns(indx){
    // let indx = level-1;

    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup,1000);
        }
            console.log("same-value");
    }
    else{
        h2.innerHTML = `Game over! Your score is <b>${level}</b> <br> Press any key to start game.`;

        // Flash red background
    document.body.classList.add("game-over");
        setTimeout(() => {
        document.body.classList.remove("game-over");}, 200);

        reset();
    }
}

function btnPress (){
    let btn = this;
    console.log(this);
    userFlash(btn);

    let userColor =  btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}