// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return age > 18 || confirm('Родители разрешили?');
// }

// function min(a, b) {
//   if (a < b) return a;
//   return b;
// }

// console.log('min(2, 5);: ', min(2, 5));
// console.log('min(3, -1): ', min(3, -1));
// console.log('min(1, 1): ', min(1, 1));
// function pow(x, n) {
//   return x ** n;
// }

// console.log('pow(3, 2): ', pow(3, 2));
// console.log('pow(3, 3): ', pow(3, 3));
// console.log('pow(1, 100): ', pow(1, 100));
// let x = prompt('Введите x:', '');
// let n = prompt('Введите n:', '');

// if (n >= 1 && n % 1 == 0) {
//   console.log(pow(x, n));
// } else {
//   console.log(`Число ${n} не натуральное число. Введите другое`);
// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.')
// );
