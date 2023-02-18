console.log('Task 1');

let language = "";

while (language !== "ua" && language !== "en") {
  language = window.prompt("Choose the language 'ua' or 'en'?", "").toLowerCase();

  if (language !== "ua" && language !== "en") {
    window.alert("Incorrect data entry. Please try again.");
  }
}

let dayNumber = "";

if (language === "ua") {
  while (dayNumber < 1 || dayNumber > 7) {
    dayNumber = window.prompt("Введіть номер недільного дня від 1 до 7?", "");

    if (dayNumber < 1 || dayNumber > 7) {
      window.alert("Невірне значення. Будь ласка, спробуйте ще раз.");
    }
  }

  switch (dayNumber) {
    case "1":
      window.alert("Неділя");
      break;
    case "2":
      window.alert("Понеділок");
      break;
    case "3":
      window.alert("Вівторок");
      break;
    case "4":
      window.alert("Середа");
      break;
    case "5":
      window.alert("Четвер");
      break;
    case "6":
      window.alert("П'ятниця");
      break;
    case "7":
      window.alert("Субота");
      break;
  }
} else {
  while (dayNumber < 1 || dayNumber > 7) {
    dayNumber = window.prompt("Enter the day number of the week (from 1 to 7)?", "");

    if (dayNumber < 1 || dayNumber > 7) {
      window.alert("Incorrect data input. Please try again.");
    }
  }

  switch (dayNumber) {
    case "1":
      window.alert("Sunday");
      break;
    case "2":
      window.alert("Monday");
      break;
    case "3":
      window.alert("Tuesday");
      break;
    case "4":
      window.alert("Wednesday");
      break;
    case "5":
      window.alert("Thursday");
      break;
    case "6":
      window.alert("Friday");
      break;
    case "7":
      window.alert("Saturday");
      break;
  }
}
