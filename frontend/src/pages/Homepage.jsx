import { Box, Button } from '@mui/material';
import collectionsBackgroundImage from "../assets/bookstore_banner.png";
import { Link } from "react-router-dom";
import CategoryBox from '../components/CategoryBox';
import useMediaQuery from "@mui/material/useMediaQuery";

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

    const isMobile = useMediaQuery("(max-width: 688px)")

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    // aspectRatio: "1/1",
                    width: '100%',
                    borderRadius: isMobile ? "0px" : "8px",
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
                        borderRadius: isMobile ? "0px" : "8px",
                        background: "rgba(0,0,0,0.65)",
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