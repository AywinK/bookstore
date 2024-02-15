import { DataTypes, Model } from 'sequelize';
import { Category } from '../../models/Category.js';

describe('Category Model', () => {
    it('should be defined', () => {
        expect(Category).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Category.getAttributes();

        expect(attributes.category_id).toBeDefined();
        expect(attributes.category_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.category_id.allowNull).toBe(false);
        expect(attributes.category_id.primaryKey).toBe(true);

        expect(attributes.category_name).toBeDefined();
        expect(attributes.category_name.type).toEqual(DataTypes.STRING());
        expect(attributes.category_name.allowNull).toBe(false);
    });
});
