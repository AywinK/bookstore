import BasketBookCard from "../components/BasketBookCard";
import { Container } from "@mui/material";
import { useBasket } from "../customHooks/useBasket";

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
       basket?.map((book) => (
        <BasketBookCard key={book?.book_id} book={book} />
      )):
      <p>Basket is empty!</p>
    }
    </Container>
  );
};

export default Basket;
