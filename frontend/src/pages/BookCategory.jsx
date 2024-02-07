import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

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
        <>
            {booksData ? booksData.map(book => (<p style={{margin: "50px auto", border: "0.25rem solid red"}} key={book.book_id}>{book.book_title}</p>)) : <CircularProgress />}
        </>
    )
}

export default BookCategory;