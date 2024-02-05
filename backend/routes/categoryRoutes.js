import express from "express";
import { getAllCategories } from "../controllers/categoryController.js";
const categoryRoutes = express.Router();

categoryRoutes.get("/categories", getAllCategories);

export { categoryRoutes };