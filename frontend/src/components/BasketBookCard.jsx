/* eslint-disable react/prop-types */
import BookImageCardMedia from "./BookImageCardMedia";
import BookCardContent from "./BookCardContent";
import BookCardContentAuthorPublisher from "./BookCardContentAuthorPublisher";
import BookCardContentPrice from "./BookCardContentPrice";
import BookCardContentTitle from "./BookCardContentTitle";
import BookCardActions from "./BookCardActions";
import StandardCardLayout from "./StandardCardLayout";
import DispatchInfoCardContent from "./DispatchInfoCardContent";
import DeleteItemInBasket from "./DeleteItemInBasket";
import UpdateBookQuantityCounter from "./UpdateBookQuantityCounter";

const BasketBookCard = ({ book }) => {
  const {
    book_id,
    book_title,
    price,
    author,
    publisher,
    publication_year,
    imageUrl,
    quantity,
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
        <DispatchInfoCardContent />
        <BookCardContentPrice price={price} />
      </BookCardContent>

      <BookCardActions>
        <UpdateBookQuantityCounter book={book} />
        <DeleteItemInBasket book={book} />
      </BookCardActions>
    </StandardCardLayout>
  );
};

export default BasketBookCard;
