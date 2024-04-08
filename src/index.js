import readLineSync from 'readline-sync';

const runGameLogic = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  console.log(description);

  const quantityGames = 3;
  for (let i = 0; i < quantityGames; i += 1) {
    const [gameQuestion, answerCorrect] = game();
    console.log(gameQuestion);
    const answerUser = readLineSync.question('Your answer: ');

    if (answerUser === answerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' 'is wrong answer ;(. Correct answer was' '${answerCorrect}'.\nLet's try again, ${nameUser}!`);
      return;
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default runGameLogic;
