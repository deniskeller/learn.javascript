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
