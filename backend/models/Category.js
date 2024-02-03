import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class Category extends Model { };

Category.init({
    publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "Category", timestamps: false });

export { Category };