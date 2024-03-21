import getRandomInt from '../utils.js';
import readlineSync from 'readline-sync';
import runGameLogic from '../index.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameEven = () => {
  const randomNumber = getRandomInt(1,100);
  const gameQuestion = `Question: ${randomNumber}`;
  const checkRandomNumber = randomNumber % 2 === 0;
  const answerCorrect = checkRandomNumber ? 'yes' : 'no';

  return [gameQuestion, answerCorrect];
};

export default () => runGameLogic(description, getGameEven);
