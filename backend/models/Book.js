import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";
import { Order_Detail } from "./Order_Detail.js";
import { Book_Category } from "./Book_Category.js";
import { Author } from "./Author.js";
import { Publisher } from "./Publisher.js";

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

Author.hasMany(Book, { foreignKey: "author_id" });
Book.belongsTo(Author, { foreignKey: "author_id" });

Publisher.hasMany(Book, { foreignKey: "publisher_id" });
Book.belongsTo(Publisher, { foreignKey: "publisher_id" });

Book_Category.hasMany(Book, { foreignKey: "book_id" });
Book.belongsTo(Book_Category, { foreignKey: "book_id" });

Order_Detail.hasMany(Book, { foreignKey: "book_id" });
Book.belongsTo(Order_Detail, { foreignKey: "book_id" });


export { Book };