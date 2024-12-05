// try {
//   let n = 2;
//   if (n !== 1) {
//     throw new Error('такого тега не существует');
//   }
//   // document.querySelector('.kek').innerHTML = ' lol';
// } catch (error) {
//   console.log('kek');
//   console.log(error);
// }

// let json = "{ некорректный JSON }";

// try {

//   let user = JSON.parse(json); // <-- тут возникает ошибка...
//   console.log( user.name ); // не сработает

// } catch (e) {
//   // ...выполнение прыгает сюда
//   console.log( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
//   console.log( e.name );
//   console.log( e.message );
// }

// let json = '{ "age": 30 }'; // данные неполны
// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError('Данные неполны: нет имени');
//   }

//   blabla(); // неожиданная ошибка

//   console.log(user.name);
// } catch (e) {
//   if (e.name == 'SyntaxError') {
//     console.log('JSON Error: ' + e.message);
//   } else {
//     throw e; // проброс (*)
//   }
// }

// "Псевдокод" встроенного класса Error, определённого самим JavaScript
// class Error {
//   constructor(options) {
//     this.message = options.message;
//     this.name = options.name; // (разные имена для разных встроенных классов ошибок)
//     this.stack = options.stack; // нестандартное свойство, но обычно поддерживается
//   }
// }


// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// // "функция-генератор" создаёт объект "генератор"
// let generator = generateSequence();
// console.log(generator);