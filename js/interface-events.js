//  ------------------------------------------------------------------- Основы событий мыши --------------------------------------------------------------
// document.addEventListener('mousemove', (e) => {
//   console.log('e clientX: ', e.clientX);
//   console.log('e clientY: ', e.clientY);
//   console.log('e pageX: ', e.pageX);
//   console.log('e pageY: ', e.pageY);
// });

// ------ Выделяемый список
{
  /* <ul id="ul">
  <li>Кристофер Робин</li>
  <li>Винни Пух</li>
  <li>Тигра</li>
  <li>Кенга</li>
  <li>Кролик. Просто Кролик.</li>
</ul>;


.selected {
	background: #0f0;
}

li {
	cursor: pointer;
}

const list = document.querySelectorAll('#ul li');

list.forEach((li) => {
  li.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.ctrlKey || e.metaKey) {
      li.classList.toggle('selected');
    } else {
      list.forEach((li) => li.classList.remove('selected'));
      li.classList.add('selected');
    }
  });
}); */
}

// ----------------------------------------------------------------------- Прокрутка -------------------------------------------------------------------------

// ------ Бесконечная страница
// console.log('window.scrollY: ', window.scrollY);
// console.log('window.innerHeight: ', window.innerHeight);
// console.log('document.body.offsetHeight: ', document.body.offsetHeight);
// function infinityScroll() {
//   console.log('window.scrollY: ', window.scrollY);
//   console.log('window.innerHeight: ', window.innerHeight);
//   console.log('document.body.offsetHeight: ', document.body.offsetHeight);
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     const p = document.createElement('p');
//     p.innerHTML = new Date();
//     app.append(p);
//   }
// }
// window.addEventListener('scroll', infinityScroll);

// ------ Кнопка вверх/вниз
{
  /* <div id="arrowTop"></div>
#app {
	width: 400px;
	margin: auto;
	overflow: auto;
	text-align: justify;
	scroll-behavior: smooth;
}
#arrowTop {
	height: 9px;
	width: 14px;
	color: green;
	position: fixed;
	top: 10px;
	left: 10px;
	cursor: pointer;
	display: none;
}
#arrowTop::before {
	content: '▲';
} */
}
// function showBtnScrollTop() {
//   arrowTop.style.display = 'none';
//   if (window.scrollY >= window.innerHeight) {
//     arrowTop.style.display = 'block';
//   }
// }
// function scrollToTop() {
//   window.scroll(0, 0);
// }
// showBtnScrollTop();
// window.addEventListener('scroll', showBtnScrollTop);
// const arrowTop = document.querySelector('#arrowTop');
// arrowTop.addEventListener('click', scrollToTop);

// ------ Загрузка видимых изображений
// function isVisible(elem) {
//   const elemRect = elem.getBoundingClientRect();
// 	console.log('window.innerHeight * 2: ', window.innerHeight * 2);
//   if (elemRect.top <= window.innerHeight * 2) return true;
//   return false;
// }

// function showVisible() {
//   for (let img of document.querySelectorAll('img')) {
//     let realSrc = img.dataset.src;
//     if (!realSrc) continue;

//     if (isVisible(img)) {
//       // отключение кеширования
//       // эта строка должна быть удалена в "боевом" коде
//       // realSrc += '?nocache=' + Math.random();

//       img.src = realSrc;

//       img.dataset.src = '';
//     }
//   }
// }

// window.addEventListener('scroll', showVisible);
// showVisible();
