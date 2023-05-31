import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (c, d) => {
  let a = c;
  let b = d;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b);
};

const getQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [question, answer];
};

const runGameGCD = () => runGame(description, getQuestionAnswer);

export default runGameGCD;
