// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(function () {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(function () {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay,) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
    }, delay)
};

// delayedColorChange('olive', 1000, () => {
//     delayedColorChange('red', 1000, () => {
//         delayedColorChange('orsnge', 1000, () => {
//             delayedColorChange('yellow', 1000, () => {
//                 delayedColorChange('green', 1000, () => {
//                     delayedColorChange('blue', 1000, () => {
//                     })
//                 })
//             })
//         })
//     })
// });


// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
}