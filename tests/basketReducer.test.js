import { BasketActionTypes } from "../src/helperFunctions/BasketActionTypes";
import { basketReducer } from "../src/reducers/basketReducer";

describe('basketReducer', () => {
    it('should add an item to the basket', () => {
        const initialState = [];
        const action = {
            type: BasketActionTypes.ADD_ITEM,
            payload: { book: { book_id: 1, name: "Book 1" }, quantity: 2 }
        };
        const newState = basketReducer(initialState, action);
        expect(newState).toEqual([{ book_id: 1, name: "Book 1", quantity: 2 }]);
    });

    it('should update quantity of an existing item in the basket', () => {
        const initialState = [{ book_id: 1, name: "Book 1", quantity: 2 }];
        const action = {
            type: BasketActionTypes.UPDATE_QUANTITY,
            payload: { book: { book_id: 1, name: "Book 1" }, quantity: 3 }
        };
        const newState = basketReducer(initialState, action);
        expect(newState).toEqual([{ book_id: 1, name: "Book 1", quantity: 3 }]);
    });

    it('should remove an item from the basket', () => {
        const initialState = [{ book_id: 1, name: "Book 1", quantity: 2 }];
        const action = {
            type: BasketActionTypes.REMOVE_ITEM,
            payload: { book: { book_id: 1, name: "Book 1" } }
        };
        const newState = basketReducer(initialState, action);
        expect(newState).toEqual([]);
    });

    it('should throw an error for unknown action type', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN_ACTION' };
        expect(() => basketReducer(initialState, action)).toThrow('Unknown action type: UNKNOWN_ACTION');
    });
});
