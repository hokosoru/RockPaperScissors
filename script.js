let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice(){
    let ComputerChoice = Math.floor(Math.random() * 3) +1;

    if(ComputerChoice === 1){
        console.log("Rock");
    }else if(ComputerChoice === 2){
        console.log("Paper");
    }else {
        console.log("Scissor");
    }
}

function getHumanChoice(choice){
    

    let HumanChoice = choice;

    if(HumanChoice === 'Rock'){
        document.getElementById('human').innerHTML = `You Choose "ROCK"`;
    }else if(HumanChoice === 'Paper'){
        document.getElementById('human').innerHTML = `You Choose "PAPER"`;
    }else if(HumanChoice === 'Scissor'){
        document.getElementById('human').innerHTML = `You Choose "SCISSOR"`;
    }
}
