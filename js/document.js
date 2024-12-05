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

let table = document.body.firstElementChild;
console.log('table: ', table);

let trList = table.children[0].children;
console.log('trList: ', trList);

Array.from(trList).forEach((tr, index) => {
  console.log('tr: ', tr.children[index]);
  tr.children[index].style.backgroundColor = 'red';
});
