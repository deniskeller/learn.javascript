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
const ball = document.querySelector('#ball');
const field = document.querySelector('#field');
const fieldRect = field.getBoundingClientRect();
console.log('fieldRect: ', fieldRect);
const paddingTopBottom = (field.offsetWidth - field.clientWidth) / 2;
const paddingLeftRight = (field.offsetHeight - field.clientHeight) / 2;

field.addEventListener('click', function (event) {
  console.log('Координаты: ' + event.clientX + ':' + event.clientY);

  let left =
    event.clientX - fieldRect.left - paddingLeftRight - ball.offsetWidth / 2;

  let top =
    event.clientY - fieldRect.top - paddingTopBottom - ball.offsetHeight / 2;

  console.log('left: ', left);
  console.log('top: ', top);
  console.log(field.clientWidth);

  if (top < 0) top = 0;
  if (left < 0) left = 0;
  if (left + ball.offsetWidth > field.clientWidth)
    left = field.clientWidth - ball.offsetWidth;
  if (top + ball.offsetHeight > field.clientHeight)
    top = field.clientHeight - ball.offsetHeight;

  ball.style.left = left + 'px';
  ball.style.top = top + 'px';
});
