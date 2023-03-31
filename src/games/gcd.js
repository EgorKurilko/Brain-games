import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const getArrayofDivide = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
};

const getGreatDivide = (array1, array2) => {
  const result = [];
  for (let i = array1.length - 1; i >= 0; i -= 1) {
    for (let j = array2.length - 1; j >= 0; j -= 1) {
      if (array1[i] === array2[j]) {
        result.push(array2[j]);
        const maxDivide = Math.max(result);
        return maxDivide;
      }
    }
  }
  return result;
};

const runGameGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    return `${num1} ${num2}`;
  };

  const getRightAnswer = (question) => {
    const [num1, num2] = question.split(' ');
    const array1 = getArrayofDivide(num1);
    const array2 = getArrayofDivide(num2);
    return getGreatDivide(array1, array2);
  };
  return runGame(description, getQuestion, getRightAnswer);
};
export default runGameGCD;
