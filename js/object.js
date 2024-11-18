// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log('user: ', user);
// user.name = 'Pete';
// console.log('user: ', user);
// delete user.name;
// console.log('user: ', user);

// let schedule = {};
// function isEmpty(obj) {
//   for (let key in obj) {
//     if (key) return false;
//   }
//   return true;
// }

// console.log(isEmpty(schedule));
// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;

// function calcSalaries(obj) {
//   for (let key in obj) {
//     sum += obj[key];
//   }
// }

// calcSalaries(salaries);
// console.log('sum: ', sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// console.log('menu: ', menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);
// console.log('menu: ', menu);

// let calculator = {
//   read() {
//     this.a = +prompt('Введите первое значение', '');
//     this.b = +prompt('Введите второе значение', '');
//   },
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// console.log('calculator: ', calculator);

// calculator.read();
// console.log('calculator: ', calculator);

// console.log('calculator.sum(): ', calculator.sum());
// console.log('calculator.mul(): ', calculator.mul());

// console.log('calculator: ', calculator);

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('Введите первое значение', '');
//     this.b = +prompt('Введите второе значение', '');
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
//   console.log('this: ', this);
// }

// let calculator = new Calculator();

// console.log('calculator: ', calculator);

// calculator.read();
// console.log('calculator: ', calculator);

// console.log('Sum=' + calculator.sum());
// console.log('Mul=' + calculator.mul());

// console.log('calculator: ', calculator);

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     let newValue = +prompt('Введите значение', 0);
//     this.value += newValue;
//     return this;
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// console.log('accumulator value', accumulator.value);

// let num = 1.23456;
// console.log(num.toFixed(3));
