import readlineSync from 'readline-sync';

const runGame = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  const maxNumOfRounds = 3;
  for (let count = 0; count < maxNumOfRounds; count += 1) {
    const [question, answer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(answer) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer; Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
