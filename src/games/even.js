import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
let sum = 0;

const getNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const toYesNo = (value) => (value ? 'yes' : 'no');

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Please, answer "yes" if the number is even, otherwise answer "no".');

  while (sum !== 3) {
    const num = getNum(1, 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((isEven(num) && userAnswer === 'no') || (!isEven(num) && userAnswer === 'yes')) {
      console.log(`'${userAnswer}' is wrong answer; Correct answer was '${toYesNo(isEven(num))}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (userAnswer === 'yes' || userAnswer === 'no') {
      console.log('Correct!');
      sum += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer; Correct answer was '${toYesNo(isEven(num))}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runEvenGame;
