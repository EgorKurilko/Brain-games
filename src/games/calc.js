import readlineSync from 'readline-sync';

// функция определения случайного знака
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * operators.length);
  const setOperator = operators[randomNumber];
  return setOperator;
};
// оперделяем случайное число из диапазона
const min = 0;
const max = 100;
const getNum = () => Math.floor(Math.random() * (max - min + 1)) + min;
// получаем выражение
const expression = `${getNum(min, max)} ${getRandomOperator()} ${getNum(min, max)}`;
// задаем вопрос
console.log(`Question: ${expression}`);
// получаем ответ игрока
const userAnswer = readlineSync.questionInt('Your answer: ');
// вычисляем арифметичексий результат выражения
const operator = getRandomOperator();
const num = getNum(min, max);
let result = 0;

const getResult = () => {
  switch (operator) {
    case '+':
      result = num + num;
      break;
    case '*':
      result = num * num;
      break;
    case '-':
      result = num - num;
      break;
    default:
      console.log('Этого не произойдёт!');
  }
  return result;
};
// сравниваем арифметический результат выражения с ответом пользователя
// реализация счетчика правильных ходов игрока
const maxuserstep = 3;
let startuserstep;
for (startuserstep = 0; startuserstep < maxuserstep; startuserstep += 1) {
  if (result !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer; Correct answer was '${result}'.`);
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log('Correct!');
  }
}
