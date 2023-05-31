import runGame from '../index.js';

import getRandomNumber from '../getRandom.js';

import toYesNo from '../toYesNo.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnsw = () => {
  const num = getRandomNumber(1, 100);
  const question = `${num}`;
  const answer = toYesNo(isPrime(num));
  return [question, answer];
};

const runGameIsPrime = () => runGame(description, getQuestionAnsw);

export default runGameIsPrime;
