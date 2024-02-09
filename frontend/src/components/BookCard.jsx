/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Skeleton, useMediaQuery, Rating } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {

    const isMobile = useMediaQuery("(max-width: 688px)")

    const { book_id, book_title, isbn, price, book_description, stock_quantity, average_ratings, count_ratings, author, publisher, publication_year } = book;

    return (
        <>

            <Card
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gridTemplateRows: "4fr 1fr",
                    gap: "10px",
                    maxWidth: "600px",
                    margin: "auto",
                    width: "100%",
                    borderRadius: "8px",
                    "& > *": {
                        padding: "10px 5px 20px"
                    }
                }}
                elevation={5}
            >
                {book.imageUrl ? <CardMedia
                    component="img"
                    sx={{
                        objectFit: 'contain',
                        gridRow: "1 / 3",
                        gridColumn: "1",
                        margin: "auto",
                        minHeight: "175px",
                        borderRadius: "16px",
                    }}
                    image={book?.imageUrl}
                    alt={book.book_title}
                />
                    :
                    (<Skeleton
                        variant="rounded"
                        sx={{
                            gridRow: "1 / 3",
                            gridColumn: "1",
                            margin: "auto 5px",
                            maxHeight: isMobile ? "100px" : "unset",
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                gridRow: "1 / 3",
                                gridColumn: "1",
                                margin: "auto",
                                minHeight: "175px",
                                borderRadius: "16px",
                            }}
                            image={book?.imageUrl}
                            alt={book.book_title}
                        />
                    </Skeleton>)
                }

                <CardContent sx={{
                    gridColumn: "2",
                    gridRow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: '1 0 auto',
                    textAlign: "start",
                    wordBreak: "break-word",
                    minHeight: "100%",
                }}>
                    <Typography
                        variant="h5"
                        component="h2"
                        fontSize={isMobile ? "1.25em" : "inital"}
                    >
                        {book.book_title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                    >
                        by {book.author} | Publisher: {publisher} ({publication_year})
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexWrap: "wrap"
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {average_ratings}
                        <Rating value={average_ratings} readOnly />
                        ({book.count_ratings}
                        )
                    </Typography>

                    <Typography
                        variant="body1"
                        fontSize="1.75em"
                        color="text.primary"
                        sx={{
                            marginTop: "auto",
                            "&::before": {
                                content: "'£'",
                                verticalAlign: "super",
                                marginRight: "2px",
                                fontSize: "0.9em",
                            },
                            "&::after": {
                                content: `"${book.price.toFixed(2).split(".")[1] || "00"}"`,
                                verticalAlign: "super",
                                marginLeft: "1px",
                                fontSize: "0.75em",
                            }
                        }}
                        gutterBottom
                    >
                        {String(book.price).split(".")[0]}
                    </Typography>
                </CardContent>

                <CardActions sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    "& > *": {
                        flex: "1",
                    },
                }}>
                    <Button size={isMobile ? "small" : "large"} color="secondary" variant="contained">
                        Add to Basket
                    </Button>
                    <Button component={Link} color="primary" to={`/books/${book_id}`}>
                        <InfoIcon fontSize={isMobile ? "medium" : "large"} />
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default BookCard;