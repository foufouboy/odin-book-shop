function ratingSort(books) {
    return [...books].sort((a, b) => b.rating - a.rating);
}

function nameSort(books) {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
}

function dateSort(books) {
    return [...books].sort((a, b) => b.firstPublish - a.firstPublish);
}

export default function getFilteredBooks(books, filter) {
    if (filter === "rating") {
        return ratingSort(books);
    } else if (filter === "name") {
        return nameSort(books);
    } else if (filter === "date") {
        return dateSort(books);
    } else {
        return [...books];
    }
}