import { Book } from "../models/Book.js";

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { getAllBooks };