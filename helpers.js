import { OPERATORS } from './constants.js';

export const isNumber = (value) => !isNaN(value);

export const isOperator = (value) => OPERATORS.some(operator => operator === value);
