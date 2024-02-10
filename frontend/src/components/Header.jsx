import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import HideHeaderOnScroll from "./HideHeaderOnScroll";
import BasketButton from "./BasketButton";

const Header = () => {
  const renderOption = (props, option) => (
    <li
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        style={{
          wordBreak: "break-word",
          width: "80%",
        }}
      >
        {option.label}
      </p>
      {option.label !== "Start typing to search for books" && (
        <Button
          variant="outlined"
          style={{
            justifySelf: "flex-end",
          }}
          onTouchEnd={() => {
            // Handle button click here
            console.table(option);
            setSearchResults([]);
            setKeyword("");
          }}
          onClick={() => {
            // Handle button click here
            console.table(option);
            setSearchResults([]);
            setKeyword("");
          }}
        >
          Add to Basket
        </Button>
      )}
    </li>
  );

  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([
    { label: "Start typing to search for books" },
  ]);
  const [selectedValue, setSelectedValue] = useState("");

  console.log(searchResults);
  console.log("selectedVal", selectedValue);

  useEffect(() => {
    const fetchRequest =
      keyword && `http://localhost:3001/book/search?search=${keyword}`; // : "http://localhost:3001/books"
    if (keyword.length > 0) {
      fetch(fetchRequest)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(() =>
            data
              .map(
                (book, index) =>
                  index < 5 && { ...book, label: book.book_title }
              )
              .filter((el) => el)
          );
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }, [keyword]);

  return (
    <HideHeaderOnScroll>
      <AppBar position="fixed" id="header">
        <Toolbar>
          {/* Hamburger Menu Icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Search Bar with Autocomplete */}
          <div style={{ flexGrow: 1 }}>
            <Autocomplete
              getOptionDisabled={(option) =>
                option.label === "Start typing to search for books"
              }
              renderOption={renderOption}
              defaultValue={"Search by title, ISBN, author or publisher"}
              freeSolo
              id="search-bar"
              value={selectedValue}
              onChange={(e, val) => setSelectedValue(val)}
              inputValue={keyword}
              onInputChange={(e, val) => {
                setKeyword(val);
              }}
              onClose={() => setKeyword("")}
              options={searchResults}
              filterOptions={(x) => x}
              getOptionLabel={(option) => option?.label || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by title, ISBN, author or publisher"
                  variant="filled"
                  fullWidth
                  InputLabelProps={{
                    ...params.InputLabelProps,
                    style: {
                      color: "whitesmoke",
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    style: {
                      color: "whitesmoke",
                    },
                  }}
                />
              )}
            />
          </div>

          {/* Basket Icon */}
          <BasketButton />
        </Toolbar>
      </AppBar>
    </HideHeaderOnScroll>
  );
};

export default Header;
