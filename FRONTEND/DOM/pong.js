// alert("This is an alert message!");
const boxOne = document.querySelector('.box1');
const playerOne = document.querySelector('#b1');
const playerTwo = document.querySelector('#b2');
const lefthOne = document.querySelector('#ahOne');
const righthOne = document.querySelector('#ahTwo');
const input = document.querySelector('.input');
const reset = document.querySelector('#b3');
const forms = document.querySelector('#forms')
let count = 0;
let counts = 0;
let con = 0;
playerOne.addEventListener('click', function (e) {
    e.preventDefault();
    count++;
    lefthOne.textContent = count;
});

playerTwo.addEventListener('click', function (e) {
    e.preventDefault();
    counts++;
    righthOne.textContent = counts;
});

reset.addEventListener('click', function (e) {
    e.preventDefault();
    lefthOne = 0;
    righthOne = 0;
    alert(working);
});