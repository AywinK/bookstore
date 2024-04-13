import BasketBookCard from "../components/BasketBookCard";
import Container from "@mui/material/Container";
import { useBasket } from "../customHooks/useBasket";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";

const Basket = () => {

  const { basket } = useBasket();

  return (
    <Container
      sx={{
        "& > *": {
          margin: "15px auto",
        },
      }}
    >
      <h1>Basket page</h1>
      {basket.length ?
        <>
          <Link to="/checkout/delivery">
            <Button
              type="button"
              sx={{
                borderRadius: "24px",
                minWidth: "min(100%, 360px)",
                fontSize: "1.25em",
              }}
              size="large"
              variant="contained"
              color="warning"
            >Checkout
            </Button>
          </Link>
          {basket?.map((book) => (
            <BasketBookCard key={book?.book_id} book={book} />
          ))}
        </> :
        <p>Basket is empty!</p>
      }
    </Container>
  );
};

export default Basket;
