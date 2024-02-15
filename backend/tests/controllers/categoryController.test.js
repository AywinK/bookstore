import { getAllCategories } from '../../controllers/categoryController.js';
import { Category } from '../../models/Category.js';
import { jest } from "@jest/globals";

// Mocking Sequelize's findAll method
jest.mock('../../models/Category.js', () => ({
    findAll: jest.fn(),
}));

describe('getAllCategories', () => {
    it('should return all categories', async () => {
        // Sample categories data
        const categoriesData = [
            { category_id: 1, category_name: 'Category 1' },
            { category_id: 2, category_name: 'Category 2' },
        ];

        // Mock the findAll method to return sample categories data using jest.spyOn and mockImplementation
        jest.spyOn(Category, 'findAll').mockImplementation(() => Promise.resolve(categoriesData));

        // Mock request and response objects
        const req = {};
        const res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };

        // Call the getAllCategories function
        await getAllCategories(req, res);

        // Verify that the response status is 200
        expect(res.status).toHaveBeenCalledWith(200);

        // Verify that the response JSON contains the expected categories
        expect(res.json).toHaveBeenCalledWith(categoriesData.map(category => ({
            category_id: category.category_id,
            category_name: category.category_name,
        })));
    });

    it('should return 500 status when an error occurs', async () => {
        // Mock findAll method to throw an error
        jest.spyOn(Category, 'findAll').mockImplementation(() => Promise.reject(new Error('Database error')));

        // Mock request and response objects
        const req = {};
        const res = {
            status: jest.fn(() => res),
            json: jest.fn(),
        };

        // Call the getAllCategories function
        await getAllCategories(req, res);

        // Verify that the response status is 500
        expect(res.status).toHaveBeenCalledWith(500);

        // Verify that the response JSON contains the error message
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
    });
});
