import { Book } from "../models/Book";

const updateBookStockQuantity = async (book_id, order_quantity) => {
    try {
        const book = await Book.findByPk(book_id);

        if (!book) throw new Error("Book not found");

        book.stock_quantity = Math.max(0, book.stock_quantity - order_quantity);

        await book.save();

        return book;
    } catch (err) {
        throw new Error(err);
    }
}

export { updateBookStockQuantity };