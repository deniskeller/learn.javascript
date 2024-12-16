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
{
  /* <ul class="tree" id="tree">
  <li>
    Животные
    <ul>
      <li>
        Млекопитающие
        <ul>
          <li>Коровы</li>
          <li>Ослы</li>
          <li>Собаки</li>
          <li>Тигры</li>
        </ul>
      </li>
      <li>
        Другие
        <ul>
          <li>Змеи</li>
          <li>Птицы</li>
          <li>Ящерицы</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Рыбы
    <ul>
      <li>
        Аквариумные
        <ul>
          <li>Гуппи</li>
          <li>Скалярии</li>
        </ul>
      </li>
      <li>
        Морские
        <ul>
          <li>Морская форель</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>;

const tree = document.querySelector('#tree');
const itemList = tree.querySelectorAll('li');

for (let li of itemList) {
  const span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', function (e) {
  const target = e.target;
  console.log('target: ', target);
  if (target.tagName === 'SPAN' && target.nextSibling) {
    target.nextSibling.hidden = !target.nextSibling.hidden;
  }
}); */
}
