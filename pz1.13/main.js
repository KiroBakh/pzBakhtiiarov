console.log("Task 1");

let language = "";

while (language !== "ua" && language !== "en") {
  language = prompt("Choose the language 'ua' or 'en'?", "").toLowerCase();

  if (language !== "ua" && language !== "en") {
    alert("Incorrect data entry. Please try again.");
  }
}

let dayNumber = "";

if (language === "ua") {
  while (dayNumber < 1 || dayNumber > 7) {
    dayNumber = prompt("Введіть номер недільного дня від 1 до 7?", "");

    if (dayNumber < 1 || dayNumber > 7) {
      alert("Невірне значення. Будь ласка, спробуйте ще раз.");
    }
  }

  switch (dayNumber) {
    case "1":
      alert("Понеділок");
      break;
    case "2":
      alert("Вівторок");
      break;
    case "3":
      alert("Середа");
      break;
    case "4":
      alert("Четвер");
      break;
    case "5":
      alert("П'ятниця");
      break;
    case "6":
      alert("Субота");
      break;
    case "7":
      alert("Неділя");
      break;
  }
} else {
  while (dayNumber < 1 || dayNumber > 7) {
    dayNumber = prompt("Enter the day number of the week (from 1 to 7)?", "");

    if (dayNumber < 1 || dayNumber > 7) {
      alert("Incorrect data input. Please try again.");
    }
  }

  switch (dayNumber) {
    case "1":
      alert("Monday");
      break;
    case "2":
      alert("Tuesday");
      break;
    case "3":
      alert("Wednesday");
      break;
    case "4":
      alert("Thursday");
      break;
    case "5":
      alert("Friday");
      break;
    case "6":
      alert("Saturday");
      break;
    case "7":
      alert("Sunday");
      break;
  }
}
