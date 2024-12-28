// ------------------------------------------------------- Загрузка ресурсов: onload и onerror ---------------------------------------------------
// ------ Загрузите изображения с колбэком
// ---------- тест ----------

// let sources = [
//   'https://en.js.cx/images-load/1.jpg',
//   'https://en.js.cx/images-load/2.jpg',
//   'https://en.js.cx/images-load/3.jpg',
// ];
// console.log('sources: ', sources);

// // добавляем случайные символы к ссылкам, чтобы избежать кеширования
// for (let i = 0; i < sources.length; i++) {
//   sources[i] += '?' + Math.random();
// }

// // для каждого изображения
// // создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
// function testLoaded() {
//   let widthSum = 0;
//   for (let i = 0; i < sources.length; i++) {
//     let img = document.createElement('img');
//     img.src = sources[i];
//     widthSum += img.width;
//   }
//   console.log(widthSum);
// }

// // каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
// preloadImages(sources, testLoaded);

// console.log('sources: ', sources);

// function preloadImages(sources, callback) {
//   let counter = 0;

//   sources.forEach((item) => {
//     let img = document.createElement('img');
//     img.src = item;

//     img.onload = function () {
//       counter++;
//       console.log('counter: ', counter);
//       if (counter == sources.length) callback();
//     };

//     img.onerror = function () {
//       counter++;
//       console.log('counter: ', counter);
//       if (counter == sources.length) callback();
//     };
//   });
// }
