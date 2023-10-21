import { alphabet } from "../../constants";

function getRandomLetter() {
    const randomIndex = ~~(Math.random() * 26);
    return alphabet[randomIndex];
}

export function combineLetters() {
    let word = "";

    for (let i = 0; i < 5; i++) {
        let letter = getRandomLetter();
        if (i === 0) letter = letter.toUpperCase();
        word += letter;
    }

    return word + ".";
}

