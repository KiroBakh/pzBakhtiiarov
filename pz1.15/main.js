// console.log("Task 1");

// function convertNumberToObject(num) {
//   if (num > 9999) {
//     console.log("Число більше 9999!");
//     return {};
//   } else if (num < 0) {
//     console.log("Число меньше 0!");
//     return {};
//   }

//   const thousands = Math.floor(num / 1000);
//   const hundreds = Math.floor((num % 1000) / 100);
//   const tens = Math.floor((num % 100) / 10);
//   const ones = num % 10;

//   const result = {
//     тисячі: thousands,
//     cотні: hundreds,
//     десятки: tens,
//     одиниці: ones,
//   };

//   return result;
// }

// console.log(convertNumberToObject(2459));
// console.log(convertNumberToObject(9999));
// console.log(convertNumberToObject(10000));

// console.log("Task 2");

// function getExt(path) {
//   if (typeof path !== "string") {
//     console.log("Not a String");
//   } else {
//     let part = path.split(".");
//     console.log(part[part.length - 1]);
//   }
// }
// path = "/PZ's/TRPZ/pzBakhtiiarov/pz1.15/main.js";
// path2 = "PZ's/TRPZ/pzBakhtiiarov/pz1.15/index.html";
// getExt(path);
// getExt(path2);
// getExt(4);

// console.log("Task 3");

// function golosAndPrigolos(str) {
//   const vowels = ["а", "о", "у", "и", "і", "е"];
//   let golos = 0;
//   let prigolos = 0;

//   str.split("").forEach((word) => {
//     if (vowels.includes(word[0].toLowerCase())) {
//       golos++;
//     } else {
//       prigolos++;
//     }
//   });

//   let obj = {
//     текст: str,
//     голосних: golos,
//     приголосних: prigolos,
//   };
//   return obj;
// }

// console.log(golosAndPrigolos("деякий текст тот"));

// console.log("Task 4");

// function validateEmail(email) {
//   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   console.log(emailPattern.test(email));

// }

// let str = "test@test.test";
// validateEmail(str);

// console.log('Task 5');

// function countWords(text) {
//   let wordPattern = /\b\w+\b/g;
//   let words = text.match(wordPattern);
//   let frequency = {};
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (frequency[word]) {
//       frequency[word]++;
//     } else {
//       frequency[word] = 1;
//     }
//   }

//   console.log(frequency);
// }

// countWords("cat dog man woman cat dog");

// console.log("Task 6");

// function getCurrentTime() {
//   const now = new Date();

//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");

//   const days = [
//     "неділя",
//     "понеділок",
//     "вівторок",
//     "середа",
//     "четвер",
//     "п'ятниця",
//     "субота",
//   ];
//   const dayOfWeek = days[now.getDay()];
//   const date = now.getDate().toString().padStart(2, "0");
//   const months = [
//     "січня",
//     "лютого",
//     "березня",
//     "квітня",
//     "травня",
//     "червня",
//     "липня",
//     "серпня",
//     "вересня",
//     "жовтня",
//     "листопада",
//     "грудня",
//   ];
//   let month = months[now.getMonth()];
//   let year = now.getFullYear();

//   let formattedTime = `${hours}:${minutes}:${seconds}, ${dayOfWeek}, ${date} ${month} ${year} року`;

//   console.log(formattedTime);
// }

// getCurrentTime();

// console.log('Task 7');

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 101);
// }

// function playGuessNumberGame() {
//   const randomNumber = generateRandomNumber();
//   let numberOfAttempts = 0;
//   let guess;

//   do {
//     guess = prompt("Введіть число в діапазоні від 0 до 100:");

//     if (guess === null) {
//       return;
//     }

//     guess = parseInt(guess);

//     if (isNaN(guess) || guess < 0 || guess > 100) {
//       alert("Будь ласка, введіть коректне число в діапазоні від 0 до 100.");
//     } else {
//       numberOfAttempts++;

//       if (guess === randomNumber) {
//         alert(`Ви вгадали число ${randomNumber} за ${numberOfAttempts} спроб.`);
//         const playAgain = confirm("Хочете зіграти ще раз?");
//         if (playAgain) {
//           playGuessNumberGame();
//         }
//       } else {
//         const difference = Math.abs(randomNumber - guess);
//         let message;

//         if (difference >= 50) {
//           message = "Дуже холодно";
//         } else if (difference >= 30) {
//           message = "Холодно";
//         } else if (difference >= 20) {
//           message = "Тепло";
//         } else if (difference >= 10) {
//           message = "Гаряче";
//         } else {
//           message = "Дуже гаряче";
//         }

//         console.log(
//           `${new Date().toLocaleString()} Спроба ${numberOfAttempts}: число ${guess} – ${message}`
//         );
//       }
//     }
//   } while (guess !== randomNumber);
// }
// playGuessNumberGame()
