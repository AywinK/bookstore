import { Category } from '../../customModels/Category.js';

describe('Category Class', () => {
    it('should create a new instance of Category with correct properties', () => {
        // Create a sample category object
        const category = new Category(
            1,                  // category_id
            'Sample Category'   // category_name
        );

        // Verify the properties
        expect(category.category_id).toBe(1);
        expect(category.category_name).toBe('Sample Category');
    });
});
