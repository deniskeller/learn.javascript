// ----------------------------------------------------------------- Введение в браузерные события ------------------------------------------------------------------------

// ------ Скрыть элемент по нажатию кнопки
// const hider = document.querySelector('#hider');
// const text = document.querySelector('#text');
// hider.addEventListener('click', () => {
//   text.style.display = 'none';
// });

// ------ Спрятать себя
// const hider = document.querySelector('#hider');
// hider.addEventListener('click', () => {
//   hider.style.display = 'none';
// });

// ------ Передвиньте мяч по полю
// const ball = document.querySelector('#ball');
// const field = document.querySelector('#field');

// field.addEventListener('click', function (event) {
//   console.log('Координаты: ' + event.clientX + ':' + event.clientY);

//   const fieldRect = field.getBoundingClientRect();
//   console.log('fieldRect: ', fieldRect);
//   const paddingTopBottom = (field.offsetWidth - field.clientWidth) / 2;
//   const paddingLeftRight = (field.offsetHeight - field.clientHeight) / 2;

//   let top =
//     event.clientY - fieldRect.top - paddingTopBottom - ball.offsetHeight / 2;
//   let left =
//     event.clientX - fieldRect.left - paddingLeftRight - ball.offsetWidth / 2;

//   console.log('left: ', left);
//   console.log('top: ', top);
//   console.log(field.clientWidth);

//   if (top < 0) top = 0;
//   if (left < 0) left = 0;
//   if (left + ball.offsetWidth > field.clientWidth)
//     left = field.clientWidth - ball.offsetWidth;
//   if (top + ball.offsetHeight > field.clientHeight)
//     top = field.clientHeight - ball.offsetHeight;

//   ball.style.left = left + 'px';
//   ball.style.top = top + 'px';
// });

// ------ Создать раскрывающееся меню
// const menu = document.querySelector('.menu');
// menu.querySelector('.title').addEventListener('click', () => {
//   menu.classList.toggle('open');
// });

// ------ Добавить кнопку закрытия
// const panes = document.querySelectorAll('.pane');
// console.log('panes: ', panes);

// for (let pane of panes) {
//   console.log('pane: ', pane);
//   pane.innerHTML += '<button class="remove-button">[x]</button>';
// }
// const btns = document.querySelectorAll('.remove-button');
// console.log('btns: ', btns);
// for (let btn of btns) {
//   btn.addEventListener('click', (e) => {
//     console.log('e.target: ', e);
//     e.target.parentNode.remove();
//   });
// }

// ------ Карусель
// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
{
  /* <div class="carousel">
      <button class="carousel__button carousel__button--prev">⇦</button>

      <div class="carousel__gallery">
        <ul>
          <li><img src="https://ru.js.cx/carousel/1.png" /></li>
          <li><img src="https://ru.js.cx/carousel/2.png" /></li>
          <li><img src="https://ru.js.cx/carousel/3.png" /></li>
          <li><img src="https://ru.js.cx/carousel/4.png" /></li>
          <li><img src="https://ru.js.cx/carousel/5.png" /></li>
          <li><img src="https://ru.js.cx/carousel/6.png" /></li>
          <li><img src="https://ru.js.cx/carousel/7.png" /></li>
          <li><img src="https://ru.js.cx/carousel/8.png" /></li>
          <li><img src="https://ru.js.cx/carousel/9.png" /></li>
          <li><img src="https://ru.js.cx/carousel/10.png" /></li>
        </ul>
      </div>

      <button class="carousel__button carousel__button--next">⇨</button>
    </div>  */
}

// let i = 1;
// for (let li of document.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML(
//     'beforeend',
//     `<span style="position:absolute;left:0;top:0">${i}</span>`
//   );
//   i++;
// }

// const carousel = document.querySelector('.carousel');
// const carouselSlider = carousel.querySelector('ul');
// const slide = carousel.querySelectorAll('li');
// const btnPrev = carousel.querySelector('.carousel__button--prev');
// const btnNext = carousel.querySelector('.carousel__button--next');
// const showSlides = 3;
// const sizeSlide = 200;
// let currentSlide = 0;

// const slideLength = slide.length;
// let rest = slideLength - showSlides;
// console.log('rest: ', rest);
// console.log('max: ', slide.length * sizeSlide - showSlides * sizeSlide);

// btnPrev.addEventListener('click', () => {
// 	currentSlide += sizeSlide * showSlides;
// 	currentSlide = Math.min(currentSlide, 0)
//   // if (currentSlide < 0) {
//   // }
//   console.log('currentSlide: ', currentSlide);
//   carouselSlider.style.transform = `translateX(${currentSlide}px)`;
// });

// btnNext.addEventListener('click', () => {
//   currentSlide -= sizeSlide * showSlides;
//   currentSlide = Math.max(
//     currentSlide,
//     -sizeSlide * (slideLength - showSlides)
//   );
//   // if (currentSlide > -sizeSlide * (slide.length - showSlides)) {
//   // }

