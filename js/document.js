// console.log(document.body.childNodes);
// for (let node of document.body.childNodes) {
//   console.log('for of: ', node); // покажет все узлы из коллекции
// }

// for (let elem of document.body.children) {
//   console.log('children', elem); // DIV, UL, DIV, SCRIPT
// }

// for (let elem of document.body.childNodes) {
//   console.log('childNodes', elem); // DIV, UL, DIV, SCRIPT
// }

// --------------------------------------------------------------------------- Навигация по DOM-элементам ----------------------------------------------------------------------

// let table = document.body.firstElementChild;
// console.log('table: ', table);

// let trList = table.children[0].children;
// console.log('trList: ', trList);

// Array.from(trList).forEach((tr, index) => {
//   console.log('tr: ', tr.children[index]);
//   tr.children[index].style.backgroundColor = 'red';
// });

// ------------------------------------------------------------------ Атрибуты и свойства -----------------------------------------------------------------------

// let widgetName = document.querySelector('[data-widget-name]');
// console.log('widgetName: ', widgetName);
// console.log('widgetName: ', widgetName.getAttribute("data-widget-name"));

// let links = document.querySelectorAll('a');
// // console.log('links: ', links);
// for (let link of links) {
//   // console.log('link: ', link);
//   let href = link.getAttribute('href');
//   // console.log('href: ', href);
//   if (href && href.includes('://') && !href.includes('http://internal.com')) {
//     link.style.color = 'orange';
//   }
// }

// ------------------------------------------------------------ Изменение документа ----------------------------------------------------------

// function clear(elems) {
//   elem.innerHTML = '';
// }

// let elem = document.querySelector('#elem');
// // console.log('elem: ', elem);
// clear(elem);
// console.log('elem: ', elem);

// const ul = document.createElement('ul');
// const app = document.querySelector('#app');
// app.append(ul);

// while (true) {
//   let task = prompt('Добавьте задачу', '');
//   console.log('task: ', task);
//   if (!task || task == null || task == undefined) break;

//   const li = document.createElement('li');
//   li.innerHTML = task;
//   ul.append(li);
// }

// Создайте дерево из объекта
// let data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },

//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// };

// function createTree(container, data) {
//   // console.log('data: ', data);
//   // console.log('container: ', container);

//   let ul = document.createElement('ul');

//   for (let key in data) {
//     let li = document.createElement('li');
//     li.innerHTML = key;

//     if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
//       createTree(li, data[key]);
//     } else {
//       console.log(data[key]);
//     }
//     ul.append(li);
//   }
//   container.append(ul);
// }

// let tree = document.getElementById('tree');

// createTree(tree, data);

// Выведите список потомков в дереве ----------
// const ul = document.querySelector('#ul-tree');
// // console.log('ul: ', ul);

// let listLi = ul.querySelectorAll('li');
// console.log('listLi: ', listLi);

// for (let li of listLi) {
//   console.log('li: ', li.childNodes);
//   let count = 0;

//   count =
//     li.querySelectorAll('li').length > 0
//       ? li.querySelectorAll('li').length
//       : '';

//   li.firstChild.data += count;
// }

// Создайте календарь в виде таблицы ---------
// function createCalendar(elem, year, month) {
//   let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
//   let d = new Date(year, mon);

//   let table =
//     '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

//   // пробелы для первого ряда
//   // с понедельника до первого дня месяца
//   // * * * 1  2  3  4
//   for (let i = 0; i < getDay(d); i++) {
//     table += '<td></td>';
//   }

//   // <td> ячейки календаря с датами
//   while (d.getMonth() == mon) {
//     table += '<td>' + d.getDate() + '</td>';

//     if (getDay(d) % 7 == 6) {
//       // вс, последний день - перевод строки
//       table += '</tr><tr>';
//     }

//     d.setDate(d.getDate() + 1);
//   }

//   // добить таблицу пустыми ячейками, если нужно
//   // 29 30 31 * * * *
//   if (getDay(d) != 0) {
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td></td>';
//     }
//   }

//   // закрыть таблицу
//   table += '</tr></table>';

//   elem.innerHTML = table;
// }

// function getDay(date) {
//   // получить номер дня недели, от 0 (пн) до 6 (вс)
//   let day = date.getDay();
//   if (day == 0) day = 7; // сделать воскресенье (0) последним днем
//   return day - 1;
// }

// createCalendar(calendar, 2024, 12);

// --------------------------------------------------------- Стили и классы -------------------------------------------------------------------

// Создать уведомление -------
// function showNotification({ top = 0, right = 0, className, html }) {
//   const notification = document.createElement('div');
//   notification.classList.add('notification', className);
//   notification.style.top = top + "px";
//   notification.style.right = right + "px";
//   notification.innerHTML = html;
//   const app = document.querySelector('#app')
// 	app.append(notification);
// 	setTimeout(() => {
// 		notification.remove()
// 	}, 1500);
// }

// // test it
// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + i++,
//     className: 'welcome',
//   });
// }, 2000);

