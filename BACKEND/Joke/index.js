const jocks = require("give-me-a-joke");
const color = require("colors");

jocks.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});
// console.dir(jocks)