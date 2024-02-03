import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

const Header = () => {

    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        console.log("change triggered");
        if (keyword) {
            fetch(`http://localhost:3001/book/search?search=${keyword}`)
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    setSearchResults(() => data.map(book => ({ ...data, label: book.book_title })));
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        } else {
            fetch(`http://localhost:3001/books`)
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    setSearchResults(() => data.map(book => ({ ...data, label: book.book_title })));
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        }
    }, [keyword]);


    return (
        <AppBar position="static" sx={{width: "1000px"}}>
            <Toolbar>
                {/* Hamburger Menu Icon */}
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>

                {/* Search Bar with Autocomplete */}
                <div style={{ flexGrow: 1 }}>
                    <Autocomplete
                        freeSolo
                        id="search-bar"
                        value={keyword}
                        onChange={(e, val) => setKeyword(val)}
                        options={searchResults}
                        filterOptions={(x) => x}
                        getOptionLabel={(option) => (option?.label || "")}
                        renderInput={(params) => (
                            <TextField {...params} label="Search…" variant="outlined" fullWidth />
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
