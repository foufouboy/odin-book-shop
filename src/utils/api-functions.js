import NoImage from "../assets/no-image.jpg";

const limit = 20;
const bookBaseLink = "https://openlibrary.org/books/";
const baseLink = `https://openlibrary.org/search.json?mode=everything&limit=${limit}&q=`;
const coverBaseLink = `https://covers.openlibrary.org/b/id/`;
const subjectList = [
    "science",
    "philosophy",
    "science_fiction",
    "romance",
    "fantasy",
    "historical_fiction",
    "horror",
    "thriller",
    "theater",
    "poetry",
];

function formatedSearchResults(docs) {
    return docs.slice(0, 20).map(book => ({
        id: book.edition_key[0], 
        author: book.author_name ? book.author_name[0] : 
            book.publisher ? book.publisher[0] :
            "Author unspecified.",
        coverImg: book.cover_i ? 
            `${coverBaseLink}${book.cover_i}-L.jpg` :
            NoImage,
        firstPublish: book.first_publish_year,
        title: book.title,
        rating: ~~(book.ratings_average || book.ratings_sortable || 0),
    }));
}

function getFormatedBook(book) {
    return {
        title: "",
        author: "",
        firstPublish: 0,
        rating: 0,
        description: "",
    }
    // if there is a description, we'll add it, else no desc.
    // Or lorem ipsum? Yes we could do that.
}

export async function getBooksFrom(q) {
    // Search among all books

    const result = await fetch(baseLink + q);
    const data = await result.json();
    const { docs } = data;

    console.log(docs);
    return formatedSearchResults(docs);

}

export async function getCategoryBooks(category, q) {
    const result = await fetch(`${baseLink}${q}&subject=${category}`);
    const data = await result.json();
    const { docs } = data;

    return formatedSearchResults(docs);
}

export async function getBook(id) {
    const result = await fetch(`${bookBaseLink}${id}.json`);
    const data = await result.json();
}