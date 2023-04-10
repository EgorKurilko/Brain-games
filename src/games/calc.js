import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const operators = ['+', '-', '*'];

const getResult = (num1, num2, operator) => {
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

const runGameCalc = () => {
  const description = 'What is the result of the expression?';
  const getQuestion = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    return `${num1} ${operator} ${num2}`;
  };

  const getRightAnswer = (question) => {
    const [num1, operator, num2] = question.split(' ');
    return getResult(Number(num1), Number(num2), operator);
  };
  return runGame(description, getQuestion, getRightAnswer);
};
export default runGameCalc;
