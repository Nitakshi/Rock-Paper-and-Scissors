let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara= document.querySelector("#player-score");
const comppara=document.querySelector("#comp-score");
 //for each method performs operation on each index values
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id"); //get the id of the choice selected by user
        playgame(userchoice);
    })
});

//Generate computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissors"]; //store in array
    //Math.floor-> remove decimal values
   const randomIdx= Math.floor(Math.random()*3); //generate random number
   return options[randomIdx]; //any random index will be choosed
}

const drawgame=()=>{
    // console.log("Match is drawn");
    msg.innerText="Game Draw ! Play again";
    msg.style.backgroundColor="#081b31";
}

const ShowWinner=(userWin,userchoice,compchoice)=>{
    if(userWin=== true){
        // console.log("You win!");
        userScore++;
        userpara.innerText=userScore;
        msg.innerText=`You won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        // console.log("You lose");
        compScore++;
        comppara.innerText=compScore;
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        
    }
}
//Computer
const playgame=(userchoice) => {
       console.log("Userchoice= ",userchoice);
       //generate computer choice
       const compchoice= genCompChoice();
       console.log("ComputerChoice= ",compchoice);
       if(userchoice===compchoice){
           drawgame();

       }
       else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userWin=compchoice==="scissors"?false:true;
        }
        else {
            //rock,paper
            userWin=compchoice==="rock"?false:true;
        }
        ShowWinner(userWin,userchoice,compchoice);
       }      
};
//restart  button
const restartbtn= document.querySelector("#restart");
restartbtn.addEventListener('click',()=>{
    userScore=0;
    compScore=0;
    userpara.innerText=userScore;
    comppara.innerText=compScore;
    msg.innerText="Game Restarted! Make your Choice.";
    msg.style.backgroundColor="#081b31";
});