import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import collectionsBackgroundImage from "../assets/OIP.jpg"

// eslint-disable-next-line react/prop-types
const CategoryBox = ({ categoryLink, categoryName }) => {
    return (
        <Button
            component={Link}
            to={categoryLink}
            sx={{
                position: "relative",
                aspectRatio: "1/1",
                width: '300px',
                borderRadius: '16px',
                backgroundImage: `url(${collectionsBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: "20px auto",
                textTransform: "none",
                ":hover": {
                    opacity: "0.9"
                },
                "&:before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "16px",
                    background: "rgba(40,40,40,0.5)",
                }
            }
            }
        >
            <Typography
                sx={{
                    position: "absolute",
                    top: "20px",
                    left: "0px",
                    padding: "20px",
                    textShadow: '2px 2px 4px rgba(173, 216, 230, 0.8)'
                }}
                variant="h4"
                color="whitesmoke"

            >
                {categoryName}
            </Typography>
        </Button>
    );
};

export default CategoryBox;
