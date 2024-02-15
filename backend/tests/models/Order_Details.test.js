import { DataTypes, Model } from 'sequelize';
import { Order_Detail } from '../../models/Order_Detail.js';
import { Order } from '../../models/Order.js';

describe('Order_Detail Model', () => {
    it('should be defined', () => {
        expect(Order_Detail).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Order_Detail.getAttributes();

        expect(attributes.order_detail_id).toBeDefined();
        expect(attributes.order_detail_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.order_detail_id.allowNull).toBe(false);
        expect(attributes.order_detail_id.primaryKey).toBe(true);

        expect(attributes.quantity).toBeDefined();
        expect(attributes.quantity.type).toEqual(DataTypes.INTEGER());
        expect(attributes.quantity.allowNull).toBe(false);

        expect(attributes.total_price).toBeDefined();
        expect(attributes.total_price.type).toEqual(DataTypes.DECIMAL());
        expect(attributes.total_price.allowNull).toBe(false);

        expect(attributes.book_id).toBeDefined();
        expect(attributes.book_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.book_id.allowNull).toBe(false);

        expect(attributes.order_id).toBeDefined();
        expect(attributes.order_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.order_id.allowNull).toBe(false);
    });

    it('should associate with Order', () => {
        expect(Order_Detail.associations.Order).toBeDefined();
        expect(Order_Detail.associations.Order.target).toBe(Order);
        expect(Order_Detail.associations.Order.foreignKey).toBe('order_id');
    });
});
