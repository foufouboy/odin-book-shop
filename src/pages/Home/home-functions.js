const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z",
    ];

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

