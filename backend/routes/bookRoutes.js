import express from "express";
const bookRoutes = express.Router();
import { getAllBooks, getFiveBooksBySearchQuery, getAllBooksByCategoryName } from "../controllers/bookController.js";

bookRoutes.get("/books", getAllBooks);
bookRoutes.get("/book/search", getFiveBooksBySearchQuery);
bookRoutes.get("/books/byCategory", getAllBooksByCategoryName);

export { bookRoutes };