import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import useServerFetch from "../customHooks/useServerFetch";

const BookPage = () => {
  const { book_id } = useParams();

  const { data, loading, error } = useServerFetch(`books/${book_id}`);

  if (loading) return <CircularProgress />

  if (error) return <>{error}<p>Please try again</p></>

  return (
    <Container>
      <h1>Work In Progress</h1>
      <p>{JSON.stringify(data)}</p>
    </Container>
  );
};

export default BookPage;
