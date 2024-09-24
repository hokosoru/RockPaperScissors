let HumanScore = 0;
let ComputerScore = 0;

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

    
}