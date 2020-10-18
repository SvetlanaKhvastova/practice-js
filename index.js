// ===================== ADDITIONAL ========================== //
// == task-1 == //
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

// task 1
// let admine;
// let name;
// name = "Джон";
// admine = name;
// alert(admine);

// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// task 2
// const leapYear = "Высокосный год";
// const notLeapYear = "Невысокосный год";
// const invalid = "invalid number";
// let userYear = prompt();
// console.log(userYear);
// if (userYear === null) {
//   alert("Отмена пользователем");
// } else if (userYear == 0 || isNaN(userYear)) {
//   alert(invalid);
// } else if (userYear % 4 === 0 && userYear != 0) {
//   alert(leapYear);
// } else {
//   alert(notLeapYear);
// }

// еще вариант task 2
// if (userYear === null) {
//   alert("Отмена пользователем");
// } else {
//   if (userYear == 0 || isNaN(userYear)) {
//     alert(invalid);
//   } else if (userYear % 4 === 0 && userYear !== 0) {
//     alert(leapYear);
//   } else {
//     alert(notLeapYear);
//   }
// }

// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні) Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

// task 3
// let userInput = prompt("Введи число, друг!");
// let computerInput = Math.floor(Math.random() * (11 - 1) + 1);

// if (userInput === null) {
//   alert("Отменено пользователем");
// } else {
//   // валидация значений, если не Отмена
//   //  проверка на НЕ ЧИСЛО и на НЕ В ДИАПАЗОНЕ ЧИСЕЛ
//   // знак '+' преобразовывает в число
//   if (isNaN(userInput) || userInput < 1 || userInput > 10) {
//     alert("Введи то, что нужно");
//   } else if (+userInput === computerInput) {
//     alert(`Совпало: ${userInput} - ${computerInput}`);
//   } else {
//     alert(`Не совпало: ${userInput} - ${computerInput}`);
//   }
// }

// == task-4 == //
// Написати програму яка буде знаходити суму, різницю, добуток, частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)

// == task-5 == //
// Написати програму яка буде переводити температуру з цельсія в фаренгейти, або навпаки з фаренгейта в цельсії

// == task-6 == //
// Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

// == task-7 == //
// Написати програму де користувач вводить 3 числа, після вводу всіх трьох чисел йому на екрані показується найбільше з них. Додатково перевіряти чи це взагалі числа

// == task-8 == //
// Написати програму яка переведе введену оцінку студента до болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// == task-9 == //
// Написати програму яка отримає від користувача число (кількість хвилин) і виведе на екран строку в форматі години і хвилини Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1

// == task-10 == //
// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми бачимо результат на екпані хто виграв

// Модуль 2
// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку
// де кожне слово буде починатися з великої літери.

// const capitalize = function (string) {
//   console.log(string);
//   const arrayCap = string.split(" ");
//   console.log(arrayCap);
//   const newArray = [];
//   for (let elem of arrayCap) {
//     console.log(elem);
//     const word = elem[0].toUpperCase() + `${elem.slice(1)}`;
//     console.log(word);
//     newArray.push(word);
//   }
//   console.log(newArray);
//   return (string = newArray.join(" "));
// };

// console.log(capitalize("the quick brown fox")); // 'The Quick Brown Fox '

// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і
// буде вертати кількість голосних літер.aeiouAEIOU -
// рядок з голосними в англ алфавіті

// function countVowels(string = "") {
//   console.log(string);
//   const vowels = "aeiouAEIOU";
//   let total = 0;
//   for (let item of string.toLocaleLowerCase()) {
//     console.log(item);
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   console.log(total);
// }
// countVowels("the quick brown fox"); // 5

// function countVowels(string = "") {
//   console.log(string);
//   const vowels = "123";
//   let total = 0;
//   for (let item of string.toLocaleLowerCase()) {
//     console.log(item);
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   console.log(total);
// }
// countVowels("12312345678");

// // == task-3 == //
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях

// // == task-4 == //
// Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

// // == task-5 == //
// Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини)

// // == task-6 == //
// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex

// // == task-7 == //
// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

// // == task-8 == //
// Написати ф-ю median яка приймає масив і знаходить його медіану
// Медіана – це числове значення, яке ділить відсортований масив чисел на
// більшу і меншу половини.У відсортованому масиві з непарним числом
// елементів медіана – це число в середині масиву.Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву.В цій задачі заданий непустий масив натуральних чисел.Вам потрібно знайти медіану даного масиву.

// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5

// module 3

// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і
// обєкт з цінами товару) Ця ф - я має повернути ціну замовлення
// function toGetPrice() { }
// const toGetPrice = function () { }

// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
// const orderA = { apple: 5, cheese: 1, bread: 3 };
// const orderB = { orange: 10, pork: 2, bread: 1 };

// const toGetPrice = (a, b) => {
//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);
//   let total = 0;

