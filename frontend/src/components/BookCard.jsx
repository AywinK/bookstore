/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Skeleton, useMediaQuery, Rating } from '@mui/material';
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {

    const isMobile = useMediaQuery("(max-width: 688px)")

    const { book_id, book_title, isbn, price, book_description, stock_quantity, average_ratings, count_ratings, author, publisher } = book;

    return (
        <>

            <Card sx={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gridTemplateRows: "4fr 1fr",
                gap: "10px",
                aspectRatio: "170/193",
                maxWidth: "600px",
                padding: "10px",
                margin: "auto",
            }}
                elevation={7}
            >
                {book.imageUrl ? <CardMedia
                    component="img"
                    sx={{
                        objectFit: 'cover',
                        gridRow: "1/ span 2",
                        gridColumn: "1",
                        // aspectRatio: "148/193"
                    }}
                    width="150px"
                    image={book.imageUrl}
                    alt={book.book_title}
                />
                    :
                    (<Skeleton
                        variant="rounded"
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'cover',
                                gridRow: "1/ span 2",
                                gridColumn: "1",
                                // aspectRatio: "148/193"
                            }}
                            width="150px"
                            image={book.imageUrl}
                            alt={book.book_title}
                        />
                    </Skeleton>)
                }
                <CardContent sx={{
                    gridColumn: "2",
                    gridRow: "1",
                    display: "flex",
                    flexDirection: "column",
                    flex: '1 0 auto',
                    textAlign: "start",
                    textOverflow: "ellipsis"
                }}>
                    <Typography  variant="h5" component="h2">
                        {book.book_title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {book.author}
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",

                        }}
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                    >
                        {average_ratings}
                        <Rating value={average_ratings} readOnly />
                        ({book.count_ratings}
                        )
                    </Typography>

                    <Typography variant="body1" color="text.primary">
                        £{parseFloat(book.price).toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    gridColumn: "1/-1",
                    gridRow: "2",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    display: "grid",
                    gridTemplateRows: "1fr",
                    gridTemplateColumns: "1fr 2fr",
                }}>
                    <Button size="small" color="secondary" variant="contained">
                        Add to Basket
                    </Button>
                    <Button component={Link} size="small" color="primary" to={`/books/${book_id}`}>
                        More Information
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default BookCard;