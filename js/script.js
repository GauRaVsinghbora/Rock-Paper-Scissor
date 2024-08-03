const choices = document.querySelectorAll(".nothing")
let yourScoreBoard = document.querySelector(".your-score");
let compScoreBoard = document.querySelector(".comp-score");
const whoWin = document.querySelector(".move");
const restart = document.querySelector(".restart");


let youScore = 0;
let youscorecount = 0;
let compScore = 0;
let compscorecount = 0;

let userChoice = "";
let compChoiceValue = "";
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    console.log("User choice is",userChoice);
    compChoice(userChoice);
    checkWinner();
    dowork();
    displayWinner();
    restart.style.visibility = 'visible';
    });
});


function compChoice(userChoice){
    choose = ["paper","rock","scissors"];
    const index = Math.floor(Math.random()*3);
    compChoiceValue =(choose[index]);
    console.log(`computer chooses ${compChoiceValue}`);
    return 0;
}

function checkWinner(){
    if (userChoice == compChoiceValue){
        console.log("Draw");
        youScore = 0;
        compScore=0;
    }
    else if(userChoice=="rock" && compChoiceValue=="paper"){
        console.log("computer win");
        compScore= 1;
        youScore = 0;
    }
    else if(userChoice=="rock" && compChoiceValue=="scissors"){
        console.log("user win");
        youScore= 1;
        compScore = 0;
    }
    else if(userChoice=="paper" && compChoiceValue=="rock"){
        console.log("user win");
        youScore= 1;
        compScore=0;
    }
    else if(userChoice=="paper" && compChoiceValue=="scissors"){
        console.log("computer win");
        compScore= 1;
        youScore=0;
    }
    else if(userChoice=="scissors" && compChoiceValue=="paper"){
        console.log("user win");
        youScore= 1;
        compScore =0;
    }
    else if(userChoice=="scissors" && compChoiceValue=="rock"){
        console.log("computer win");
        compScore= 1;
        youScore = 0;
    }
}
function dowork(){
    if(youScore == 1){
        youscorecount++;
        whoWin.classList.add("winner");
        whoWin.classList.remove("loss");
        whoWin.innerText = `You Win. Your ${userChoice} beats ${compChoiceValue}`;
    }
    else if (compScore ==1){
        compscorecount++;
        whoWin.classList.add("loss");
        whoWin.classList.remove("winner");
        whoWin.innerText = `You lose. ${compChoiceValue} beats your ${userChoice}`;
    }
    else{
        whoWin.classList.remove("loss");
        whoWin.classList.remove("winner");
        whoWin.innerText = `It's Draw`;
    }
}

function displayWinner(){
    yourScoreBoard.innerText = youscorecount;
    compScoreBoard.innerText = compscorecount; 
}

restart.addEventListener("click",()=>{
    youscorecount = 0;
    compscorecount = 0;
    yourScoreBoard.innerText = youscorecount;
    compScoreBoard.innerText = compscorecount;
    restart.style.visibility = "hidden";
})