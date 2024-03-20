import { AppBar, Toolbar, List, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import HideHeaderOnScroll from "./HideHeaderOnScroll";
import BasketButton from "./BasketButton";
import HamburgerMenuButton from "./HamburgerMenuButton";
import { serverLink } from "../siteData/serverLink.json";
import AddToBasket from "./AddToBasketButton";

const Header = () => {
  const renderOption = (props, option) => (
    <List
      {...props}
    >
      <Typography
        variant="body2"
        sx={{
          wordBreak: "break-word",
          width: "80%",
        }}
      >
        {option.label}
      </Typography>
      {option.label !== "No search results found" && (
        <AddToBasket book={(() => {
          // eslint-disable-next-line no-unused-vars
          const { label, ...rest } = option;
          return rest;
        })()
        }
        />
      )}
    </List>
  );

  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchRequest =
      keyword && `${serverLink}book/search?search=${keyword}`; //
    if (keyword.length > 0) {
      setLoading(true);
      setSearchResults([]);
      fetch(fetchRequest)
        .then((res) => res.json())
        .then((data) => {
          if (isMounted) {
            setSearchResults(() =>
              data
                .map(
                  (book, index) =>
                    index < 5 && { ...book, label: book.book_title }
                )
                .filter((el) => el)
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
    return () => {
      isMounted = false;
      setLoading(false);
    }
  }, [keyword]);

  return (
    <HideHeaderOnScroll>
      <AppBar position="fixed" id="header">
        <Toolbar>
          {/* Hamburger Menu Icon */}
          <HamburgerMenuButton />

          {/* Search Bar with Autocomplete */}
          <Autocomplete
            loading={loading}
            loadingText="Loading results..."
            sx={{ flexGrow: "1" }}
            groupBy={option => option?.author || option.publisher}
            getOptionDisabled={(option) =>
              option.label === "No search results found"
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
            onSelect={() => setSelectedValue("")}
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

          {/* Basket Icon */}
          <BasketButton />
        </Toolbar>
      </AppBar>
    </HideHeaderOnScroll>
  );
};

export default Header;
