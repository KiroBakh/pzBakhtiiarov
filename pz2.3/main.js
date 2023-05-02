// console.log('Task 1');
// const moment = require('moment')


// let currentDate = moment().format('DD:MM:YYYY - HH:mm:ss');
// console.log(`Поточна дата та час: ${currentDate}`);


// console.log('Task 2');

// const chalk = require('chalk');
// const play = require('play-sound')();

// console.log(chalk.blue('Цей текст буде синім кольором'));
// console.log(chalk.red('Цей текст буде червоним кольором'));

// play.play('./path/to/sound.mp3', err => {
//   if (err) console.error(err);
//   console.log('Звук відтворено успішно');
// });


// console.log('Task 3');

// const path = require('path');
// const os = require('os');

// const absolutePath = path.normalize(process.argv[2]);
// const fullPath = path.resolve(absolutePath);
// const fileName = path.basename(fullPath);
// const extension = path.extname(fullPath);
// const pathInfo = path.parse(fullPath);
// const osFamily = os.platform() === 'win32' ? 'Windows' : 'Unix';

// console.log(`Повний шлях: ${fullPath}`);
// console.log(`Назва файлу: ${fileName}`);
// console.log(`Розширення файлу: ${extension}`);
// console.log(`Вид сімейства операційної системи: ${osFamily}`);

// console.log('Task 4');


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Вітаємо у грі "Орел або решка"!');

function playGame() {
  rl.question('Введіть 1, щоб зіграти "Орла", або 2, щоб зіграти "Решку": ', (answer) => {
    const random = Math.floor(Math.random() * 2) + 1;
    const guess = parseInt(answer);
    if (guess === random) {
      console.log(`Ви вгадали! Випало ${random === 1 ? 'орел' : 'решка'}.`);
    } else {
      console.log(`На жаль, ви не вгадали. Випало ${random === 1 ? 'орел' : 'решка'}.`);
    }
    rl.question('Бажаєте зіграти ще раз? (так/ні): ', (again) => {
      if (again === 'так') {
        playGame();
      } else {
        console.log('Дякуємо за гру!');
        rl.close();
      }
    });
  });
}

playGame();
