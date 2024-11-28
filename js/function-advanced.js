// -------------------------------------------------------- recursion ------------------------------------------------------------
// let company = {
//   // тот же самый объект, сжатый для краткости
//   sales: [
//     { name: 'John', salary: 1000 },
//     { name: 'Alice', salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: 'Peter', salary: 2000 },
//       { name: 'Alex', salary: 1800 },
//     ],
//     internals: [{ name: 'Jack', salary: 1300 }],
//   },
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
// 	console.log('Array.isArray(department): ', Array.isArray(department));
//   if (Array.isArray(department)) {
//     // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else {
//     // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company));

// Вычислить сумму чисел до данного

// через цикл
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(100));

// Через рекурсию
// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// console.log(sumTo(100));

// function showName() {
//   console.log( arguments.length );
//   console.log( arguments[0] );
//   console.log( arguments[1] );

//   // Объект arguments можно перебирать
//   // for (let arg of arguments) alert(arg);
// }

// // Вывод: 2, Юлий, Цезарь
// showName("Юлий", "Цезарь")

// // Вывод: 1, Илья, undefined (второго аргумента нет)
// showName("Илья");

// function makeCounter() {
//   let count = 0;
//   // count++;
//   // return count;

//   return function () {
//     return count++; // есть доступ к внешней переменной "count"
//   };
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log('sum(1)(2): ', sum(1)(2));
// console.log('sum(5)(-1): ', sum(5)(-1));

// function makeCounter() {
//   let count = 0;

//   const makeCounter = () => count++;

//   makeCounter.set = (value = 0) => count = value;

//   makeCounter.decrease = () => count--;

//   return makeCounter;
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// counter.set(10); // установить новое значение счётчика

// console.log(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// console.log(counter()); // 10 (вместо 11)

// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => console.log('tick'), 1000);

// // остановить вывод через 5 секунд
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log('stop');
// }, 5000);