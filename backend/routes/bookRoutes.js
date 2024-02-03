import express from "express";
const bookRoutes = express.Router();
import { getAllBooks, getFiveBooksBySearchQuery } from "../controllers/bookController.js";

bookRoutes.get("/books", getAllBooks);
bookRoutes.get("/book/search", getFiveBooksBySearchQuery);

export { bookRoutes };