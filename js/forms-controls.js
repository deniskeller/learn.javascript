// -------------------------------------------------------------------- Формы, элементы управления --------------------------------------------------------------------------

// ------ Свойства и методы формы
{
  /* <select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>
    Блюз
  </option>
</select>; */
}
// const genres = document.querySelector('#genres');
// genres.addEventListener('change', () => console.log('genres: ', genres.value));
// console.log('selected genres value: ', genres.options[genres.selectedIndex].value);
// console.log('selected genres text: ', genres.options[genres.selectedIndex].text);
// const newOption = new Option('Классика', 'classic');
// console.log('newOption: ', newOption);
// genres.append(newOption);
// newOption.selected = true;
// console.log('genres: ', genres.value);

// --------------------------------------------------------------------------- Фокусировка: focus/blur --------------------------------------------------------------------

// ------ Редактируемый div
// .view,
// .edit {
// 	height: 150px;
// 	width: 400px;
// 	font-family: sans-serif;
// 	font-size: 14px;
// 	display: block;
// }
// .view {
// 	/* padding + border = 3px */
// 	padding: 2px;
// 	border: 1px solid black;
// }
// .edit {
// 	/* замена внутреннего отступа рамкой (по-прежнему 3px, и содержимое не смещается) */
// 	border: 3px solid blue;
// 	padding: 0px;
// }
// .edit:focus {
// 	/* удаление обводки фокуса в Safari */
// 	outline: none;
// }
// <ul>
// 	<li>Кликните на div ниже, чтобы отредактировать текст.</li>
// 	<li>Нажатие на Enter или потеря фокуса с ввода сохранят содержимое.</li>
// </ul>
// HTML-код разрешён.
// <div id="view" class="view">Текст</div>
// const view = document.querySelector('#view');
// const textarea = document.createElement('textarea');
// view.addEventListener('click', () => {
//   textarea.classList.add('edit');
//   textarea.value = view.textContent;
//   view.replaceWith(textarea);
//   textarea.focus();
// });
// textarea.addEventListener('keydown', (e) => {
//   if (e.key == 'Enter') {
//     textarea.blur();
//   }
// });
// textarea.addEventListener('blur', () => {
//   view.innerHTML = textarea.value;
//   textarea.replaceWith(view);
// });

// ------ Редактирование TD по клику
const table = document.querySelector('#bagua-table');
let editable = null;

table.addEventListener('click', (e) => {
  // let target = e.target;
  // console.log('target: ', target);
  // проверяем что кликнули на ячейку таблицы
  let target = e.target.closest('td');
  // console.log('target: ', target);

  if (!table.contains(target) || editable) return;

  // сохраняем данные из ячейки
  let dataTd = target.innerHTML;
  // console.log('dataTd: ', dataTd);

  // создаем текстарею
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea-edit');
  textarea.style.width = target.clientWidth + 'px';
  textarea.style.height = target.clientHeight + 'px';
  target.classList.add('td-edit');
  target.innerHTML = '';
  target.append(textarea);
  textarea.value = dataTd;
  textarea.focus();
  editable = true;

  // создаем кнопки
  const saveChangeButton = document.createElement('button');
  saveChangeButton.textContent = 'OK';
  const cancelChangeButton = document.createElement('button');
  cancelChangeButton.textContent = 'CANCEL';
  target.append(saveChangeButton);
  saveChangeButton.style.bottom =
    -saveChangeButton.getBoundingClientRect().height + 'px';
  target.append(cancelChangeButton);
  cancelChangeButton.style.left =
    saveChangeButton.getBoundingClientRect().width + 'px';

  saveChangeButton.addEventListener('click', () => {
    console.log('save');
    target.innerHTML = textarea.value;
    target.classList.remove('td-edit');
    editable = false;
  });
  cancelChangeButton.addEventListener('click', () => {
    console.log('cancel');
    target.innerHTML = dataTd;
    target.classList.remove('td-edit');
    editable = false;
  });
});
