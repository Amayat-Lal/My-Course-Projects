// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Response: ", res)
//     });

const starWar = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("Error", e);
    }
};

starWar(5);
starWar(10);

