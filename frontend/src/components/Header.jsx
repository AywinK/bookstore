import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Header = () => {

    const renderOption = (props, option) => (
        <li {...props}
            style={{
                display: "flex",
                alignItems: "center",
            }}>
            <p
                style={{
                    wordBreak: "break-word",
                    width: "80%"
                }}
            >{option.label}</p>
            <Button
                variant="outlined"
                style={{
                    justifySelf: "flex-end"
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
        </li>
    );

    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    console.log(searchResults);
    console.log("selectedVal", selectedValue)

    useEffect(() => {

        const fetchRequest = keyword ? `http://localhost:3001/book/search?search=${keyword}` : "http://localhost:3001/books"
        fetch(fetchRequest)
            .then(res => res.json())
            .then(data => {
                setSearchResults(() => data.map((book, index) => (index < 5 && { ...book, label: book.book_title })).filter(el => el));
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }, [keyword]);


    return (
        <AppBar position="static" sx={{
            paddingTop: "5px",
            minWidth: "350px",
            maxWidth: "100%",
            margin: "0 auto",
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
        }}
            id="header"
        >
            <Toolbar>
                {/* Hamburger Menu Icon */}
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>

                {/* Search Bar with Autocomplete */}
                <div style={{ flexGrow: 1 }}>
                    <Autocomplete
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
                        getOptionLabel={(option) => (option?.label || "")}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search by title, ISBN, author or publisher"
                                variant="filled"
                                fullWidth
                                InputLabelProps={{
                                    ...params.InputLabelProps,
                                    style: {
                                        color: "whitesmoke"
                                    }
                                }}
                                InputProps={{
                                    ...params.InputProps,
                                    style: {
                                        color: "whitesmoke"
                                    }
                                }}
                            />
                        )}
                    />
                </div>

                {/* Basket Icon */}
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
