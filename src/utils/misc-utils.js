export function truncate(string) {
    if (string.split(" ").length < 5) return string;
    return string
        .split(" ")
        .slice(0, 4)
        .join(" ") + "...";
}