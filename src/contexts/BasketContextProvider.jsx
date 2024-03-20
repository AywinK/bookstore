import { createContext, useReducer } from "react";
import { basketReducer } from "../reducers/basketReducer";

const BasketContext = createContext(null);
const basketInitialState = [];

// eslint-disable-next-line react/prop-types
const BasketContextProvider = ({ children }) => {
    const [basket, dispatch] = useReducer(basketReducer, basketInitialState);

    const contextValue = {
        basket,
        dispatch,
    }

    return (
        <BasketContext.Provider value={contextValue}>
            {children}
        </BasketContext.Provider>
    )
}

export { BasketContextProvider, BasketContext };