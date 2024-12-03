// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Не удалось загрузить скрипт ${src}`));

//   document.head.append(script);
// }

// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
//   (error, script) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(`Здорово, скрипт ${script.src} загрузился`);
//       console.log(_); // функция, объявленная в загруженном скрипте
//     }
//   }
// );

// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', () => resolve(div));
//     }, 0);
//   });
// }

// document
//   .getElementById('showCircleButton')
//   .addEventListener('click', startAnimated);

// function startAnimated() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }

// async function showAvatar() {
//   // запрашиваем JSON с данными пользователя
//   // let response = await fetch('/article/promise-chaining/user.json');
//   // let user = await response.json();
// 	// console.log('user: ', user);

//   // запрашиваем информацию об этом пользователе из github
//   let githubResponse = await fetch(`https://api.github.com/users/deniskeller`);
//   let githubUser = await githubResponse.json();

//   // отображаем аватар пользователя
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);

//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// async function loadJson(url) {
//   const response = await fetch(url);
// 	// console.log('response: ', response);

//   if (response.status == 200) {
//     return await response.json();
//   } else {
//     throw new Error(response.status);
//   }
// }

// loadJson('https://api.github.com/users/deniskeller11') // (3)
//   .catch(console.log); // Error: 404

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function demoGithubUser() {
//   let user;

//   while (true) {
//     let name = prompt('Введите логин?', 'iliakan');

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
// 			console.log('user: ', user);

//       console.log(`Полное имя: ${user.name}.`);
//       break;
//     } catch (err) {
// 			console.log('err: ', err);
//       if (err instanceof HttpError && err.response.status == 404) {
//         console.log(
//           'Такого пользователя не существует, пожалуйста, повторите ввод.'
//         );
//       } else {
//         throw err;
//       }
//     }
//   }

//   return user;
// }

// demoGithubUser();

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then((response) => console.log(response));
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }
// f()

// async function getSomething() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Privet!');
//     }, 3000);
//   });
// }

// // getSomething().then((something) => {
// //   console.log('something: ', something);
// // });


// const some = await getSomething()
// console.log('some: ', some);