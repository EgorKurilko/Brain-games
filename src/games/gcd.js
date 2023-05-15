import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

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

const getQuestion = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  return `${num1} ${num2}`;
};

const getRightAnswer = (question) => {
  const [num1, num2] = question.split(' ');
  return getGcd(Number(num1), Number(num2));
};

const runGameGCD = () => runGame(description, getQuestion, getRightAnswer);

export default runGameGCD;
