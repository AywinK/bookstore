import { DataTypes } from 'sequelize';
import { Book } from '../../models/Book.js';

describe('Book Model', () => {
    it('should be defined', () => {
        expect(Book).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Book.getAttributes();

        expect(attributes.book_id).toBeDefined();
        expect(attributes.book_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.book_id.allowNull).toBe(false);
        expect(attributes.book_id.primaryKey).toBe(true);

        expect(attributes.book_title).toBeDefined();
        expect(attributes.book_title.type).toEqual(DataTypes.STRING());

        expect(attributes.isbn).toBeDefined();
        expect(attributes.isbn.type).toEqual(DataTypes.STRING());
        expect(attributes.isbn.allowNull).toBe(false);
        expect(attributes.isbn.unique).toBe(true);

        expect(attributes.publication_year).toBeDefined();
        expect(attributes.publication_year.type).toEqual(DataTypes.SMALLINT());

        expect(attributes.price).toBeDefined();
        expect(attributes.price.type).toEqual(DataTypes.DECIMAL());
        expect(attributes.price.allowNull).toBe(false);

        expect(attributes.book_description).toBeDefined();
        expect(attributes.book_description.type).toEqual(DataTypes.STRING());

        expect(attributes.stock_quantity).toBeDefined();
        expect(attributes.stock_quantity.type).toEqual(DataTypes.INTEGER());

        expect(attributes.average_ratings).toBeDefined();
        expect(attributes.average_ratings.type).toEqual(DataTypes.DECIMAL());

        expect(attributes.count_ratings).toBeDefined();
        expect(attributes.count_ratings.type).toEqual(DataTypes.INTEGER());

        expect(attributes.author_id).toBeDefined();
        expect(attributes.author_id.type).toEqual(DataTypes.INTEGER());

        expect(attributes.publisher_id).toBeDefined();
        expect(attributes.publisher_id.type).toEqual(DataTypes.INTEGER());
    });
});