//   // const remainder = slideLength % showSlides;
//   // console.log('remainder: ', remainder);
//   console.log('currentSlide: ', currentSlide);
//   carouselSlider.style.transform = `translateX(${currentSlide}px)`;
// });

// const carousel = document.querySelector('.carousel');
// const carouselSlider = carousel.querySelector('ul');
// const slides = carousel.querySelectorAll('li');
// const btnPrev = carousel.querySelector('.carousel__button--prev');
// const btnNext = carousel.querySelector('.carousel__button--next');
// const showSlides = 3; // сколько слайдов показывается одновременно
// const sizeSlide = slides[0].clientWidth; // ширина одного слайда
// let currentSlide = 0; // текущий слайд
// // Функция для обновления отображения слайдов
// function updateCarousel() {
//   carouselSlider.style.transform = `translateX(${-currentSlide * sizeSlide}px)`;
// }

// // Обработчик для кнопки "вперед"
// btnNext.addEventListener('click', () => {
//   if (currentSlide < slides.length - showSlides) {
//     currentSlide++;
//   } else {
//     currentSlide = 0; // вернуться к первому слайду
//   }
//   updateCarousel();
// });

// // Обработчик для кнопки "назад"
// btnPrev.addEventListener('click', () => {
//   if (currentSlide > 0) {
//     currentSlide--;
//   } else {
//     currentSlide = slides.length - showSlides; // перейти к последнему слайду
//   }
//   updateCarousel();
// });

// const carousel = document.querySelector('.carousel');
//   const carouselSlider = carousel.querySelector('ul');
//   const slides = carouselSlider.querySelectorAll('li');
//   const slideCount = slides.length;
//   const slidesToShow = 3; // количество отображаемых слайдов
//   const slideWidth = 200; // ширина одного слайда
//   let currentIndex = 0;

//   function updateCarousel() {
//     const offset = -currentIndex * slideWidth * slidesToShow;
//     carouselSlider.style.transform = `translateX(${offset}px)`;
//   }

//   carousel.querySelector('.carousel__button--next').addEventListener('click', () => {
//     if (currentIndex < Math.floor(slideCount / slidesToShow)) {
//       currentIndex += 1;
//       updateCarousel();
//     }
//   });

//   carousel.querySelector('.carousel__button--prev').addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex -= 1;
//       updateCarousel();
//     }
//   });

// ---------------------------------------------------------------------- Делегирование событий -------------------------------------------------------------------
// let table = document.getElementById('bagua-table');

// let selectedTd;

// table.onclick = function (event) {
//   let td = event.target.closest('td'); // (1)

//   if (!td) return; // (2)

//   if (!table.contains(td)) return; // (3)

//   highlight(td); // (4)
// };

// function highlight(node) {
//   if (selectedTd) {
//     selectedTd.classList.remove('highlight');
//   }
//   selectedTd = node;
//   selectedTd.classList.add('highlight');
// }

// ------ Спрячьте сообщения с помощью делегирования
// const container = document.querySelector('#container');
// console.log('container: ', container);
// const removeButtons = document.querySelectorAll('.remove-button');
// console.log('removeButtons: ', removeButtons);

// container.addEventListener('click', function (e) {
//   if (e.target.classList.contains('remove-button'))
//     e.target.parentNode.remove();
// });

// ------ Раскрывающееся дерево
// {
//   <ul class="tree" id="tree">
//     <li>
//       Животные
//       <ul>
//         <li>
//           Млекопитающие
//           <ul>
//             <li>Коровы</li>
//             <li>Ослы</li>
//             <li>Собаки</li>
//             <li>Тигры</li>
//           </ul>
//         </li>
//         <li>
//           Другие
//           <ul>
//             <li>Змеи</li>
//             <li>Птицы</li>
//             <li>Ящерицы</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//     <li>
//       Рыбы
//       <ul>
//         <li>
//           Аквариумные
//           <ul>
//             <li>Гуппи</li>
//             <li>Скалярии</li>
//           </ul>
//         </li>
//         <li>
//           Морские
//           <ul>
//             <li>Морская форель</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//   </ul>;

//   const tree = document.querySelector('#tree');
//   const itemList = tree.querySelectorAll('li');

//   for (let li of itemList) {
//     const span = document.createElement('span');
//     li.prepend(span);
//     span.append(span.nextSibling);
//   }

//   tree.addEventListener('click', function (e) {
//     const target = e.target;
//     console.log('target: ', target);
//     if (target.tagName === 'SPAN' && target.nextSibling) {
//       target.nextSibling.hidden = !target.nextSibling.hidden;
//     }
//   });
// }

// ------ Сортируемая таблица

/* <table id="table">
  <thead>
    <tr>
      <th data-type="number">Возраст</th>
      <th data-type="string">Имя</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5</td>
      <td>Вася</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Петя</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Женя</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Маша</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Илья</td>
    </tr>
  </tbody>
</table>;

const table = document.querySelector('#table');
const thList = table.querySelectorAll('th');

thList.forEach((item, index) => {
  item.addEventListener('click', () => {
    const type = item.getAttribute('data-type');
    sortTable(index, type);
  });
});

const sortTable = (index, type) => {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  console.log('rows: ', rows);

  const sortedRows = rows.sort((a, b) => {
    const aText = a.children[index].textContent;
    const bText = b.children[index].textContent;

    if (type === 'number') {
      return Number(aText) - Number(bText);
    }
    if (type === 'string') {
      return aText > bText ? 1 : -1;
    }
  });

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
}; */

