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

const getStep = (arr) => {
  let step = 0;
  if (Number.isNaN(arr[2])) {
    step = arr[1] - arr[0];
  } else if (Number.isNaN(arr[0])) {
    step = arr[2] - arr[1];
  } else {
    step = (arr[2] - arr[0]) / 2;
  }
  return step;
};

const getQuestion = () => {
  const firstNum = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const size = getRandomNumber(5, 10);
  const missingIndex = getRandomNumber(0, size);
  const progression = getProgression(firstNum, size, step);
  progression[missingIndex] = '..';
  return progression.join(' ');
};

const getRightAnswer = (question) => {
  const progression = question.split(' ').map(Number);
  const step = getStep(progression);
  let answer = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (Number.isNaN(progression[0])) {
      answer = progression[1] + (step * (i - 1));
      return answer;
    }
    if (Number.isNaN(progression[i])) {
      answer = progression[0] + (step * i);
      return answer;
    }
  }
  return answer;
};

const runGameProgression = () => runGame(description, getQuestion, getRightAnswer);

export default runGameProgression;
