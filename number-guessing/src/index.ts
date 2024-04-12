import inquirer from "inquirer";

// generates a random number from 1 - 15.
const randNumber = Math.floor(Math.random() * 15 + 1) 

let answer = null;
let guessTaken: null | number = null;

console.log("I'm thinking of number between 1 to 15.\n");

for (guessTaken = 1; guessTaken < 6; guessTaken++){
    answer = await inquirer.prompt([{
        type: 'number',
        name: 'guess',
        message: 'Take a guess:',
    }])
    if(answer.guess < randNumber){
        console.log('Your guess is too low! try again');
    }
    else if(answer.guess > randNumber){
        console.log('Your guess is too high! try again');
    }
    else{
        break; // this condition is the correct guess.
    }
}
if (answer.guess === randNumber){
    console.log(`Good Job! you guessed the number in ${guessTaken} guesses!`)
}
else{
    console.log(`Nope! The number I was thinking of was ${randNumber}. `)
}