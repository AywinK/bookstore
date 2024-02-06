import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class Book_Category extends Model { };

Book_Category.init({
    book_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { sequelize, modelName: "Book_Category", timestamps: false, indexes: [{ unique: true, fields: ["book_id", "category_id"] }] });

export { Book_Category };