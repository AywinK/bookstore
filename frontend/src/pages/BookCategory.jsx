import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import BookCard from "../components/BookCard";
import { Container } from "@mui/material";
import useServerFetch from "../customHooks/useServerFetch";

const BookCategory = () => {

    const { category_name } = useParams();

    const { data, loading, error } = useServerFetch(`books/byCategory?category_name=${category_name}`);

    if (loading) return <CircularProgress />

    if (error) return <>{error.message}<p>Please try again</p></>

    return (
        <Container
            component="main"
            style={{
                margin: "20px auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                "& > *": {
                    flex: "1",
                }
            }}
        >
            {data.map(book => <BookCard key={book.book_id} book={book} />)}
        </Container>
    )
}

export default BookCategory;