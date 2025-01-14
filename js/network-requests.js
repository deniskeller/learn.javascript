// ------------------------------------------------------------------------------------ Fetch ------------------------------------------------------------------------------
// let url =
//   'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);
// console.log('response: ', response);
// let commits = await response.json(); // читаем ответ в формате JSON
// console.log('commits: ', commits);
// console.log(commits[0].author.login);

// async function getUsers(names) {
//   let promises = names.map(async (name) => {
//     const response = await fetch(`https://api.github.com/users/${name}`);
//     console.log('response: ', response);

//     if (!response.ok) {
//       return null;
//     }
//     const userData = await response.json();
//     return userData;
//   });

//   console.log('promises: ', promises);

//   const results = await Promise.all(promises);
//   console.log('results: ', results);
//   return results;
// }

// getUsers(['deniskeller', 'kek', 'lol']);

// ------------------------------------------------------------------ FormData -----------------------------------------------------------------
{
  /* <form id="formElem">
	<input type="text" name="name" value="John" />
	<input type="text" name="surname" value="Smith" />
	<input type="submit" />
</form> */
}
// formElem.onsubmit = async (e) => {
//   e.preventDefault();

//   console.log('formElem: ', formElem);

//   let response = await fetch('/article/formdata/post/user', {
//     method: 'POST',
//     body: new FormData(formElem),
//   });

//   let result = await response.json();

//   console.log(result.message);
// };

// --------------------------------------------------------------------- Куки, document.cookie ---------------------------------------------------
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = 'user=John33; expires=' + date;
document.cookie = "user=John33; max-age=0";
console.log(document.cookie);
