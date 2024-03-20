import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContextProvider";

const useBasket = () => {
    const { basket } = useContext(BasketContext);
    return ({ basket });
}

export { useBasket };