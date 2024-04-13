import { Book } from "../models/Book.js";
import { Author } from "../models/Author.js";
import { Publisher } from "../models/Publisher.js";
import { Category } from "../models/Category.js";
import { Book_Category } from "../models/Book_Category.js";
import { Book as BookClass } from "../customModels/Book.js";
import { Op } from "sequelize";

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll({
            include: [
                {
                    model: Author,
                    attributes: ["full_name"],
                },
                {
                    model: Publisher,
                    attributes: ["publisher_name"],
                }
            ]
        });
        res.status(200).json(books.map(el => new BookClass(el.book_id, el.book_title, el.isbn, el.publication_year, el.price, el.book_description, el.stock_quantity, el.average_ratings, el.count_ratings, el.Author.full_name, el.Publisher.publisher_name)));
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getFiveBooksBySearchQuery = async (req, res) => {

    const keyword = req.query.search;

    try {
        const books = await Book.findAll({
            where: {
                [Op.or]: [{
                    book_title: {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    isbn: {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    "$Author.full_name$": {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    "$Publisher.publisher_name$": {
                        [Op.like]: `%${keyword}%`
                    }
                }],
            },

            include: [
                {
                    model: Author,
                    attributes: ["full_name"],
                },
                {
                    model: Publisher,
                    attributes: ["publisher_name"],
                }
            ],
            limit: 5
        });
        //currently using shortcut so frontend doesn't crash on error. Autocomplete component is a mess
        !books.length ? res.status(404).json([{ book_title: "No search results found" }]) : res.status(200).json(books.map(el => new BookClass(el.book_id, el.book_title, el.isbn, el.publication_year, el.price, el.book_description, el.stock_quantity, el.average_ratings, el.count_ratings, el.Author.full_name, el.Publisher.publisher_name)));

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getAllBooksByCategoryName = async (req, res) => {
    try {
        const books = await Book.findAll({
            include: [
                {
                    model: Category,
                    where: { category_name: req.query.category_name },
                    through: { model: Book_Category, attributes: [] },
                },
                {
                    model: Author,
                    attributes: ["full_name"],
                },
                {
                    model: Publisher,
                    attributes: ["publisher_name"],
                }
            ],
        });

        !books.length ? res.status(404).json({ message: "Category not found" }) : res.status(200).json(books.map(el => new BookClass(el.book_id, el.book_title, el.isbn, el.publication_year, el.price, el.book_description, el.stock_quantity, el.average_ratings, el.count_ratings, el.Author.full_name, el.Publisher.publisher_name)));


    } catch (err) {
        console.error("Error getting books by category name", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getBookById = async (req, res) => {
    try {

        const book_id = Number(req.params.book_id)

        const book = await Book.findByPk(book_id, {
            include: [
                {
                    model: Author,
                    attributes: ["full_name"],
                },
                {
                    model: Publisher,
                    attributes: ["publisher_name"],
                }
            ],
        });

        !book ? res.status(404).json({ message: "Book not found" }) : res.status(200).json(new BookClass(book.book_id, book.book_title, book.isbn, book.publication_year, book.price, book.book_description, book.stock_quantity, book.average_ratings, book.count_ratings, book.Author.full_name, book.Publisher.publisher_name));


    } catch (err) {
        console.error("Error getting book by book_id", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getAllBooks, getFiveBooksBySearchQuery, getAllBooksByCategoryName, getBookById };