// ------ Поведение "подсказка"
// .tooltip {
// 	position: fixed;
// 	padding: 10px 20px;
// 	border: 1px solid #b3c9ce;
// 	border-radius: 4px;
// 	text-align: center;
// 	font: italic 14px/1.3 sans-serif;
// 	color: #333;
// 	background: #fff;
// 	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
// 	display: none;
// }

{
  /* <p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>
    <p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>

    <button data-tooltip="эта подсказка должна быть длиннее, чем элемент">
      Короткая кнопка
    </button>
    <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

    <p>
      Прокрутите страницу, чтобы кнопки оказались у верхнего края, а затем
      проверьте правильно ли выводятся подсказки.
    </p> */
}

// let tooltip = document.createElement('div');

// document.addEventListener('mouseover', (e) => {
//   const target = e.target;
//   if (!target.dataset.tooltip) return;

//   tooltip.className = 'tooltip';
//   document.body.appendChild(tooltip);

//   const tooltipContent = target.getAttribute('data-tooltip');
//   tooltip.innerHTML = tooltipContent;
//   tooltip.style.display = 'block';

//   const targetRect = target.getBoundingClientRect();

//   // Проверяем, выходят ли подсказки за границы экрана
//   let left = targetRect.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
//   if (left < 0) left = 5;

//   let top = targetRect.top - tooltip.offsetHeight - 5;
//   if (top < 0) top = targetRect.top + target.offsetHeight + 5;

//   tooltip.style.left = left + 'px';
//   tooltip.style.top = top + 'px';
// });

// document.addEventListener('mouseout', (e) => {
//   const target = e.target;
//   if (!target.dataset.tooltip) return;
//   tooltip.style.display = 'none';
// });

// -------------------------------------------------------------------- Действия браузера по умолчанию --------------------------------------------------------------------------

// ------ Поймайте переход по ссылке
// #contents {
// 	padding: 5px;
// 	border: 1px green solid;
// }

// <fieldset id="contents">
// 	<legend>#contents</legend>
// 	<p>
// 		Как насчёт того, чтобы прочитать
// 		<a href="https://wikipedia.org">Википедию</a> или посетить
// 		<a href="https://w3.org"><i>W3.org</i></a> и узнать о современных
// 		стандартах?
// 	</p>
// </fieldset>

// const contents = document.querySelector('#contents');
// const links = contents.querySelectorAll('a');

// contents.addEventListener('click', (e) => {
//   const target = e.target.closest('a');
//   const href = target?.getAttribute('href');

//   if (target) {
//     const checkConfirm = confirm(`Уверены, что хотите перейти на ${href}`);

//     if (!checkConfirm) e.preventDefault();
//   }
// });

// ------ Галерея изображений
// #largeImg {
// 	border: solid 1px #ccc;
// 	width: 550px;
// 	height: 400px;
// 	padding: 5px;
// }

// #thumbs a {
// 	border: solid 1px #ccc;
// 	width: 100px;
// 	height: 100px;
// 	padding: 3px;
// 	margin: 2px;
// 	float: left;
// }

// #thumbs a:hover {
// 	border-color: #ff9900;
// }

// #thumbs li {
// 	list-style: none;
// }

// #thumbs {
// 	margin: 0;
// 	padding: 0;
// }

// <p>
// 	<img
// 		id="largeImg"
// 		src="https://en.js.cx/gallery/img1-lg.jpg"
// 		alt="Large image"
// 	/>
// </p>

// <ul id="thumbs">
// 	<!-- браузер показывает небольшую встроенную подсказку из атрибута "title" при наведении курсора на текст -->
// 	<li>
// 		<a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"
// 			><img src="https://en.js.cx/gallery/img2-thumb.jpg"
// 		/></a>
// 	</li>
// 	<li>
// 		<a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"
// 			><img src="https://en.js.cx/gallery/img3-thumb.jpg"
// 		/></a>
// 	</li>
// 	<li>
// 		<a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"
// 			><img src="https://en.js.cx/gallery/img4-thumb.jpg"
// 		/></a>
// 	</li>
// 	<li>
// 		<a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"
// 			><img src="https://en.js.cx/gallery/img5-thumb.jpg"
// 		/></a>
// 	</li>
// 	<li>
// 		<a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"
// 			><img src="https://en.js.cx/gallery/img6-thumb.jpg"
// 		/></a>
// 	</li>
// </ul>
// const largeImg = document.querySelector('#largeImg');
// const thumbs = document.querySelector('#thumbs');

// thumbs.addEventListener('click', (e) => {
//   const target = e.target.closest('a');
//   const href = target?.getAttribute('href');

//   if (target) e.preventDefault();
//   largeImg.src = href;
// });

