import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class Customer extends Model { };

Customer.init({
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize, modelName: "Customer", timestamps: false });

export { Customer };