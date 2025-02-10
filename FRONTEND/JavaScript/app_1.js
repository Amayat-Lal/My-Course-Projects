// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba daa")
// }

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// const seaChart = [
//     ['Goa', 'Juan', 'Anto', 'Kevin'],
//     ['Yema', 'Saku', 'Jack', 'Erik'],
//     ['Yajo', 'Kara', 'Goku', 'Vezis']
// ]

// for (let i = 0; i < seaChart.length; i++) {
//     const row = seaChart[i]
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

const SECRET = "Hippo";

let guess = prompt("enter the code....")
while (guess !== SECRET) {
    guess = prompt("enter the code....")
    console.log("wrong")
}
console.log("Congrats You Got The Passeword!!!")