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
// th {
// 	text-align: center;
// 	font-weight: bold;
// }
// td {
// 	width: 150px;
// 	white-space: nowrap;
// 	text-align: center;
// 	vertical-align: middle;
// 	padding: 10px;
// }
// .nw {
// 	background-color: #999;
// }
// .n {
// 	background-color: #03f;
// 	color: #fff;
// }
// .ne {
// 	background-color: #ff6;
// }
// .w {
// 	background-color: #ff0;
// }
// .c {
// 	background-color: #60c;
// 	color: #fff;
// }
// .e {
// 	background-color: #09f;
// 	color: #fff;
// }
// .sw {
// 	background-color: #963;
// 	color: #fff;
// }
// .s {
// 	background-color: #f60;
// 	color: #fff;
// }
// .se {
// 	background-color: #0c3;
// 	color: #fff;
// }
// .td-edit {
// 	padding: 0;
// 	position: relative;
// }
// .textarea-edit {
// 	border: none;
// 	margin: 0;
// 	padding: 0;
// 	display: block;
// 	resize: none;
// 	outline: none;
// 	overflow: auto;
// }
// button {
// 	position: absolute;
// 	z-index: 10;
// 	left: 0;
// }
// <table id="bagua-table">
//       <tr>
//         <th colspan="3">
//           Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение
//         </th>
//       </tr>
//       <tr>
//         <td class="nw">
//           <strong>Северо-Запад</strong> <br />Металл <br />Серебро
//           <br />Старейшины
//         </td>
//         <td class="n">
//           <strong>Север</strong> <br />Вода <br />Синий <br />Перемены
//         </td>
//         <td class="ne">
//           <strong>Северо-Восток</strong> <br />Земля <br />Жёлтый
//           <br />Направление
//         </td>
//       </tr>
//       <tr>
//         <td class="w">
//           <strong>Запад</strong> <br />Металл <br />Золото <br />Молодость
//         </td>
//         <td class="c">
//           <strong>Центр</strong> <br />Всё <br />Пурпурный <br />Гармония
//         </td>
//         <td class="e">
//           <strong>Восток</strong> <br />Дерево <br />Синий <br />Будущее
//         </td>
//       </tr>
//       <tr>
//         <td class="sw">
//           <strong>Юго-Запад</strong> <br />Земля <br />Коричневый
//           <br />Спокойствие
//         </td>
//         <td class="s">
//           <strong>Юг</strong> <br />Огонь <br />Оранжевый <br />Слава
//         </td>
//         <td class="se">
//           <strong>Юго-Восток</strong> <br />Дерево <br />Зеленый <br />Роман
//         </td>
//       </tr>
//     </table>

// const table = document.querySelector('#bagua-table');
// let editable = null;
// table.addEventListener('click', (e) => {
//   // let target = e.target;
//   // console.log('target: ', target);
//   // проверяем что кликнули на ячейку таблицы
//   let target = e.target.closest('td');
//   // console.log('target: ', target);
//   if (!table.contains(target) || editable) return;
//   // сохраняем данные из ячейки
//   let dataTd = target.innerHTML;
//   // console.log('dataTd: ', dataTd);
//   // создаем текстарею
//   const textarea = document.createElement('textarea');
//   textarea.classList.add('textarea-edit');
//   textarea.style.width = target.clientWidth + 'px';
//   textarea.style.height = target.clientHeight + 'px';
//   target.classList.add('td-edit');
//   target.innerHTML = '';
//   target.append(textarea);
//   textarea.value = dataTd;
//   textarea.focus();
//   editable = true;
//   // создаем кнопки
//   const saveChangeButton = document.createElement('button');
//   saveChangeButton.textContent = 'OK';
//   const cancelChangeButton = document.createElement('button');
//   cancelChangeButton.textContent = 'CANCEL';
//   target.append(saveChangeButton);
//   saveChangeButton.style.bottom =
//     -saveChangeButton.getBoundingClientRect().height + 'px';
//   target.append(cancelChangeButton);
//   cancelChangeButton.style.left =
//     saveChangeButton.getBoundingClientRect().width + 'px';
//   saveChangeButton.addEventListener('click', () => {
//     console.log('save');
//     target.innerHTML = textarea.value;
//     target.classList.remove('td-edit');
//     editable = false;
//   });
//   cancelChangeButton.addEventListener('click', () => {
//     console.log('cancel');
//     target.innerHTML = dataTd;
//     target.classList.remove('td-edit');
//     editable = false;
//   });
// });

