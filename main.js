import { INPUT_REQUIREMENTS_MESSAGE, OPERATIONS, WELCOME_MESSAGE } from './constants.js';
import { isNumber, isOperator } from './helpers.js';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

process.on('exit',  () => {
    rl.close();
    console.log('Bye!!!');
});

const operands = [];

const addOperand = (value) => {
    operands.push(+value);
}

const calculate = (operator) => {
    const operation = OPERATIONS[operator];

    if (operands.length > 1) {
        const secondOperand = operands.pop();
        const firstOperand = operands.pop();
        const result = operation(firstOperand, secondOperand);
        addOperand(result);
    }
}

const clear = () => {
    console.log(`Values cleared successfully! ${INPUT_REQUIREMENTS_MESSAGE}`);
    operands.length = 0;
}

const getCurrentValue = () => {
    const value = operands[operands.length - 1];

    if(!value && value !== 0 ) return '';

    return Number.isInteger(value) ? value.toFixed(1) : value;
};

const handleInput = (input) => {
    switch(input) {
        case 'q':
        case 'quit':
            process.exit();
            break;
        case 'c':
        case 'clear':
            clear();
            break;
        default:
            handleValues(input);
            break;
    }
}

const handleValues = (inputString) => {
    const inputValues = inputString.replace( /\s\s+/g, ' ' ).split(' ');
    inputValues.forEach(argument => {
        if(isNumber(argument)) {
            addOperand(argument);
        } else if (isOperator(argument)) {
            calculate(argument);
        } else {
            console.log(`Incorrect input. ${INPUT_REQUIREMENTS_MESSAGE}`);
        }
    });
}

const listenToInput = () => {
    rl.question("> ", function(input) {
        handleInput(input);

        console.log(getCurrentValue());

        listenToInput();
    });
}

const run = () => {
    console.log(WELCOME_MESSAGE);
    listenToInput();
}

run();
