console.log("Task 1");
// let i = 0;

// while (i <= 100){
//     console.log(`${i}\r`);
//     i++
// }

console.log("Task 2");

// let i = 0;
// do {
//   if (i == 0) {
//     console.log("0 - це нуль");
//     i++
//   }
//   if (i % 2 == 0) {
//     console.log(`${i} - парне число`);
//   } else {
//     console.log(`${i} - непарне число`);
//   }

//   i++;
// } while (i <= 10);

console.log("Task 3");
// for(let i = 0; i<9; i++, console.log(i)){}

console.log("Task 4");

//Triange /
// let lines = prompt("Enter size: ");
let lines = 7;
let str = " ";
let star = "*";
for (let i = 0; i < lines; i++) {
  str += star;
  console.log(str);
}

//Triangle
var i = 0;

var max = 7;
var space = "",
  starr = "";

while (i < max) {
  space = "";
  starr = "";
  for (let j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) starr += "*";
  console.log(space + starr);
  i++;
}

//Romb∆
let size = 7,
  board = "",
  out = "";

for (let s = 0; s < size / 2 - 1; s++) {
  out += " ";
}

for (let i = 0; i < size / 2; i++) {
  board += "* ";
  console.log(out, board);
  out = out.substring(0, out.length - 1);
}

for (let j = size / 2; j > 0; j--) {
  out += " ";
  board = board.substring(0, board.length - 2);
  console.log(out, board);
}

console.log("Task 5");

// let numb = 10000
// let counter = 0
// let result = 0
// for(let i = 50; i < numb; numb/=2){
//     result = i
//       counter++;
// }
// console.log(`counter - ${counter}\nresult- ${result}`)

console.log("Task 6");

// let month = prompt("Enter a month: ");

// if(month == 12 || month == 1 || month == 2){

//   alert('This is Winter');

//   if(month == 12) alert('This is December')
//   else if(month == 1) alert('This is January')
//   else if(month == 2) alert('This is February')

// }else if(month == 3 || month == 4 || month == 5){

//   alert('This is Spring');

//   if(month == 3) alert('This is March')
//   else if(month == 4) alert('This is April')
//   else if(month == 5) alert('This is May')

// }else if(month == 6 || month == 7 || month == 8){
//   alert('This is Summer');
//   if(month == 6) alert('This is June')
//   else if(month == 7) alert('This is July')
//   else if(month == 8) alert('This is August')
// }else if(month == 9 || month == 10 || month == 11){
//   alert('This is Autumn');
//   if(month == 9) alert('This is September')
//   else if(month == 10) alert('This is October')
//   else if(month == 11) alert('This is November')
// }else{
//   alert('Not correct enter');
// }

console.log("Task 7");

// let celsi = prompt("Enter celsi: ");
// let far = (9/5) * celsi + 32;
// alert(`Температура за Фаренгейтом: ${far}`)

console.log("Task 8");

let day = parseInt(prompt("Please enter a day"));

switch (day) {
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  case 7:
    alert("Sunday");
    break;
  default:
    alert("Invalid enter");
}
