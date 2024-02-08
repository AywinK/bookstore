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
        res.status(500).json({ error: "Internal Server Error" });
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

        res.status(200).json(books.map(el => new BookClass(el.book_id, el.book_title, el.isbn, el.publication_year, el.price, el.book_description, el.stock_quantity, el.average_ratings, el.count_ratings, el.Author.full_name, el.Publisher.publisher_name)));

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
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

        res.status(200).json(books.map(el => new BookClass(el.book_id, el.book_title, el.isbn, el.publication_year, el.price, el.book_description, el.stock_quantity, el.average_ratings, el.count_ratings, el.Author.full_name, el.Publisher.publisher_name)));


    } catch (err) {
        console.error("Error getting books by category name", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export { getAllBooks, getFiveBooksBySearchQuery, getAllBooksByCategoryName };