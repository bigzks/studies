import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
import inquirer from 'inquirer';

const sleep = (time: number) => new Promise((resolve, reject) => setTimeout(resolve, time));
var restart;

async function splashScreen(){
  console.clear();

  // guess game animated pixel art
  let asciiGuessGame = chalkAnimation.rainbow(" ██████  ██    ██ ███████ ███████ ███████      ██████   █████  ███    ███ ███████ \n██       ██    ██ ██      ██      ██          ██       ██   ██ ████  ████ ██      \n██   ███ ██    ██ █████   ███████ ███████     ██   ███ ███████ ██ ████ ██ █████   \n██    ██ ██    ██ ██           ██      ██     ██    ██ ██   ██ ██  ██  ██ ██      \n ██████   ██████  ███████ ███████ ███████      ██████  ██   ██ ██      ██ ███████ ");

  // wait and stop animation
  await sleep(3000);
  asciiGuessGame.stop();
}

async function mainGame(){
  // randomize number
  let number: number = Math.ceil(Math.random()* 100);
  var guess: number = -1;
  var KeepPlaying: Boolean;

  console.clear();
  await sleep(800);

  console.log("Can you guess the", chalk.bgWhite(chalk.blackBright("number")), "I'm thinking?\n");

  while(guess != number){
    // ask for guess and treat not numbers
    var ask = await inquirer.prompt([
      {
        type: 'input',
        name: 'guess',
        message: "What's your guess? (1 - 100)\n",
        validate(answer: number) {
          if (isNaN(answer)) {
            return console.log(chalk.bgRed("Invalid number!\n"));
          }
    
          return true;
        }
      }
    ])
    guess = ask.guess

    // check if guessed right
    if(guess != number){
      // ask if wants to guess again
      ask = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'KeepPlaying',
          message: 'Wrong! Want to continue?\n',
          default: true
        }
      ])
      // if not say number and quit
      if(!ask.KeepPlaying){
        console.log("What a shame, loser! The number was", number, "\n")
        break;
      }
    }
  }
}

async function main(){
  await splashScreen();
  await mainGame();
}

await main();