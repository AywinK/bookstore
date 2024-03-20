import { BasketActionTypes } from "../helperFunctions/BasketActionTypes";

function basketReducer(state, action) {
    switch (action.type) {
        case BasketActionTypes.ADD_ITEM: {
            const { book, quantity } = action.payload;
            const bookExistsInState = state.some(({ book_id }) => book_id === book.book_id);
            return (bookExistsInState ?
                state.map(bookInBasket => (
                    bookInBasket.book_id === book.book_id ?
                        ({ ...bookInBasket, quantity: bookInBasket.quantity + quantity }) :
                        bookInBasket)) :
                [...state, { ...book, quantity }]);
        }

        case BasketActionTypes.UPDATE_QUANTITY: {
            const { book, quantity } = action.payload;
            return state.map(bookInBasket =>
                bookInBasket.book_id === book.book_id ? ({ ...bookInBasket, quantity: quantity }) : bookInBasket);
        }

        case BasketActionTypes.REMOVE_ITEM: {
            const { book } = action.payload;
            return state.filter(({ book_id }) => book_id !== book.book_id);
        }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export { basketReducer };