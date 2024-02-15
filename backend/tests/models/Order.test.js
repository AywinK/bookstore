import { DataTypes, Model } from 'sequelize';
import { Order } from '../../models/Order.js';
import { Customer } from '../../models/Customer.js';

describe('Order Model', () => {
    it('should be defined', () => {
        expect(Order).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Order.getAttributes();

        expect(attributes.order_id).toBeDefined();
        expect(attributes.order_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.order_id.allowNull).toBe(false);
        expect(attributes.order_id.primaryKey).toBe(true);

        expect(attributes.order_date).toBeDefined();
        expect(attributes.order_date.type).toEqual(DataTypes.DATE());
        expect(attributes.order_date.allowNull).toBe(false);

        expect(attributes.total_payment_amount).toBeDefined();
        expect(attributes.total_payment_amount.type).toEqual(DataTypes.DECIMAL());

        expect(attributes.is_paid).toBeDefined();
        expect(attributes.is_paid.type).toEqual(DataTypes.BOOLEAN());

        expect(attributes.delivery_address_line_1).toBeDefined();
        expect(attributes.delivery_address_line_1.type).toEqual(DataTypes.STRING());
        expect(attributes.delivery_address_line_1.allowNull).toBe(false);

        expect(attributes.delivery_address_line_2).toBeDefined();
        expect(attributes.delivery_address_line_2.type).toEqual(DataTypes.STRING());

        expect(attributes.postcode).toBeDefined();
        expect(attributes.postcode.type).toEqual(DataTypes.STRING());
        expect(attributes.postcode.allowNull).toBe(false);

        expect(attributes.customer_id).toBeDefined();
        expect(attributes.customer_id.type).toEqual(DataTypes.INTEGER());
    });

    it('should associate with Customer', () => {
        expect(Order.associations.Customer).toBeDefined();
        expect(Order.associations.Customer.target).toBe(Customer);
        expect(Order.associations.Customer.foreignKey).toBe('customer_id');
    });
});
