import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



// eslint-disable-next-line react/prop-types
const SocialLinks = ({ isMobile }) => {

    return (
        <>
            <Box>
                <Typography variant="h5" textAlign="start" gutterBottom>
                    Follow Us
                </Typography>
                <Box display="flex" flexDirection={isMobile ? "row" : "column"} alignItems="center" justifyContent="space-evenly" gap="20px">
                    <Link color="inherit" href="https://www.instagram.com">
                        <InstagramIcon sx={{ fontSize: 40 }} />
                    </Link>
                    <Link color="inherit" href="https://www.facebook.com">
                        <FacebookIcon sx={{ fontSize: 40 }} />
                    </Link>
                    <Link color="inherit" href="https://www.youtube.com">
                        <YouTubeIcon sx={{ fontSize: 40 }} />
                    </Link>
                    <Link color="inherit" href="https://linkedin.com">
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                    </Link>
                    <Link color="inherit" href="https://www.x.com">
                        <XIcon sx={{ fontSize: 40 }} />
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default SocialLinks;