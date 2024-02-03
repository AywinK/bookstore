import express from "express";
const bookRoutes = express.Router();
import { getAllBooks, getBooksByBookTitleSearchQuery } from "../controllers/bookController.js";

bookRoutes.get("/books", getAllBooks);
bookRoutes.get("/book/search", getBooksByBookTitleSearchQuery);

export { bookRoutes };