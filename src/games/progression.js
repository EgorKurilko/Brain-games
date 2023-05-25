import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNum, size, step) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    const number = firstNum + (step * i);
    progression.push(number);
  }
  return progression;
};

const getQuestionAnswer = () => {
  const firstNum = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const size = getRandomNumber(5, 10);
  const missingIndex = getRandomNumber(0, size - 1);
  const progression = getProgression(firstNum, size, step);
  const answer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runGameProgression = () => runGame(description, getQuestionAnswer);

export default runGameProgression;
