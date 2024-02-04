import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Footer = () => {

    return (
        <footer>
            <Box>
                <Typography variant="h5" textAlign="start" gutterBottom>
                    Follow Us
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-evenly">
                    <InstagramIcon sx={{ fontSize: 40 }} />
                    <FacebookIcon sx={{ fontSize: 40 }} />
                    <YouTubeIcon sx={{ fontSize: 40 }} />
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                    <XIcon sx={{ fontSize: 40 }} />
                </Box>
            </Box>

            <div>
                <Typography variant="h5" textAlign="start" marginTop="10px">
                    Support
                </Typography>
                <List>
                    <ListItem>
                        <Link underline="hover" component="button" href="/faq" color="inherit">
                            Frequently Asked Questions
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/delivery" color="inherit">
                            Delivery Information
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/click-and-collect" color="inherit">
                            Click and Collect
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/returns" color="inherit">
                            Returns Policy
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/contact" color="inherit">
                            Contact Us
                        </Link>
                    </ListItem>
                </List>
            </div>

            <div>
                <Typography variant="h5" textAlign="start">
                    Legal
                </Typography>
                <List>
                    <ListItem>
                        <Link underline="hover" component="button" href="/privacy-notice" color="inherit">
                            Privacy Notice
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/terms-and-conditions" color="inherit">
                            Terms and Conditions
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/accessibility" color="inherit">
                            Accessibility
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/cookie-policy" color="inherit">
                            Cookie Policy
                        </Link>
                    </ListItem>
                </List>
            </div>

            <div>
                <Typography variant="h5" textAlign="start">
                    About Us
                </Typography>
                <List>
                    <ListItem>
                        <Link underline="hover" component="button" href="/about-us" color="inherit">
                            About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component="button" href="/sitemap" color="inherit">
                            Sitemap
                        </Link>
                    </ListItem>
                </List>
            </div>
        </footer>
    )
}

export default Footer;