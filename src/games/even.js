import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const isEven = (num) => num % 2 === 0;

const toYesNo = (value) => (value ? 'yes' : 'no');

const runGameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestion = () => {
    const num = getRandomNumber(1, 100);
    return `${num}`;
  };

  const getRightAnswer = (question) => toYesNo(isEven(question));
  return runGame(description, getQuestion, getRightAnswer);
};
export default runGameEven;
