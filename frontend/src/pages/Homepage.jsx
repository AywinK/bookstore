import { Box, Button } from '@mui/material';
import collectionsBackgroundImage from "../assets/OIP.jpg";
import { Link } from "react-router-dom";
import CategoryBox from '../components/CategoryBox';

const displayedCollectionList = [
    {
        categoryLink: "/collections/non-fiction",
        categoryName: "Non-Fiction"
    },
    {
        categoryLink: "/collections/fiction",
        categoryName: "Fiction"
    },
    {
        categoryLink: "/collections/horror",
        categoryName: "Horror"
    },
    {
        categoryLink: "/collections/technology",
        categoryName: "Technology"
    }
]


const Homepage = () => {

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    aspectRatio: "1/1",
                    width: '300px',
                    borderRadius: '16px',
                    backgroundImage: `url(${collectionsBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: "auto",
                    marginLeft: "auto",


                    "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "16px",
                        background: "rgba(0,0,0,0.4)",
                    }
                }}
            >
                <Link to="/collections">
                    <Button
                        variant="contained"
                        size='large'
                        color="secondary"
                        sx={{
                            marginTop: "100px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: "200px",
                            borderRadius: "10px",

                        }}
                    >View Collections
                    </Button>
                </Link>
            </Box>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}
            >
                {displayedCollectionList.map(collection => <CategoryBox key={collection.categoryName} categoryLink={collection.categoryLink} categoryName={collection.categoryName} />)}
            </div>
        </>
    )
}

export default Homepage;