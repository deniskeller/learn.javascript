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

function filterRange(arr, a, b) {}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)
console.log(arr); // 5,3,8,1 (без изменений)
