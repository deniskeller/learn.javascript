// let animal = {
//   eats: true
// };

// let rabbit = {
// 	jumps: true
// };

// rabbit.__proto__ = animal;

// console.log('rabbit: ', rabbit.eats);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = { stomach: [], __proto__: hamster };

// let lazy = { stomach: [], __proto__: hamster };

// // Этот хомяк нашёл еду
// speedy.eat('apple');
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// // Rabbit.prototype = {};

// // Rabbit.prototype.eats = false;

// // delete rabbit.eats;

// delete Rabbit.prototype.eats;

// console.log( rabbit.eats ); // true

// let obj = {};
// console.log(obj);


