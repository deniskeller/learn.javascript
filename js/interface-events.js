//  ------------------------------------------------------------------- Основы событий мыши --------------------------------------------------------------
// document.addEventListener('mousemove', (e) => {
//   console.log('e clientX: ', e.clientX);
//   console.log('e clientY: ', e.clientY);
//   console.log('e pageX: ', e.pageX);
//   console.log('e pageY: ', e.pageY);
// });

// ------ Выделяемый список
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
});
