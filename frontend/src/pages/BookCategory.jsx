import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import BookCard from "../components/BookCard";
import { Container } from "@mui/material";

const BookCategory = () => {

    const { category_name } = useParams();

    const [booksData, setBooksData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/books/byCategory?category_name=${category_name}`)
            .then(res => res.json())
            .then(data => setBooksData(data))
            .catch(err => console.error(err));
    }, [category_name]);

    console.log(booksData);

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
            {booksData ? booksData.map(book => <BookCard key={book.book_id} book={book} />) : <CircularProgress />}
        </Container>
    )
}

export default BookCategory;