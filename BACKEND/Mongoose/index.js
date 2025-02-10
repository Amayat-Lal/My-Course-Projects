const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const godFather = new Movie({
//     title: "The Godfather",
//     year: 1972,
//     score: 9.2,
//     rating: "R"
// });

// Movie.insertMany([
//     {
//         title: "The Shawshank Redemption",
//         year: 1994,
//         score: 9.3,
//         rating: "R"
//     },
//     {
//         title: "12 Angry Men",
//         year: 1957,
//         score: 8.9,
//         rating: "PG"
//     },
//     {
//         title: "Schindler's List",
//         year: 1993,
//         score: 8.9,
//         rating: "R"
//     },
//     {
//         title: "The Lord of the Rings",
//         year: 2001,
//         score: 8.8,
//         rating: "PG-13"
//     },
//     {
//         title: "Inception",
//         year: 2010,
//         score: 8.8,
//         rating: "PG-13"
//     },
//     {
//         title: "Pulp Fiction",
//         year: 1994,
//         score: 8.9,
//         rating: "R"
//     },
//     {
//         title: "The Dark Knight",
//         year: 2008,
//         score: 9.0,
//         rating: "PG-13"
//     },
//     {
//         title: "The Silence of the Lambs",
//         year: 1991,
//         score: 8.6,
//         rating: "R"
//     },
//     {
//         title: "Forrest Gump",
//         year: 1994,
//         score: 8.8,
//         rating: "PG-13"
//     }
// ])

// .then(data => {
//     console.log("It Worked")
//     console.log(data)
// })