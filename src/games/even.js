import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const toYesNo = (value) => (value ? 'yes' : 'no');

const getQuestion = () => {
  const num = getRandomNumber(1, 100);
  return `${num}`;
};

const getRightAnswer = (question) => toYesNo(isEven(question));

const runGameEven = () => runGame(description, getQuestion, getRightAnswer);

export default runGameEven;
