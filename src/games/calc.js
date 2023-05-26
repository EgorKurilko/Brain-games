import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcxpression = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      console.log('Этого не произойдёт!');
  }
  return result;
};

const getQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calcxpression(num1, num2, operator);
  return [question, answer];
};

const runGameCalc = () => runGame(description, getQuestionAnswer);

export default runGameCalc;
