import { DataTypes, Model } from 'sequelize';
import { Publisher } from '../../models/Publisher.js';

describe('Publisher Model', () => {
    it('should be defined', () => {
        expect(Publisher).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Publisher.getAttributes();

        expect(attributes.publisher_id).toBeDefined();
        expect(attributes.publisher_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.publisher_id.allowNull).toBe(false);
        expect(attributes.publisher_id.primaryKey).toBe(true);

        expect(attributes.publisher_name).toBeDefined();
        expect(attributes.publisher_name.type).toEqual(DataTypes.STRING());
        expect(attributes.publisher_name.allowNull).toBe(false);
    });
});
