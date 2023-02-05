import readlineSync from 'readline-sync';

const greeting = () => {
    var readlineSync = require('readline-sync');
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
};
export default greeting;