import getRandomInt from '../utils.js';
import readlineSync from 'readline-sync';
import runGameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (randomNumber1, randomNumber2) => {
  if (!randomNumber2) {
    return randomNumber1;
  }

  return getRightAnswer(randomNumber2, randomNumber1 % randomNumber2);
};

const getGameGCD = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const gameQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  const answerCorrect = `${getRightAnswer(randomNumber1, randomNumber2)}`;

  return [gameQuestion, answerCorrect];
};


export default () => runGameLogic(description, getGameGCD);