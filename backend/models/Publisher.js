import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index";

class Publisher extends Model { };

Publisher.init({
    publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    publisher_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "Publisher", timestamps: false });

module.exports = { Publisher };