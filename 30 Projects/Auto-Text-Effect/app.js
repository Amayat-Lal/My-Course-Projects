const container = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"]

let careerIndex = 0;

let characterText = 0;

updateText();

function updateText() {
    characterText++
    container.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterText)}</h1>`;

    if (characterText === careers[careerIndex].length) {
        careerIndex++
        characterText = 0
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);

}

