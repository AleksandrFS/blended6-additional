// 1. Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

// const officialName = prompt("Яка офіційна назва JavaScript?");
// if (officialName === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// 2.  Напишіть цикл, який виводить у консоль числа від max до min за спаданням
//  Виведіть у консоль  усіх парних чисел від min до max

// const max = 50
// const min = 23

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
// }

// 3. За допомогою циклу for додайте всі парні числа від min до max

// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         total += i;
//   }
// }
//   console.log(total);

// Напишіть код, який запитуватиме
// Логін за допомогою prompt і логувати результат
// В консоль браузера

// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасованпо"
//  Інакше вивести рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний", то вивести рядок "Здрастуйте!"
// інакше виводити рядок "Невірний пароль!"

// const login = prompt("Введите логин:");
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt("Введіть пароль");
//   if (password) {
//     if (password === "Я головний") {
//       console.log("Здрастуйте!");
//     } else {
//       console.log("Невірний пароль!");
//     }
//   } else {
//     console.log("Скасованпо");
//   }
// } else {
//   console.log("Я вас не знаю");
// }

// 5. При завантаженні сторінки користувачеві пропонується
// В prompt ввести число. Введення додається до значення
// Змінної total.
// Операція введення числа триває до того часу,
// Поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши накнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число, а не довільний набір символів не потрібно.

// let number = prompt("Введіть число");
// let total = 0;
// let check = false;
// do {
//   if (number) {
//     number = prompt("Введіть число");
//       total += Number(number);
//       check = true;
//   } else {
//       check = false;
//       console.log(`Загальна сума введених чисел дорівнює ${total}.`);
//     }
// } while (check);

// while (number < 100) {
//     number = prompt("Введіть число");
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// 7.  У змінній min лежить число від 0 до 59.
//  Визначте, в яку чверть години потрапляє це число(у першу, другу, третю чи четверту).

// const min = 16;

// if (min <= 15) {
//     console.log("першу четверть");
// } else if (min > 15 && min <= 30) {
//     console.log("другу четверть");
// } else if (min > 30 && min <= 45) {
//     console.log("третю четверть");
// } else {
//     console.log("четверту четверть");
// }

// Напишіть через свіч пошуку автора мови програмування
//  пишемо назву мови у шаблонному рядку отримує відповідь мова та автор
//  PHP Расмус Лердорф
//  C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
//  Swift Кріс Латтнер
//  JS Брендан Ейх
//  Java Джеймс Гослінг
//  Python Гвідо ван Россум
// const message = prompt('Введіть мову програмування');

// switch (message) {
//     case "PHP":
//         console.log(`${message} Расмус Лердорф`);
//     case "JS":
//         console.log(`${message} Брендан Ейх`);
//         break;
//     case "Java":
//         console.log(`${message} Джеймс Гослінг`);
//         break;
//     case "Python":
//         console.log(`${message} Гвідо ван Россум`);
//         break;
//     default: console.log("Такої мови немає!")
// }    break;
//     case "C#":
//         console.log(`${message} група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота`);
//         break;
//     case "Swift":
//         console.log(`${message} Кріс Латтнер`);
//         break;

// 10. НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const usersName = prompt("введіть ім'я")
// const age = prompt("введіть вік")
// const hobby = prompt("введіть хобі")
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${usersName}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`
// console.log(message);

// 11.ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ , ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ.\

// const phone = Number(prompt("price"));
// const laptop = Number(prompt("price"));
// const mause = Number(prompt("price"));
// const totalprice = phone+laptop+mause;
// console.log(totalprice);

// 12.Дано рядок, що складається із символів, наприклад, 'abcde'.
//  Перевірте, що першим символом цього рядка є буква 'a'.
//  Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const word = 'abcde'
// if (word[0] === 'a'){console.log("так") }
// else {console.log("ні")};

// // НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ
// (ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// // ЯКЩО ДЕНЬ - ціна 1.99
// // ЯУЩО НЕДІЛЯ - ціна 5.99
// // ЯКЩО МІСЯЦЬ - ціна 10.99
// // ЯКЩО РІК - ціна 100.99

// const subscribe = prompt("Яка підписка?").toLowerCase();
// switch (subscribe) {
//   case "день":
//     console.log("ціна 1.99");
//     break;

//   case "неділя":
//     console.log("ціна 5.99");
//     break;
//   case "місяць":
//     console.log("ціна 10.99");
//     break;

//   case "рік":
//     console.log("ціна 100.99");
//     break;

//     default:
//         console.log("Немає підписки");
// }

// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" ,
//  ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// const userName = prompt("write name");
// if (userName.length > 7){
//    alert("Wow, you  have a REALLY long name!");
// } else {
//     alert("Your name isn't very long");
// }