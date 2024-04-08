import getRandomInt from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  const startNumber = Number(getRandomInt(1, 100));
  const stepProgression = Number(getRandomInt(1, 5));
  let nextNumber = startNumber + stepProgression;
  const lengthProgression = Number(getRandomInt(5, 10));

  const arrayProgression = [startNumber];

  for (let i = 0; i < lengthProgression - 1; i += 1) {
    arrayProgression.push(nextNumber);
    nextNumber += stepProgression;
  }

  return arrayProgression;
};

const getReadLineSyncGameProgression = () => {
  const arithmeticProgression = getArithmeticProgression();
  const index = getRandomInt(0, arithmeticProgression.length - 1);
  const answerCorrect = `${arithmeticProgression[index]}`;

  arithmeticProgression[index] = '..';

  const gameQuestion = `Question: ${arithmeticProgression.join(' ')}`;

  return [gameQuestion, answerCorrect];
};

export default () => runGameLogic(description, getReadLineSyncGameProgression);
