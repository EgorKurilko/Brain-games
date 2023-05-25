import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

import toYesNo from '../answer.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const num = getRandomNumber(1, 100);
  const question = `${num}`;
  const answer = toYesNo(isEven(num));
  return [question, answer];
};

const runGameEven = () => runGame(description, getQuestionAnswer);

export default runGameEven;
