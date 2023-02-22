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
    const userAnswer = readlineSync.keyInYNStrict('Your answer: ');
    if ((isEven(num) && !userAnswer) || (!isEven(num) && userAnswer)) {
      // ответ не верный:
      console.log(`'${toYesNo(userAnswer)}' is wrong answer; Correct answer was '${toYesNo(!userAnswer)}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      sum += 1;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default runEvenGame;
