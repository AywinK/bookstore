import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";
import { Customer } from "./Customer.js";

class Order extends Model { };

Order.init({
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_payment_amount: {
        type: DataTypes.DECIMAL
    },
    is_paid: {
        type: DataTypes.BOOLEAN
    },
    delivery_address_line_1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    delivery_address_line_2: {
        type: DataTypes.STRING
    },
    postcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER
    }
}, { sequelize, modelName: "Order", timestamps: false });

Customer.hasMany(Order, { foreignKey: "customer_id" });
Order.belongsTo(Customer, { foreignKey: "customer_id" });

export  { Order };