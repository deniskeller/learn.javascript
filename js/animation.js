// ----------------------------------------------------------------------- CSS-анимации ------------------------------------------------------------

// #boat {
// 	margin-left: 0;
// 	cursor: pointer;
// 	transition: margin-left 3s ease-in-out;
// }

// /* flipping the picture with CSS */
// .back {
// 	transform: scaleX(-1);
// 	filter: FlipH;
// 	-ms-filter: 'FlipH';
// }

// <img src="https://js.cx/clipart/boat.png" id="boat" />

// boat.onclick = function() {

// 	this.onclick = null; // анимация должна начинаться только после первого клика

// 	let times = 1;

// 	function go() {
// 		if (times % 2) {
// 			boat.classList.remove('back');
// 			boat.style.marginLeft = 100 * times + 200 + 'px';
// 		} else {
// 			boat.classList.add('back');
// 			// boat.style.marginLeft = 100 * times - 200 + 'px';
// 		}

// 	}

// 	go();

// 	boat.addEventListener('transitionend', function(e) {
// 		console.log('e: ', e);
// 		times++;
// 		go();
// 	});
// }

// ------ Анимировать самолёт (CSS)

// #flyjet {
// 	width: 40px;
// 	/* -> 400px */

// 	height: 24px;
// 	/* -> 240px */
// 	transition: all 3s ease;
// }

// <img id="flyjet" src="https://en.js.cx/clipart/flyjet.jpg" />

// const flyjet = document.querySelector('#flyjet');
// const flyjetWidth = flyjet.getBoundingClientRect().width;
// const flyjetHeight = flyjet.getBoundingClientRect().height;
// let isAnimate = false;

// flyjet.onclick = function () {
//   flyjet.style.width = flyjetWidth * 10 + 'px';
//   flyjet.style.height = flyjetHeight * 10 + 'px';

//   flyjet.addEventListener('transitionend', function (e) {
//     if (!isAnimate) {
//       isAnimate = true;
//       alert('«Анимация закончилась!»');
//     }
//   });
// };

// ------ Анимированный круг

// .circle {
// 	transition-property: width, height;
// 	transition-duration: 2s;
// 	position: fixed;
// 	transform: translateX(-50%) translateY(-50%);
// 	background-color: red;
// 	border-radius: 50%;
// 	width: 0px;
// 	height: 0px;
// }

// <button class="button">клик для анимации</button>
// <div class="circle"></div>

// const circle = document.querySelector('.circle');
// function showCircle(cx, cy, radius) {
//   circle.style.left = cx + 'px';
//   circle.style.top = cy + 'px';
//   circle.style.width = radius * 2 + 'px';
//   circle.style.height = radius * 2 + 'px';
// }
// document.querySelector('.button').onclick = () => showCircle(250, 250, 100);

// ------ Анимировать самолёт с перелётом (CSS)

// #flyjet {
// 	width: 40px;
// 	height: 24px;
// 	transition: all 3s cubic-bezier(0, 0, .5, 2);
// }
// <img id="flyjet" src="https://en.js.cx/clipart/flyjet.jpg" />
// const flyjet = document.querySelector('#flyjet');
// const flyjetWidth = flyjet.getBoundingClientRect().width;
// const flyjetHeight = flyjet.getBoundingClientRect().height;
// let isAnimate = false;

// flyjet.onclick = function () {
//   flyjet.style.width = flyjetWidth * 10 + 'px';
//   flyjet.style.height = flyjetHeight * 10 + 'px';

//   flyjet.addEventListener('transitionend', function (e) {
//     if (!isAnimate) {
//       isAnimate = true;
//     }
//   });
// };

// ------ Анимация круга с помощью колбэка

// .circle {
// 	transition-property: width, height;
// 	transition-duration: 2s;
// 	position: fixed;
// 	transform: translateX(-50%) translateY(-50%);
// 	background-color: red;
// 	border-radius: 50%;
// 	width: 0px;
// 	height: 0px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }

// <button class="button">клик для анимации</button>
// <div class="circle"></div>

// const circle = document.querySelector('.circle');
// let isAnimate = false;

// function showCircle(cx, cy, radius, callback) {
//   circle.style.left = cx + 'px';
//   circle.style.top = cy + 'px';
//   circle.style.width = radius * 2 + 'px';
//   circle.style.height = radius * 2 + 'px';

//   circle.addEventListener('transitionend', function () {
// 		if (!isAnimate) {
//       isAnimate = true;
//       callback(circle);
//     }
//   });
// }

// document.querySelector('.button').onclick = function () {
//   showCircle(250, 250, 100, (div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// };
