// -------------------------------------------------------------------- Формы, элементы управления --------------------------------------------------------------------------

// ------ Свойства и методы формы
const genres = document.querySelector('#genres');
genres.addEventListener('change', () => console.log('genres: ', genres.value));
console.log('selected genres value: ', genres.options[genres.selectedIndex].value);
console.log('selected genres text: ', genres.options[genres.selectedIndex].text);

const newOption = new Option('Классика', 'classic');
console.log('newOption: ', newOption);
genres.append(newOption);
newOption.selected = true;
console.log('genres: ', genres.value);