// ------ Мышь, управляемая клавиатурой
{
  /* <pre id="mouse">
 _   _
(q\_/p)
 /. .\
=\_t_/=   __
 /   \   (
((   ))   )
/\) (/\  /
\  Y  /-'
 nn^nn
</pre>

#mouse {
	display: inline-block;
	cursor: pointer;
	margin: 0;
}
#mouse:focus {
	outline: 1px dashed black;
}

const mouse = document.querySelector('#mouse');
mouse.setAttribute('tabindex', 1);
mouse.style.position = 'fixed';
mouse.addEventListener('keydown', (e) => {
  const mouseRect = mouse.getBoundingClientRect();
  const mouseWeight = mouseRect.width;
  const mouseHeight = mouseRect.height;
  const mouseLeft = mouseRect.left;
  const mouseTop = mouseRect.top;
  console.log('mouseRect: ', mouseRect);

  switch (e.key) {
    case 'ArrowUp':
      mouse.style.top = mouseTop - mouseHeight + 'px';
      break;
    case 'ArrowDown':
      mouse.style.top = mouseTop + mouseHeight + 'px';
      break;
    case 'ArrowRight':
      mouse.style.left = mouseLeft + mouseWeight + 'px';
      break;
    case 'ArrowLeft':
      mouse.style.left = mouseLeft - mouseWeight + 'px';
      break;
    default:
      break;
  }
}); */
}

// ------ Депозитный калькулятор
{
  /* <form name="calculator">
	<table>
		<tr>
			<td>Первоначальный депозит</td>
			<td>
				<input name="money" type="number" value="10000" required />
			</td>
		</tr>
		<tr>
			<td>Срок вклада?</td>
			<td>
				<select name="months">
					<option value="3">3 (минимум)</option>
					<option value="6">6 (полгода)</option>
					<option value="12" selected>12 (год)</option>
					<option value="18">18 (1.5 года)</option>
					<option value="24">24 (2 года)</option>
					<option value="30">30 (2.5 года)</option>
					<option value="36">36 (3 года)</option>
					<option value="60">60 (5 лет)</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Годовая процентная ставка?</td>
			<td>
				<input name="interest" type="number" value="5" required />
			</td>
		</tr>
	</table>
</form>

<table id="diagram">
	<tr>
		<th>Было:</th>
		<th>Станет:</th>
	</tr>
	<tr>
		<th id="money-before"></th>
		<th id="money-after"></th>
	</tr>
	<td>
		<div style="background: red; width: 40px; height: 100px"></div>
	</td>
	<td>
		<div
			style="background: green; width: 40px; height: 0px"
			id="height-after"
		></div>
	</td>
</table>
td select,
td input {
	width: 150px;
}

#diagram td {
	vertical-align: bottom;
	text-align: center;
	padding: 10px;
}

#diagram div {
	margin: auto;
}

let form = document.forms.calculator;
const moneyBefore = document.querySelector('#money-before');
const moneyAfter = document.querySelector('#money-after');
const heightAfter = document.querySelector('#height-after');

moneyBefore.innerHTML = +form.money.value;
form.money.addEventListener('input', calcResult);
form.months.addEventListener('change', calcResult);
form.interest.addEventListener('input', calcResult);

function calcResult() {
  let initial = +form.money.value;
  let years = form.months.value / 12;
  let interest = form.interest.value / 100;

  let result = Math.round(initial * (1 + interest) ** years);
  // console.log('result: ', result);
  moneyAfter.innerHTML = result;
  heightAfter.style.height = result / 100 + 'px';
}
calcResult(); */
}
