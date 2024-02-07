import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import BookCard from "../components/BookCard";

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
        <div
        style={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "20px",
        }}
        >
            {booksData ? booksData.map(book => <BookCard key={book.book_id} book={book} />) : <CircularProgress />}
        </div>
    )
}

export default BookCategory;