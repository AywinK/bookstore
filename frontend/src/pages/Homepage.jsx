import { Box, Button } from '@mui/material';
import collectionsBackgroundImage from "../assets/OIP.jpg";
import { Link } from "react-router-dom";
import CategoryBox from '../components/CategoryBox';

const displayedCollectionList = [
    {
        categoryLink: "/non-fiction",
        categoryName: "Non-Fiction"
    },
    {
        categoryLink: "/fiction",
        categoryName: "Fiction"
    },
    {
        categoryLink: "/horror",
        categoryName: "Horror"
    },
    {
        categoryLink: "/technology",
        categoryName: "Technology"
    }
]


const Homepage = () => {

    return (
        <>
            <Box
                sx={{
                    aspectRatio: "1/1",
                    width: '300px',
                    borderRadius: '16px',
                    backgroundImage: `url(${collectionsBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: "auto",
                    marginLeft: "auto",
                }}
            >
                <Link to="/collections">
                    <Button
                        variant="contained"
                        size='large'
                        color="primary"
                        sx={{
                            opacity: "0.7",
                            marginTop: "100px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: "200px",
                            borderRadius: "5px",
                        }}
                    >View Collections
                    </Button>
                </Link>
            </Box>

            {displayedCollectionList.map(collection => <CategoryBox key={collection.categoryName} categoryLink={collection.categoryLink} categoryName={collection.categoryName} />)}
        </>
    )
}

export default Homepage;