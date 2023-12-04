export function truncate(string) {
    if (string.split(" ").length < 5) return string;
    return string
        .split(" ")
        .slice(0, 4)
        .join(" ") + "...";
}

export function generateRandomReadTime(text) {
    return 4 + (text.length % 3) + ((text.length % 10) / 10);
}

export function convertNumberToTime(n) {
    // takes an integer or floating with one decimal, and gets back the corresponding time in hours and minutes
    if (Math.floor(n) === n) return n + " hours";

    const digits = String(n).split(".");
    const hours = digits[0];
    const minutes = +(digits[1]) * 6;

    return `${hours} hours ${minutes} minutes`;
}