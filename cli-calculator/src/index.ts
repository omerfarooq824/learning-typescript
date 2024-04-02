import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: 'Enter First Number: ',
        type: 'number',
        name: 'firstNumber',
    },
    {
        message: 'Enter Second Number: ',
        type: 'number',
        name: 'secondNumber',
    },
    {
        message: 'Select one of the Operators to perform Action on the Number',
        type: 'list',
        name: 'operators',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
]);
// console.log(answer);
if (answer.operators === 'Addition'){
    console.log(`${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`)
}
else if (answer.operators === 'Subtraction'){
    console.log(`${answer.firstNumber} - (${answer.secondNumber}) = ${answer.firstNumber - answer.secondNumber}`)
    
}
else if (answer.operators === 'Multiplication'){
    console.log(`${answer.firstNumber} * ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`)
}
else if (answer.operators === 'Division'){
    console.log(`${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`)
}
else {
    console.log('Please seleect a valid operator!!')
}
