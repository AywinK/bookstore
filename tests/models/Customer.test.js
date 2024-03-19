import { DataTypes, Model } from 'sequelize';
import { Customer } from '../../models/Customer.js';

describe('Customer Model', () => {
    it('should be defined', () => {
        expect(Customer).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Customer.getAttributes();

        expect(attributes.customer_id).toBeDefined();
        expect(attributes.customer_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.customer_id.allowNull).toBe(false);
        expect(attributes.customer_id.primaryKey).toBe(true);

        expect(attributes.first_name).toBeDefined();
        expect(attributes.first_name.type).toEqual(DataTypes.STRING());

        expect(attributes.last_name).toBeDefined();
        expect(attributes.last_name.type).toEqual(DataTypes.STRING());

        expect(attributes.email).toBeDefined();
        expect(attributes.email.type).toEqual(DataTypes.STRING());
        expect(attributes.email.allowNull).toBe(false);
        expect(attributes.email.unique).toBe(true);
    });
});
