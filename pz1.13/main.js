// console.log("Task 1");

// let language = "";

// while (language !== "ua" && language !== "en") {
//   language = prompt("Choose the language 'ua' or 'en'?", "").toLowerCase();

//   if (language !== "ua" && language !== "en") {
//     alert("Incorrect data entry. Please try again.");
//   }
// }

// let dayNumber = "";

// if (language === "ua") {
//   while (dayNumber < 1 || dayNumber > 7) {
//     dayNumber = prompt("Введіть номер недільного дня від 1 до 7?", "");

//     if (dayNumber < 1 || dayNumber > 7) {
//       alert("Невірне значення. Будь ласка, спробуйте ще раз.");
//     }
//   }

//   switch (dayNumber) {
//     case "1":
//       alert("Понеділок");
//       break;
//     case "2":
//       alert("Вівторок");
//       break;
//     case "3":
//       alert("Середа");
//       break;
//     case "4":
//       alert("Четвер");
//       break;
//     case "5":
//       alert("П'ятниця");
//       break;
//     case "6":
//       alert("Субота");
//       break;
//     case "7":
//       alert("Неділя");
//       break;
//   }
// } else {
//   while (dayNumber < 1 || dayNumber > 7) {
//     dayNumber = prompt("Enter the day number of the week (from 1 to 7)?", "");

//     if (dayNumber < 1 || dayNumber > 7) {
//       alert("Incorrect data input. Please try again.");
//     }
//   }

//   switch (dayNumber) {
//     case "1":
//       alert("Monday");
//       break;
//     case "2":
//       alert("Tuesday");
//       break;
//     case "3":
//       alert("Wednesday");
//       break;
//     case "4":
//       alert("Thursday");
//       break;
//     case "5":
//       alert("Friday");
//       break;
//     case "6":
//       alert("Saturday");
//       break;
//     case "7":
//       alert("Sunday");
//       break;
//   }
// }

// console.log("Task 2");

// function ChessBoard(length, width) {
//   this.length = length;
//   this.width = width;

//   this.drawBoard = function () {
//     let board = "";

//     for (let i = this.length - 1; i >= 0; i--) {
//       board += i + 1 + " ";
//       for (let j = 0; j < this.width; j++) {
//         if ((i + j) % 2 === 0) {
//           board += "#";
//         } else {
//           board += "@";
//         }
//         board += " ";
//       }
//       board += "<br>";
//     }

//     board += "&nbsp&nbsp";
//     for (let i = 0; i < this.width; i++) {
//       board += String.fromCharCode(65 + i) + "&nbsp";
//     }
//     board += "";

//     document.write(board);
//   };
// }

// const board1 = new ChessBoard(8, 8);
// board1.drawBoard();

console.log("Task 3");
class Random {
  static nextDouble(low, high) {
    return Math.random() * (high - low) + low;
  }
  static nextInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }
  static nextElement(array) {
    return array[Random.nextInt(0, array.length)];
  }
}

const arr = ['apple', 'banana', 'orange']
console.log(Random.nextDouble(53, 234));
console.log(Random.nextInt(53, 234));
console.log(Random.nextElement(arr));
