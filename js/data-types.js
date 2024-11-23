// ----------------------------------------------------- ЧИСЛА -------------------------------------------------------------------

// let sum = 0;

// function calcSum() {
//   let a = +prompt('Введите 1-е число:', 0);
//   let b = +prompt('Введите 2-е число:', 0);
//   return a + b;
// }
// sum = calcSum();
// console.log(sum);

// function readNumber() {
//   let value = prompt('Введите число:', 0);
//   if (value !== null || value !== undefined) {
//     if (isFinite(value)) {
//       return value;
//     }
//     return null;
//   }
// }

// console.log('readNumber(): ', readNumber());

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log('random(min, max): ', random(1, 5));
// console.log('random(min, max): ', random(1, 5));
// console.log('random(min, max): ', random(1, 5));

// ------------------------------------------------------ СТРОКИ -------------------------------------------------------------------

// function ucFirst(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   console.log('newStr: ', newStr);
//   return newStr;
// }

// console.log(ucFirst('вася') == 'Вася');

// function checkSpam(str) {
//   let newStr = str.toLowerCase();
//   if (newStr.includes('viagra') || newStr.includes('XXX')) return true;
//   return false;
// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + '…';
//   }
//   return str;
// }

// console.log(
//   'Вот, что мне хотело…',
//   truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)
// );

// console.log('Всем привет!', truncate('Всем привет!', 20));

// function extractCurrencyValue(str) {
//   return Number(str.slice(1));
// }

// console.log(extractCurrencyValue('$120') === 120);

// ---------------------------------------------------------- МАССИВЫ -------------------------------------------

// const styles = ['Джаз', 'Блюз']; // 1
// console.log('styles: ', styles);

// styles.push('Рок-н-ролл'); // 2
// console.log('styles: ', styles);

// const stylesMid = Math.round((styles.length - 1) / 2);
// styles[stylesMid] = 'Классика'; // 3
// console.log('styles: ', styles);

// styles.shift(0); // 4
// console.log('styles: ', styles);

// styles.unshift('Рэп', 'Регги'); // 5
// console.log('styles: ', styles);

// function sumInput() {
//   let arr = [];
//   let sum = 0;

//   while (true) {
//     let value = prompt('Введите число:', '');

//     if (
//       value === null ||
//       value === undefined ||
//       value === '' ||
//       !isFinite(value)
//     )
//       break;

//     arr.push(+value);
//     console.log('arr: ', arr);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log('sum: ', sum);
//   return sum;
// }

// console.log(sumInput());

// function getMaxSubSum(arr) {
//   let newArr = [];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newArr.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < newArr.length; i++) {
//     sum += newArr[i];
//   }
// 	return sum
// }

// console.log('5', getMaxSubSum([-1, 2, 3, -9]));
// console.log('6', getMaxSubSum([2, -1, 2, 3, -9]));
// console.log('11', getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log('3', getMaxSubSum([-2, -1, 1, 2]));
// console.log('100', getMaxSubSum([100, -9, 2, -3, 5]));
// console.log('6', getMaxSubSum([1, 2, 3]));

// function camelize(str) {
//   const arr = str.split('-');
//   // console.log('arr: ', arr);

//   const newArr = arr.map((item, index) => {
//     if (index == 0 || (index == arr.length - 1 && item == '')) return item;

//     return item[0].toUpperCase() + item.slice(1);
//   });
//   // console.log('newArr: ', newArr);

//   return newArr.join("");
// }

// console.log('backgroundColor', camelize('background-color'));
// console.log('listStyleImage', camelize('list-style-image'));
// console.log('WebkitTransition', camelize('-webkit-transition'));
// console.log('backgroundColor', camelize('background-color-'));

// function filterRange(arr, a, b) {
//   let newArr = [];

//   arr.filter((item) => {
//     if (item >= a && item <= b) {
//       newArr.push(item);
//     }
//   });
//   console.log('newArr: ', newArr);
//   return newArr;
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (совпадающие значения)
// console.log(arr); // 5,3,8,1 (без изменений)

// function filterRangeInPlace(arr, a, b) {
//   // arr.forEach((item, index) => {
//   //   if (item < a || item > b) {
//   //     arr.splice(index, 1);
//   //     arr.forEach((item, index) => {
//   //       if (item < a || item > b) {
//   //         arr.splice(index, 1);
//   //       }
//   //     });
//   //   }
//   // });

//   arr.forEach((item, index) => {
//     if (item < a || item > b) {
//       arr.splice(index, 1);
//       filterRangeInPlace(arr, a, b);
//     }
//   });
// }

// let arr = [-2, 0, 1, 3, 5, 8];
// // let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log(arr); // [3, 1]

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ['HTML', 'JavaScript', 'CSS'];

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);
// console.log(names);

// let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => {
//   let newItem = {
//     id: item.id,
//     fullName: item.name + ' ' + item.surname,
//   };
//   return newItem;
// });

// console.log('usersMapped: ', usersMapped);

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Вася Пупкин

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(arr) {
//   let averageAge = 0;
//   arr.forEach((item) => {
//     averageAge += item.age;
//   });
//   console.log('averageAge: ', averageAge);

//   return averageAge / arr.length;

// 	// return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//   let unigArr = [];
//   arr.forEach((item) => {
//     if (!unigArr.includes(item)) {
//       unigArr.push(item);
//     }
//   });
//   console.log('unigArr: ', unigArr);
//   return unigArr;
// }

// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];

// console.log(unique(strings)); // кришна, харе, :-O

// let users = [
//   { id: 'john', name: 'John Smith', age: 20 },
//   { id: 'ann', name: 'Ann Smith', age: 24 },
//   { id: 'pete', name: 'Pete Peterson', age: 31 },
// ];

// function groupById(arr) {
//   // let obj = {};

//   // arr.forEach((user) => {
//   //   obj[user.id] = user;
//   // });
//   // console.log('obj: ', obj);

//   // return obj;

//   return arr.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }

// let usersById = groupById(users);
// console.log('usersById: ', usersById);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// function Calculator() {
//   this.method = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   };

//   this.calculate = function (str) {
//     let arr = str.split(' ');
//     // console.log('arr: ', arr);
//     let a = +arr[0];
//     // console.log('a: ', a);
//     let b = +arr[2];
//     // console.log('b: ', b);
//     let operator = arr[1];
//     // console.log('operator: ', operator);

//     if (!isFinite(a) || !isFinite(b)) {
//       console.log('Значение/я не являются числами');
//     }

//     if (!this.method[operator]) {
//       console.log(`Оператор "${operator}" не поддерживается`);
//     }

//     return this.method[operator](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.method[name] = func;
//   };
// }

// let calc = new Calculator();
// console.log(calc.calculate('3 + 7')); // 10

// let powerCalc = new Calculator();
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);
// console.log('powerCalc: ', powerCalc);

// let result = powerCalc.calculate('2 ** 5');
// console.log(result); // 8
// console.log(powerCalc.calculate('2 * 5'));
// console.log(powerCalc.calculate('8 / 4'));

// ------------------------------------------------- Map \ Set -------------------------------------------------------

// function unique(arr) {
//   let set = new Set(arr);
//   return [...set.values()];
// }

// let values = [
//   'Hare',
//   'Krishna',
//   'Hare',
//   'Krishna',
//   'Krishna',
//   'Krishna',
//   'Hare',
//   'Hare',
//   ':-O',
// ];

// console.log(unique(values)); // Hare,Krishna,:-O

// let map = new Map();

// map.set('name', 'John');

// let keys = Array.from(map.keys());
// console.log('keys: ', keys);

// keys.push('more');
// console.log('keys: ', keys);
