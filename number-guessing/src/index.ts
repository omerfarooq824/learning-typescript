import inquirer from "inquirer";

// generates a random number from 1 - 15.
const randNumber = Math.floor(Math.random() * 15 + 1) 

let answer = null;
let guessTaken: null | number = null;

for (guessTaken = 1; guessTaken < 6; guessTaken++){
    answer = await inquirer.prompt([{
        type: 'number',
        name: 'guess',
        message: 'Take a guess between 1-15:',
    }])
    if(answer.guess < randNumber){
        console.log('your guess is too low! try again');
    }
    else if(answer.guess > randNumber){
        console.log('your guess is too high! try again');
    }
    else{
        break;
    }
}
if (answer.guess === randNumber){
    console.log(`Congrats! you guessed the number in ${guessTaken} try.`)
}
else{
    console.log(`Nope! The number I was thinking of was ${randNumber}. `)
}