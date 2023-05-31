import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

import toYesNo from '../toYesNo.js';

import isEven from '../isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const num = getRandomNumber(1, 100);
  const question = `${num}`;
  const answer = toYesNo(isEven(num));
  return [question, answer];
};

const runGameEven = () => runGame(description, getQuestionAnswer);

export default runGameEven;
