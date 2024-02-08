import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';



// eslint-disable-next-line react/prop-types
const SocialLinks = ({ isMobile }) => {

    return (
        <Stack>
            <Typography variant="h5" textAlign="start" gutterBottom>
                Socials
            </Typography>
            <List
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                <ListItem>
                    <Link margin="auto" color="inherit" href="https://www.instagram.com">
                        <InstagramIcon fontSize={isMobile ? "medium" : "large"} />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link margin="auto" color="inherit" href="https://www.facebook.com">
                        <FacebookIcon fontSize={isMobile ? "medium" : "large"} />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link margin="auto" color="inherit" href="https://www.youtube.com">
                        <YouTubeIcon fontSize={isMobile ? "medium" : "large"} />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link margin="auto" color="inherit" href="https://linkedin.com">
                        <LinkedInIcon fontSize={isMobile ? "medium" : "large"} />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link margin="auto" color="inherit" href="https://www.x.com">
                        <XIcon fontSize={isMobile ? "medium" : "large"} />
                    </Link>
                </ListItem>
            </List>
        </Stack>
    )
}

export default SocialLinks;