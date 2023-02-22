import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  // const userName = readlineSync.keyInYNStrict('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default greeting;
