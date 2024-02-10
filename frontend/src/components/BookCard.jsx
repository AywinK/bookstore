/* eslint-disable react/prop-types */
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import BookImageCardMedia from "./BookImageCardMedia";
import BookCardContent from "./BookCardContent";
import CardContentBookRatingsInfo from "./CardContentBookRatingsInfo";
import BookCardContentAuthorPublisher from "./BookCardContentAuthorPublisher";
import BookCardContentPrice from "./BookCardContentPrice";
import BookCardContentTitle from "./BookCardContentTitle";
import BookCardActions from "./BookCardActions";
import BookMoreInfoButton from "./BookMoreInfoButton";
import AddToBasketButton from "./AddToBasketButton";

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

      <BookCardActions isMobile={isMobile}>
        <AddToBasketButton isMobile={isMobile} />
        <BookMoreInfoButton isMobile={isMobile} book_id={book_id} />
      </BookCardActions>
    </Card>
  );
};

export default BookCard;
