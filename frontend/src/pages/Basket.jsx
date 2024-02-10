import { useEffect, useState } from "react";
import BasketBookCard from "../components/BasketBookCard";
import { Container } from "@mui/material";

const Basket = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/books/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container
      sx={{
        "& > *": {
          margin: "10px auto",
        },
      }}
    >
      <h1>Basket page</h1>
      {data?.map((book) => (
        <BasketBookCard key={book?.book_id} book={book} />
      ))}
    </Container>
  );
};

export default Basket;
