import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class Author extends Model { };

Author.init({
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, { sequelize, modelName: "Author", timestamps: false });

export  { Author };