/* eslint-disable react/prop-types */
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

const BookImageCardMedia = ({ book_title, imageUrl = null, isMobile }) => {
  return (
    <>
      {imageUrl ? (
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            gridRow: "1 / 3",
            gridColumn: "1",
            margin: "auto",
            minHeight: "175px",
            borderRadius: "16px",
          }}
          image={imageUrl}
          alt={book_title}
        />
      ) : (
        <Skeleton
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
              objectFit: "contain",
              gridRow: "1 / 3",
              gridColumn: "1",
              margin: "auto",
              minHeight: "175px",
              borderRadius: "16px",
            }}
            image={imageUrl}
            alt={book_title}
          />
        </Skeleton>
      )}
    </>
  );
};

export default BookImageCardMedia;
