import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContextProvider";
import { BasketActionTypes } from "../helperFunctions/BasketActionTypes";

const useBasketActions = () => {
    const { dispatch } = useContext(BasketContext);

    const handleAddBook = (book, quantity) => dispatch({
        type: BasketActionTypes.ADD_ITEM,
        payload: {
            book,
            quantity,
        }
    });

    const handleRemoveBook = (book) => dispatch({
        type: BasketActionTypes.REMOVE_ITEM,
        payload: {
            book,
        }
    });

    const handleUpdateBookQuantity = (book, quantity) => dispatch({
        type: BasketActionTypes.UPDATE_QUANTITY,
        payload: {
            book,
            quantity,
        }
    })

    return ({ handleAddBook, handleRemoveBook, handleUpdateBookQuantity });
}

export { useBasketActions };