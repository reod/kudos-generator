const randFromArray = (arr) => arr[Math.floor(Math.random()*arr.length)];
  
const generateKudos = (db) => {
   return db.reduce((kudos, options) => {
     const anotherPart = randFromArray(options);
     return `${kudos} ${anotherPart}`;
   }, '');
};

document.querySelector('#generate').addEventListener('click', (e) => {
  const name = document.querySelector('#name').value;
  document.querySelector('#content').innerHTML = generateKudos(db);
});

document.querySelector('#generate').click();
