function capitalizeFirstLetter(inputText){
    //Function to take any string input and capitalize the first letter
   return inputText.replace(inputText.charAt(0), inputText.charAt(0).toUpperCase()); 
}
function getComputerChoice(){
    //Determine a random number between 0 and 3, assign and return rock, paper or scissors based on this value
    let choice = (Math.floor(Math.random()*3));
    if (choice === 0) {
        return "rock";
    } else if (choice === 1){
        return "paper";
    } else {
        return "scissors";
    }    
}
function playRound(playerSelection, computerSelection) {
    //Play a single round of rock paper scissors taking the player and computer selection inputs, returning a unique number for each result
    //A unique number has also been assigned for invalid inputs (4)
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        return 4;
    }else if (playerSelection === computerSelection){
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return 1;
    } else {
        return 2;
    }
}
function game(playerSelection) {

    let roundResult;
    let resultsText;
    let roundText;
    let roundDesc;

        rounds++;
        computerSelection = getComputerChoice();
        roundText = "Round: " + rounds + "  |  Score: Player " + playerWins + ", Computer " + computerWins;
        console.log("player selection:" + playerSelection + ", Computer selection: " + computerSelection);
        roundResult = playRound(playerSelection, computerSelection)
        console.log(roundResult);
        //capitalizeFirstLetter function is run before any console.log commands to ensure text is displayed nicely
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = capitalizeFirstLetter(computerSelection);
        roundDesc = "You chose: "+playerSelection + ", Computer chose: " + computerSelection;
        if(roundResult === 0) {
            resultsText = "Draw!";
        } else if (roundResult === 1) {
            resultsText ="You Win this round! " + playerSelection + " beats " + computerSelection;
            playerWins++;
        } else if (roundResult === 2) {
            resultsText = "You Lose this round! " + computerSelection + " beats " + playerSelection;
            computerWins++;
        } else {
            resultsText = playerSelection + " is not a valid selection, try again.";
        }

    results.textContent = resultsText;
    roundDescription.textContent = roundDesc;
    roundNo.textContent = roundText;
    container.appendChild(roundNo);
    container.appendChild(roundDescription);
    container.appendChild(results);
}

function resetGame(){
rounds = 0;
playerWins = 0;
computerWins = 0;
//check if there are any children to be removed, this will prevent throwing DOMException error
if (container.childElementCount > 1) {
    container.removeChild(roundNo);
    container.removeChild(roundDescription);
    container.removeChild(results);
    if (container.lastChild === finalResults) {
        container.removeChild(finalResults);
        }
    }
}

let inputText;
let playerSelection;
let computerSelection;
let roundResult;
let rounds = 0; 
let computerWins = 0;
let playerWins = 0;

const container = document.querySelector('div');
const results = document.createElement('div');
const roundNo = document.createElement('div');
const roundDescription = document.createElement('div');
const finalResults = document.createElement('div');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "reset"){
            resetGame();
        } else {
            if (computerWins<5 && playerWins <5){
                console.log(button.id);
                game(button.id);
            } 
            if (computerWins >= 5 || playerWins >=5){
                //add button to reset game
                if (computerWins > playerWins){
                    finalResults.textContent = "You Lose! Computer won " + computerWins + " times, you won " + playerWins + " times! Bad luck!";
                } else {
                    finalResults.textContent = "You Win! Computer won " + computerWins + " times, you won " + playerWins + " times! Well done!";
                }
                finalResults.style.fontSize = "25px";
                container.appendChild(finalResults);
            }
        }
    })
})





