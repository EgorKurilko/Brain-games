import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('MayI have your name? ');
  // const userName = readlineSync.keyInYNStrict('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default greeting;
