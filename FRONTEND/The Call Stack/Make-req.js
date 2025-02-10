// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("IT LOADING!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height)
// };

// req.onerror = function () {
//     console.log("ERROR!!!");
//     console.log(this);
// };

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();


// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((data) => {
//         console.log("SECOND REQUEST RESOLVED!!!");
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("Error!", e);
//     });

const people = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log("Error!", e)
    }

}

people();
