import { DataTypes, Sequelize } from 'sequelize';
import { Author } from '../../models/Author.js';

// Mock the sequelize instance
const sequelizeMock = new Sequelize('sqlite::memory:');

describe('Author Model', () => {
    // Initialize the model with the mocked sequelize instance
    beforeAll(() => {
        Author.init(
            {
                author_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                full_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
            },
            { sequelize: sequelizeMock, modelName: 'Author', timestamps: false }
        );
    });

    it('should be defined', () => {
        expect(Author).toBeDefined();
    });

    it('should have correct attributes', () => {
        const attributes = Author.getAttributes();
        expect(attributes.author_id).toBeDefined();
        expect(attributes.author_id.type).toEqual(DataTypes.INTEGER());
        expect(attributes.author_id.allowNull).toBe(false);
        expect(attributes.author_id.primaryKey).toBe(true);

        expect(attributes.full_name).toBeDefined();
        expect(attributes.full_name.type).toEqual(DataTypes.STRING());
        expect(attributes.full_name.allowNull).toBe(false);
        expect(attributes.full_name.unique).toBe(true);
    });
});
