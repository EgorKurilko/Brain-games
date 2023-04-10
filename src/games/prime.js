import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const isPrime = (num) => {
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const runGameIsPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestion = () => {
    const num = getRandomNumber(1, 100);
    return `${num}`;
  };
  const getRightAnswer = (question) => isPrime(question);

  return runGame(description, getQuestion, getRightAnswer);
};
export default runGameIsPrime;
