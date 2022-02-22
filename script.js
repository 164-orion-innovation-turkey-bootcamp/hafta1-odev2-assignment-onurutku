//variables and arrays
let currentTurn;
let turnCounter;
let sign;
let gameOver;
let winner;
let winCondition;
let boxes;
let button;
let winnerBox;
let who;

//IIFE function to prepare game and buttons on first load.
(() => {
    //query selectors
    boxes = document.querySelectorAll(".box");
    button = document.querySelector(".btn");
    winnerBox=document.querySelector(".winner");
    who=document.querySelector(".who");
    //event
    button.addEventListener("click",prepareGame);
    //fill variables and button events and arrays to prepare and reset the game.
    prepareGame();
})();

//start and restart function
function prepareGame(){
    currentTurn= Math.floor((Math.random()*2)); //random start if number is 1,X will start else O will start the game first.
    sign=currentTurn==1?"X":"O";
    winnerBox.innerHTML=`&#128073; ${sign} &#128072;`
    turnCounter=0;
    gameOver=false; //this will turn true to understand when game end
    winner="";
    who.innerHTML="New Game";
    winCondition=[ //arrays in array, it works like a coordinate system.
        ["0-0","0-1","0-2"],
        ["1-0","1-1","1-2"],
        ["2-0","2-1","2-2"],
        ["0-0","1-0","2-0"],
        ["0-1","1-1","2-1"],
        ["0-2","1-2","2-2"],
        ["0-0","1-1","2-2"],
        ["0-2","1-1","2-0"]
    ];
    //clear once:true and addevent again
    boxes.forEach(e=>{
        e.removeEventListener("click",putSign);
        e.addEventListener("click",putSign,{once:true});
        e.innerHTML="";
    });
}

//application function
function putSign(e){
    e.preventDefault(); // stop reloading page
    turnCounter++; //turn counter count up
    if(!gameOver){ //if game is still goes on
    sign = currentTurn==1?"X":"O"; //decide the starter sign X or O
    currentTurn=!currentTurn; // change the sign for next player
    winCondition.forEach((arrayLines)=>{ //reach to each array in win condition
        arrayLines.forEach(coordinate=>{ // reach to each string in arrars
            if(coordinate==e.target.id){ // if clicked box id == string in array
                //get its exact point in winCondition
                const getCoordinateOutside=winCondition.indexOf(arrayLines);
                const getCoordinateInside=arrayLines.indexOf(coordinate);
                //fill the coordinate with sign X or O
                winCondition[getCoordinateOutside][getCoordinateInside]=sign;
                //game rules win X win O or draw
                winCondition.forEach(win=>{
                    if(win[0]=="X" && win[1]=="X" && win[2]=="X"){
                        winner="X";
                        gameOver=true;
                    }else if(win[0]=="O" && win[1]=="O" && win[2]=="O"){
                        winner="O";
                        gameOver=true;
                    }else if(turnCounter==9 && !gameOver){
                        winner="Draw";
                        gameOver=true;
                    }
                })
            }
        })
    })
    //send results to variables
    e.target.innerHTML=sign; //put the sing on HTML tag
    who.innerHTML="";
    if(winner!=""){
        winnerBox.innerHTML=`&#127881; ${winner} &#127881;`
        who.innerHTML="Game Over!";
    }else{
        winnerBox.innerHTML=`${sign=="O"?'X':'O'}`
    }
    }
}
