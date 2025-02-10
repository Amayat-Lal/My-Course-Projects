const call = document.querySelector('#v2');

call.onclick = function () {
    console.log("Welcome My Lord")
    console.log("Strongest of all")
};

const scream = function () {
    console.log('aaaaaaaaaaaa')
    console.log('Banana')
};

call.onmouseover = scream;