import { Book } from '../../customModels/Book.js';

describe('Book Class', () => {
    it('should create a new instance of Book with correct properties', () => {
        // Create a sample book object
        const book = new Book(
            1,                          // book_id
            'Sample Book',              // book_title
            '1234567890',               // isbn
            2022,                       // publication_year
            19.99,                      // price
            'Sample description',       // book_description
            100,                        // stock_quantity
            4.5,                        // average_ratings
            1000,                       // count_ratings
            'Sample Author',            // author
            'Sample Publisher'          // publisher
        );

        // Verify the properties
        expect(book.book_id).toBe(1);
        expect(book.book_title).toBe('Sample Book');
        expect(book.isbn).toBe('1234567890');
        expect(book.publication_year).toBe(2022);
        expect(book.price).toBe(19.99);
        expect(book.book_description).toBe('Sample description');
        expect(book.stock_quantity).toBe(100);
        expect(book.average_ratings).toBe(4.5);
        expect(book.count_ratings).toBe(1000);
        expect(book.author).toBe('Sample Author');
        expect(book.publisher).toBe('Sample Publisher');
    });
});
