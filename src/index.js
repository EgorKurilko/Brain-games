import readlineSync from 'readline-sync';

const runGame = (description, getQuestion, getRightAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  let count = 0;
  const maxNumOfRounds = 3;
  while (count !== maxNumOfRounds) {
    const question = getQuestion();
    const rightAnswer = getRightAnswer(question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(rightAnswer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer; Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
