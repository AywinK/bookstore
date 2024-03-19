
class Book {
    constructor(book_id, book_title, isbn, publication_year, price, book_description, stock_quantity, average_ratings, count_ratings, author, publisher) {
        this.book_id = book_id;
        this.book_title = book_title;
        this.isbn = isbn;
        this.publication_year = publication_year;
        this.price = price;
        this.book_description = book_description;
        this.stock_quantity = stock_quantity;
        this.average_ratings = average_ratings;
        this.count_ratings = count_ratings;
        this.author = author;
        this.publisher = publisher;

    }
}

export { Book };