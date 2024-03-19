import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";
import { Order } from "./Order.js";

class Order_Detail extends Model { };

Order_Detail.init({
    order_detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { sequelize, modelName: "Order_Detail", timestamps: false });

Order.hasMany(Order_Detail, { foreignKey: "order_id" });
Order_Detail.belongsTo(Order, { foreignKey: "order_id" });

export  { Order_Detail };