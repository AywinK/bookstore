import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

const BookPage = () => {
  const { book_id } = useParams();

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${book_id}`)
      .then((res) => res.json())
      .then((data) => setBookData(data))
      .catch((err) => console.error(err));
  }, [book_id]);

  return (
    <Container>
      <h1>Work In Progress</h1>
      <p>{bookData ? JSON.stringify(bookData) : <CircularProgress />}</p>
    </Container>
  );
};

export default BookPage;
