import getRandomInt from '../utils.js';
import readlineSync from 'readline-sync';
import runGameLogic from '../index.js';

const description = 'What is the result of the expression?';

const checkAnswer = (leftNumber, operator, rightNumber) => {
  switch (operator) {
    case '+':
      return leftNumber + rightNumber;
    case '-':
      return leftNumber - rightNumber;
    case '*':
      return leftNumber * rightNumber;
    default:
      return null;
  }
};

const getGameCalc = () => {
  const leftNumber = getRandomInt(1,100);
  const rightNumber = getRandomInt(1,100);
  const meaning = ['+', '-', '*'];
  const operator = meaning[Math.floor(Math.random() * meaning.length)];
  const gameQuestion = `Question: ${leftNumber} ${operator} ${rightNumber}`;
  const answerCorrect = `${checkAnswer(leftNumber, operator, rightNumber)}`;

  return [gameQuestion, answerCorrect];
};

export default () => runGameLogic(description, getGameCalc);
