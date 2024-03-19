import { Category } from "../models/Category.js";
import { Category as CategoryClass } from "../customModels/Category.js";

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            order: [["category_name"]]
        });
        res.status(200).json(categories.map(el => new CategoryClass(el.category_id, el.category_name)))
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });

    }
}

export { getAllCategories };