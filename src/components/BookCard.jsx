/* eslint-disable react/prop-types */
import BookImageCardMedia from "./BookImageCardMedia";
import BookCardContent from "./BookCardContent";
import CardContentBookRatingsInfo from "./CardContentBookRatingsInfo";
import BookCardContentAuthorPublisher from "./BookCardContentAuthorPublisher";
import BookCardContentPrice from "./BookCardContentPrice";
import BookCardContentTitle from "./BookCardContentTitle";
import BookCardActions from "./BookCardActions";
import BookMoreInfoButton from "./BookMoreInfoButton";
import AddToBasketButton from "./AddToBasketButton";
import StandardCardLayout from "./StandardCardLayout";

const BookCard = ({ book }) => {
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
    <StandardCardLayout>
      <BookImageCardMedia imageUrl={imageUrl} book_title={book_title} />

      <BookCardContent>
        <BookCardContentTitle book_title={book_title} />
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

      <BookCardActions>
        <AddToBasketButton book={book} />
        <BookMoreInfoButton book_id={book_id} />
      </BookCardActions>
    </StandardCardLayout>
  );
};

export default BookCard;
