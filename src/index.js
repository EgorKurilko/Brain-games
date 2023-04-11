import readlineSync from 'readline-sync';

const runGame = (description, getQuestion, getRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Это описание специфичное для игры even (S)
  console.log(description);

  // 3 раза задаём вопрос во вссех играх (A)
  let sum = 0;
  while (sum !== 3) {
    const question = getQuestion(); // Сочиняем вопрос (S) num -- это вопрос
    const rightAnswer = getRightAnswer(question); // Получаем правильный ответ (S)
    console.log(`Question: ${question}`); // Задаём вопрос (A)
    const userAnswer = readlineSync.question('Your answer: '); // Получаем ответ (A) (S) ???
    if (String(rightAnswer) !== userAnswer) { // Сравниваем ответ поьзователя с правильным
      console.log(`'${userAnswer}' is wrong answer; Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    sum += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGame;
