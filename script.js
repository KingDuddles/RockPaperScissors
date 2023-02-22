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
    } else if ((playerSelection === "rock" && computerSelection === "scisors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return 1;
    } else {
        return 2;
    }
}

function game() {
    //Reset the score
    let computerWins = 0;
    let playerWins = 0;
    let roundResult;

    //Play for 5 rounds - rounds that are draws or invalid inputs are to be re-played, hence "i--"
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\"");
        computerSelection = getComputerChoice();
        console.log("Round: " + i);
        roundResult = playRound(playerSelection, computerSelection)
        //capitalizeFirstLetter function is run before any console.log commands to ensure text is displayed nicely
        playerSelection = capitalizeFirstLetter(playerSelection);
        computerSelection = capitalizeFirstLetter(computerSelection);
        console.log("You chose: "+playerSelection + ", Computer chose: " + computerSelection);
        if(roundResult === 0) {
            console.log("Draw! Round Restart")
            i--;
        } else if (roundResult === 1) {
            console.log("You Win this round! " + playerSelection + " beats " + computerSelection);
            playerWins++;
        } else if (roundResult === 2) {
            console.log("You Lose this round! " + computerSelection + " beats " + playerSelection);
            computerWins++;
        } else {
            console.log(playerSelection + " is not a valid selection, try again.");
            i--;
        }
    }
    //Determine the winner and display appropriate message to console
    console.log("Game over!")
    if (computerWins > playerWins){
        console.log("You Lose! " + playerWins + " to " + computerWins);
    } else {
        console.log("You Win! " + playerWins + " to " + computerWins);
    }
}

function capitalizeFirstLetter(inputText){
    //Function to take any string input and capitalize the first letter
   return inputText.replace(inputText.charAt(0), inputText.charAt(0).toUpperCase()); 
}

let inputText = "string";
let playerSelection;
let computerSelection;
let roundResult;
console.log("Lets play Rock Paper Scissors, Best of 5");
game();

