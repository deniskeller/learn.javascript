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
const flyjet = document.querySelector('#flyjet');
const flyjetWidth = flyjet.getBoundingClientRect().width;
const flyjetHeight = flyjet.getBoundingClientRect().height;
let isAnimate = false;

flyjet.onclick = function () {
  flyjet.style.width = flyjetWidth * 10 + 'px';
  flyjet.style.height = flyjetHeight * 10 + 'px';

  flyjet.addEventListener('transitionend', function (e) {
    if (!isAnimate) {
      isAnimate = true;
      alert('«Анимация закончилась!»');
    }
  });
};
