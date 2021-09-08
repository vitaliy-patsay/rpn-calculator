import chalk from 'chalk';

export const OPERATORS = ['+', '-', '*', '/'];

export const OPERATIONS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
};

export const INPUT_REQUIREMENTS_MESSAGE = `Please type in numbers and arithmetic operators ${chalk.bold.green(OPERATORS.join(' '))} separated by whitespace.`;

export const WELCOME_MESSAGE = `
Welcome to reverse polish notation calculator!
Use commands ${chalk.bold.yellow('clear')} or ${chalk.bold.yellow('c')} to clear console and start new calculation.
Use commands ${chalk.bold.red('quit')} or ${chalk.bold.red('q')} to close the app.
${INPUT_REQUIREMENTS_MESSAGE}
`;
