localStorage.setItem('accept-cookies', 'true');
// when we want to store an object in local storage we need to use JSON.stringify
localStorage.setItem('data', JSON.stringify({prop: 1}));
localStorage.setItem('score', 5);
window.localStorage.setItem('nickname', 'harry');
// this must be accessed via window object
// you can store data in local storage only as string
// if we want to store an image we gotta use a file reader to convert it into a base64 converted img




// console.log(localStorage.getItem('nickname'));
// console.log(JSON.parse(localStorage.getItem('data')));



console.log({...localStorage});
console.log(Object.values(localStorage));
console.log(Object.keys(localStorage));
console.log(Object.entries(localStorage));