//   for (let key of keysB) {
//     if (keysA.includes(key)) {
//       total += a[key] * b[key];
//     }
//   }
//   return total;
// };

// console.log(toGetPrice(productsPrice, orderA));
// console.log(toGetPrice(productsPrice, orderB));

// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні.
// Якщо обєкт пустий то повернути true інакше false

// const isObjectEmpty = function (obj) {
//   const keys = Object.keys(obj);
//   console.log(keys);
//   console.log(keys.length);
//   if (keys.length === 0) return true;
//   return false;
// };

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ name: "user", age: 21 })); //  false

// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};
const STUFFING = {
  CHEESE: { name: "CHEESE", price: 6.5, cal: 45, time: 2 },
  BEACON: { name: "BEACON", price: 10, cal: 70, time: 6 },
  TOMATO: { name: "TOMATO", price: 12.1, cal: 4, time: 5 },
  CHICKEN: { name: "CHICKEN", price: 9.3, cal: 30, time: 5.1 },
};
const SAUCES = {
  MUSTARD: { name: "MUSTARD", price: 3, cal: 5, time: 1 },
  KETCHUP: { name: "KETCHUP", price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { name: "BOLOGNESE", price: 7.5, cal: 50, time: 3 },
};

// Створити всі методи і перевірити чи вони працюють
const pizza = {
  size: [],
  stuff: [],
  sauces: [],
  isValid: false,

  toShowSize() {
    console.log(this.size);
  },
  toSetSize(value) {
    if (this.size.includes(value)) return console.log("Такая добавка уже есть");
    this.size.push(value);
    console.log(this.size);
  },

  setStaff(value) {
    if (this.stuff.includes(value))
      return console.log("Такая добавка уже есть");
    this.stuff.push(value);
    console.log(this.stuff);
  },
  setSauces(value) {
    if (this.sauces.includes(value))
      return console.log(`${value.name} уже есть`);
    this.sauces.push(value);
    console.log(this.sauces);
  },

  delStaff(value) {
    if (!this.stuff.includes(value)) return console.log("Такой добавки нет");
    for (let i = 0; i < this.stuff.length; i += 1) {
      if (this.stuff[i] === value) {
        this.stuff.splice(i, 1);
        return console.log(this.stuff);
      }
    }
  },

  delSauces(value) {
    if (!this.sauces.includes(value)) return console.log("Такого соуса нет");
    for (let i = 0; i < this.sauces.length; i += 1) {
      if (this.sauces[i] === value) {
        this.sauces.splice(i, 1);
        return console.log(this.sauces);
      }
    }
  },

  getCost(num) {
    let total = 0;
    for (let i = 0; i <= num; i += 1) {
      if (
        this.size[i] === undefined ||
        this.stuff[i] === undefined ||
        this.sauces[i] === undefined
      )
        continue;
      // console.log(this.size[i].price);
      // console.log(this.stuff[i].price);
      // console.log(this.sauces[i].price);
      total += this.size[i].price + this.stuff[i].price + this.sauces[i].price;
    }
    return console.log(total);
  },
  getCallories(num) {
    let total = 0;
    for (let i = 0; i <= num; i += 1) {
      if (
        this.size[i] === undefined ||
        this.stuff[i] === undefined ||
        this.sauces[i] === undefined
      )
        continue;
      total += this.size[i].cal + this.stuff[i].cal + this.sauces[i].cal;
    }
    return console.log(total);
  },

  toShowOrder() {
    console.log(this.size, this.stuff, this.sauces);
  },

  toGetTotalTime(num) {
    let total = 0;
    for (let i = 0; i <= num; i += 1) {
      if (
        this.size[i] === undefined ||
        this.stuff[i] === undefined ||
        this.sauces[i] === undefined
      )
        continue;
      total += this.size[i].time + this.stuff[i].time + this.sauces[i].time;
    }
    return console.log(total);
  },
  toValidateOrder() {},
};
console.log(pizza);
pizza.toSetSize(SIZES.BIG);
pizza.setStaff(STUFFING.CHEESE);
pizza.setStaff(STUFFING.BEACON);
pizza.setStaff(STUFFING.CHEESE);

pizza.setSauces(SAUCES.KETCHUP);
pizza.setSauces(SAUCES.MUSTARD);

pizza.delStaff(STUFFING.CHEESE);
pizza.delStaff(STUFFING.TOMATO);

pizza.delSauces(SAUCES.MUSTARD);

pizza.getCost(4);
pizza.getCallories(4);
pizza.toGetTotalTime(4);

const burger = {
  size: [],
  stuff: [],
  sauces: [],
  isValid: false,
};
// pizza.toSetSize.call(burger, SIZES.SMALL);
// pizza.setStaff.apply(burger, [STUFFING.BEACON]);

function myFunk(callback) {
  callback();
}
myFunk(pizza.toSetSize.bind(burger, SIZES.SMALL));