// ------------------------------------------------------------------- Размеры и прокрутка элементов ---------------------------------------------------------------------------------
// const example = document.querySelector('#example');
// console.log('example: ', example.offsetParent);
// console.log('example: ', example.offsetWidth);
// console.log('example: ', example.offsetHeight);
// console.log('example: ', example.clientWidth);
// console.log('высота без скрола: ', example.clientHeight);
// console.log('высота со скролом: ', example.scrollHeight);

// console.log('высота со скролом: ', example.scrollTop);
// example.style.height = `${example.scrollHeight}px`;

// ------ Найти размер прокрутки снизу
// function computedScrollToBottom() {
//   let scrollBottom =
//     example.scrollHeight - example.clientHeight - example.scrollTop;
//   console.log('scrollBottom: ', scrollBottom);
// }
// computedScrollToBottom();

// example.addEventListener('scroll', () => computedScrollToBottom());

// ------ Узнать ширину полосы прокрутки
// console.log(example.offsetWidth - example.clientWidth - example.clientLeft - example.clientTop);

// ------ Поместите мяч в центр поля
// const field = document.querySelector('#field');
// console.log('field: ', field);
// const fieldWidth = field.clientWidth;
// const fieldHeight = field.clientHeight;
// console.log('field ширина: ', fieldWidth);
// console.log('field высота: ', fieldHeight);

// const ball = document.querySelector('#ball');
// console.log('ball: ', ball);
// const ballWidth = ball.clientWidth;
// const ballHeight = ball.clientHeight;
// console.log('ball ширина: ', ballWidth);
// console.log('ball высота: ', ballHeight);

// function computedBallPosition() {
//   ball.style.top = fieldHeight / 2 - ballHeight / 2 + 'px';
//   ball.style.left = fieldWidth / 2 - ballWidth / 2 + 'px';
// }
// computedBallPosition();
// window.addEventListener('resize', () => console.log("kek"));

// -------------------------------------------------------------------------- Координаты -----------------------------------------------------------------------------------
// let button = document.getElementById('button');

// function createMessageUnder(elem, html) {
//   // создаём элемент, который будет содержать сообщение
//   let message = document.createElement('div');
//   // для стилей лучше было бы использовать css-класс здесь
//   message.style.cssText = 'position:fixed; color: red';

//   // устанавливаем координаты элементу, не забываем про "px"!
//   let coords = elem.getBoundingClientRect();

//   message.style.left = coords.left + 'px';
//   message.style.top = coords.bottom + 'px';

//   message.innerHTML = html;

//   return message;
// }

// Использование:
// добавим сообщение на страницу на 5 секунд
// let message = createMessageUnder(button, 'Hello, world!');
// document.body.append(message);
// setTimeout(() => message.remove(), 5000);

// // получаем координаты элемента в контексте документа
// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();

//   return {
//     top: box.top + window.scrollY,
//     right: box.right + window.scrollX,
//     bottom: box.bottom + window.scrollY,
//     left: box.left + window.scrollX,
//   };
// }

// function createMessageUnder(elem, html) {
//   let message = document.createElement('div');
//   message.style.cssText = 'position:absolute; color: red';

//   let coords = getCoords(elem);
//   console.log('coords: ', coords);

//   message.style.left = coords.left + 'px';
//   message.style.top = coords.bottom + 'px';

//   message.innerHTML = html;

//   return message;
// }

// ------ Найдите координаты точек относительно окна браузера
document.onclick = function (e) {
  // показывает координаты точки клика
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

const field = document.querySelector('#field');
// console.log('field clientWidth: ', field.clientWidth);
// console.log('field offsetWidth: ', field.offsetWidth);
// находим отступы сверху и снизу
const paddingTopBottom = field.offsetWidth - field.clientWidth;
// console.log('paddingTopBottom: ', paddingTopBottom);
// находим отступы слева и справа
const paddingLeftRight = field.offsetHeight - field.clientHeight;
// console.log('paddingLeftRight: ', paddingLeftRight);

const rect = field.getBoundingClientRect();
console.log('rect: ', rect);

const topLeftExternalCorner = [Math.round(rect.left), Math.round(rect.top)];
console.log('верхний левый, внешний угол: ', topLeftExternalCorner);

const bottomRightExternalCorner = [
  Math.round(rect.right),
  Math.round(rect.bottom),
];
console.log('нижний правый, внешний угол: ', bottomRightExternalCorner);

const topLeftInternalCorner = [
  Math.round(rect.left) + paddingLeftRight / 2,
  Math.round(rect.top) + paddingLeftRight / 2,
];
console.log('верхний левый, внутренний угол: ', topLeftInternalCorner);

const bottomRightInternalCorner = [
  Math.round(rect.right) - paddingTopBottom / 2,
  Math.round(rect.bottom) - paddingTopBottom / 2,
];
console.log('нижний правый, внутренний угол: ', bottomRightInternalCorner);

let answer1 = [rect.left, rect.top];
console.log('answer1: ', answer1);

let answer2 = [rect.right, rect.bottom];
console.log('answer2: ', answer2);

let answer3 = [rect.left + field.clientLeft, rect.top + field.clientTop];
console.log('answer3: ', answer3);

let answer4 = [
  rect.left + field.clientLeft + field.clientWidth,
  rect.top + field.clientTop + field.clientHeight,
];
console.log('answer4: ', answer4);
