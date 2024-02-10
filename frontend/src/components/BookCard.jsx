/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Skeleton,
  useMediaQuery,
  Rating,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import BookImageCardMedia from "./BookImageCardMedia";
import BookCardContent from "./BookCardContent";
import CardContentBookRatingsInfo from "./CardContentBookRatingsInfo";
import BookCardContentAuthorPublisher from "./BookCardContentAuthorPublisher";
import BookCardContentPrice from "./BookCardContentPrice";
import BookCardContentTitle from "./BookCardContentTitle";

const BookCard = ({ book }) => {
  const isMobile = useMediaQuery("(max-width: 688px)");

  const {
    book_id,
    book_title,
    // isbn,
    price,
    // book_description,
    // stock_quantity,
    average_ratings,
    count_ratings,
    author,
    publisher,
    publication_year,
    imageUrl,
  } = book;

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
            padding: "10px 5px 20px",
          },
        }}
        elevation={5}
      >
        <BookImageCardMedia
          isMobile={isMobile}
          imageUrl={imageUrl}
          book_title={book_title}
        />

        <BookCardContent>
          <BookCardContentTitle isMobile={isMobile} book_title={book_title} />

          <BookCardContentAuthorPublisher
            author={author}
            publisher={publisher}
            publication_year={publication_year}
          />

          <CardContentBookRatingsInfo
            count_ratings={count_ratings}
            average_ratings={average_ratings}
          />

          <BookCardContentPrice price={price} />
        </BookCardContent>

        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& > *": {
              flex: isMobile ? "1" : "",
            },
          }}
        >
          <Button
            size={isMobile ? "small" : "large"}
            color="secondary"
            variant="contained"
          >
            Add to Basket
          </Button>
          <Button component={Link} color="primary" to={`/books/${book_id}`}>
            <InfoIcon fontSize={isMobile ? "medium" : "large"} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BookCard;
