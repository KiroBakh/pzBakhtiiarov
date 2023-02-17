console.log("Task 1");

// function seconds(total) {
//   console.log(total / 60);
// }

// seconds(25)

console.log("Task 2");

// function perimeter(side, count) {
//     console.log(side * count);
// }

// perimeter(5, 28)

console.log("Task 3");

// function xz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0) {
//       console.log("fizz ");
//     } else if (i % 5 == 0) {
//       console.log("buzz ");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       console.log("fizzbuzz");
//     }else{
//         console.log(i)
//     }
//   }
// }

// xz(15)

console.log("Task 4");

// function calculate(a,b,c){
//     console.log((a*b*c)/3);
// }
// calculate(5,8,3)

console.log("Task 5");

// function isDivisible(n, x, y) {
//If/else if
//   if (n / x === 0 && n / y === 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }

//Ternar
//   n / x === 0 && n / y === 0 ? "Yes" : "No";

//Without
//   return n % x === 0 && n % y === 0;
// }

console.log("Task 6");

// const N = 10;
// const arr = Array.from({ length: N }, () => Math.floor(Math.random() * 10));

// const largest = Math.max(...arr);
// console.log("Largest value:", largest);

// const smallest = Math.min(...arr);
// console.log("Smallest value:", smallest);

// const totalSum = arr.reduce((a, b) => a + b, 0);
// console.log("Total sum of elements:", totalSum);

// const mean = totalSum / arr.length;
// console.log("Arithmetic mean of all elements:", mean);

// const oddValues = arr.filter((x) => x % 2 !== 0);
// console.log("Odd values:", oddValues);

console.log("Task 7");

// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 5; j++) {
//     arr[i][j] = Math.floor(Math.random() * 100);
//   }
// }
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (i === j) {
//       if (arr[i][j] < 0) {
//         arr[i][j] = 0;
//       } else {
//         arr[i][j] = 1;
//       }
//     }
//   }
// }

// console.log(arr);

console.log("Task 8");

// function add(a, b) {
//     alert(a + b);
// }
// function sub(a, b) {
//     alert(a - b);
// }
// function mul(a, b) {
//     alert(a * b);
// }
// function div(a, b) {
//   if (a === 0 || b === 0) {
//     alert("На ноль нельзя делить");
//   }
//   alert(a / b);
// }
// let a = parseInt(prompt("Enter a: "));
// let b = parseInt(prompt("Enter b: "));
// let choose = parseInt(prompt("If you want use the |add| press 1, for |sub| press 2, for |mul| press 3, for |div| press 4"));
//     if(choose < 0 || choose > 4){
//         alert('Not correct')
//     }

// switch (choose) {
//   case 1:
//     add(a, b);
//     break;
//   case 2:
//     sub(a, b);
//     break;
//   case 3:
//     mul(a, b);
//     break;
//   case 4:
//     div(a, b);
//     break;
//   default:
//     console.log("Not correctly");
// }

console.log("Task 9");

// function checkNumber(num) {
//   if (num >= 0) {
//     console.log(`The number ${num} is positive.`);
//   } else {
//     console.log(`The number ${num} is negative.`);
//   }

//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`The number ${num} is prime.`);
//   } else {
//     console.log(`The number ${num} is not prime.`);
//   }
//   if (num % 2 === 0) {
//     console.log(`The number ${num} is divisible by 2.`);
//   }else{
//     console.log(`The number ${num} is not divisible by 2.`);
//   }
//   if (num % 5 === 0) {
//     console.log(`The number ${num} is divisible by 5.`);
//   }else{
//     console.log(`The number ${num} is divisible not by 5.`);
//   }
//   if (num % 3 === 0) {
//     console.log(`The number ${num} is divisible by 3.`);
//   }else{
//     console.log(`The number ${num} is not divisible by 3.`);
//   }
//   if (num % 6 === 0) {
//     console.log(`The number ${num} is divisible by 6.`);
//   }else{
//     console.log(`The number ${num} is not divisible by 6.`);
//   }
//   if (num % 9 === 0) {
//     console.log(`The number ${num} is divisible by 9.`);
//   }else{
//     console.log(`The number ${num} is not divisible by 9.`);
//   }
// }

// checkNumber(46)

console.log("Task 10");

// function invertArray(arr) {
//   let invertedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       invertedArr.push(arr[i] * arr[i]);
//     } else {
//       invertedArr.push(arr[i]);
//     }
//   }

//   console.log(invertedArr);
// }

// let arr = [3, 2, 6, 3, 42, 6, 4, 2, 5];
// invertArray(arr);

console.log("Task 11");

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
}
let arr = [1,342,1,24,1,42,25,34,2,2,525]
removeDuplicates(arr)
