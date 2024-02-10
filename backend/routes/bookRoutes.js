import express from "express";
const bookRoutes = express.Router();
import { getAllBooks, getFiveBooksBySearchQuery, getAllBooksByCategoryName, getBookById } from "../controllers/bookController.js";

bookRoutes.get("/books", getAllBooks);
bookRoutes.get("/book/search", getFiveBooksBySearchQuery);
bookRoutes.get("/books/byCategory", getAllBooksByCategoryName);
bookRoutes.get("/books/:book_id", getBookById);

export { bookRoutes };