import express from "express";
const bookRoutes = express.Router();
import { getAllBooks } from "../controllers/bookController.js";

bookRoutes.get("/books", getAllBooks);

export { bookRoutes };