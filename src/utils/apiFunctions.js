import NoImage from "../assets/no-image.jpg";

const limit = 20;
const baseLink = `https://openlibrary.org/search.json?sort=rating&limit=${limit}&q=`;
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

export async function getBooksFrom(q) {
    // Search among all books
    try {
        const result = await fetch(baseLink + q);
        const data = await result.json();
        const { docs } = data;
        console.log(docs)

        return docs.slice(0, 20).map(book => ({
            id: book.key,
            author: book.author_name ? book.author_name[0] : 
                book.publisher ? book.publisher[0] :
                "Author unspecified.",
            coverImg: book.cover_i ? 
                `${coverBaseLink}${book.cover_i}-L.jpg` :
                NoImage,
            firstPublish: book.first_publish_year,
            title: book.title,
            rating: ~~(book.ratings_sortable || book.ratings_average || 0),
        }));
    } catch (error) {
        console.log(error);
    }
}

export async function getCategoryBooks(category) {
    // get books by genre
}

export async function getBooksCategoryFrom(category, q) {
    // get books by genre AND query

}