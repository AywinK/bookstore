import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index";

class Book extends Model { };

Book.init({
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    book_title: {
        type: DataTypes.STRING,
    },
    isbn: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    publication_year: {
        type: DataTypes.SMALLINT
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    book_description: {
        type: DataTypes.STRING,
    },
    stock_quantity: {
        type: DataTypes.INTEGER
    },
    average_ratings: {
        type: DataTypes.DECIMAL
    },
    count_ratings: {
        type: DataTypes.INTEGER
    },
    author_id: {
        type: DataTypes.INTEGER
    },
    publisher_id: {
        type: DataTypes.INTEGER
    }
}, { sequelize, modelName: "Book", timestamps: false });

module.exports = { Book };