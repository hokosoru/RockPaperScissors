let HumanScore = 0;
let ComputerScore = 0;
const maxScore = 5;

function getComputerChoice(){
    let ComputerChoice = Math.floor(Math.random() * 3) +1;

    if(ComputerChoice === 1){
       return "Rock";
    }else if(ComputerChoice === 2){
        return "Paper";
    }else if(ComputerChoice === 3){
        return "Scissor";
    }
}

function getHumanChoice(choice){
    
    document.getElementById('human').innerHTML = `You Choose: ${choice}`;

    playRound(choice);
}

function playRound(HumanChoice){

    let ComputerChoice = getComputerChoice();
    document.getElementById('computer').innerHTML = `Computer Choose: ${ComputerChoice}`;
    
    if(HumanChoice === ComputerChoice){
        document.getElementById('result').innerHTML = "DRAW!";
    }
    else if(
        (HumanChoice === 'Rock' && ComputerChoice === 'Scissor') ||
        (HumanChoice === 'Paper' && ComputerChoice === 'Rock') ||
        (HumanChoice === 'Scissor' && ComputerChoice === 'Paper')
    ){
        document.getElementById('result').innerHTML = "You Win!";
        HumanScore++;
    }
    else{
        document.getElementById('result').innerHTML = "You Lose!" ;
        ComputerScore++;
    }
    document.getElementById('humanScore').innerHTML = HumanScore;
    document.getElementById('computerScore').innerHTML = ComputerScore;

    evaluateWinner();
        
}

function evaluateWinner(){
    if(HumanScore === maxScore){
        document.getElementById('winner').innerHTML = `Congratualations You BEAT the COMPUTER <br> now the humans are safe!!`;
        disableButtons();
    } else if (ComputerScore === maxScore) {
        document.getElementById('winner').innerHTML = "Human is in the HANDS OF AI";
        disableButtons();
    }
}

function disableButtons() {
    // Disable the choice buttons once the game is over
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissor').disabled = true;
}

function restart(){
    HumanScore = 0;
    ComputerScore = 0;

    // Update the score display
    document.getElementById('humanScore').innerHTML = HumanScore;
    document.getElementById('computerScore').innerHTML = ComputerScore;

    // Clear the result and choice displays
    document.getElementById('human').innerHTML = "";
    document.getElementById('computer').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('winner').innerHTML = "";

    // Re-enable the buttons
    document.getElementById('Rock').disabled = false;
    document.getElementById('Paper').disabled = false;
    document.getElementById('Scissor').disabled = false;
}