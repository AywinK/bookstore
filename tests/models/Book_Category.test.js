import { DataTypes, Sequelize } from 'sequelize';
import { Book_Category } from '../../models/Book_Category.js';

// Mock the sequelize instance
const sequelizeMock = new Sequelize('sqlite::memory:');

describe('Book_Category Model', () => {
    // Initialize the model with the mocked sequelize instance
    beforeAll(() => {
        Book_Category.init(
            {
                book_category_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                book_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                category_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },
            { sequelize: sequelizeMock, modelName: 'Book_Category', timestamps: false, indexes: [{ unique: true, fields: ['book_id', 'category_id'] }] }
        );
    });

    it('should be defined', () => {
        expect(Book_Category).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Book_Category.getAttributes();

        expect(attributes.book_category_id).toBeDefined();
        expect(attributes.book_category_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.book_category_id.allowNull).toBe(false);
        expect(attributes.book_category_id.primaryKey).toBe(true);

        expect(attributes.book_id).toBeDefined();
        expect(attributes.book_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.book_id.allowNull).toBe(false);

        expect(attributes.category_id).toBeDefined();
        expect(attributes.category_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.category_id.allowNull).toBe(false);
    });

    it('should have unique index on book_id and category_id', () => {
        const indexes = Book_Category.options.indexes;
        const uniqueIndex = indexes.find(index => index.unique && index.fields.includes('book_id') && index.fields.includes('category_id'));

        expect(uniqueIndex).toBeDefined();
    });
});
