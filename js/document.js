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

const ul = document.createElement('ul');
const app = document.querySelector('#app');
app.append(ul);

while (true) {
  let task = prompt('Добавьте задачу', '');
  console.log('task: ', task);
  if (!task || task == null || task == undefined) break;

  const li = document.createElement('li');
  li.innerHTML = task;
  ul.append(li);
}
