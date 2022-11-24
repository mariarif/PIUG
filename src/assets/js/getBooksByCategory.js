import { getAllBooks as getAllBooks } from "./getAllBooks.js";
import { getCategories as getCategories } from "./getCategories.js";
export function getBooksByCategory(category) {
    let books = getAllBooks();
    let categories = getCategories();
    function compareByGoodreadsRating(a, b) {
        if (a.goodreadsRating < b.goodreadsRating) {
            return 1;
        }
        else if (a.goodreadsRating > b.goodreadsRating) {
            return -1;
        }
        else return 0;
    };
    if (category == "bestRating") {
        books = books.sort(compareByGoodreadsRating);
    }
    else if (categories.map(c=>c.categoryId).indexOf(category) > -1) {
        books = books.filter(b => b.genre.indexOf(category) > -1);
    }
    return books;
};