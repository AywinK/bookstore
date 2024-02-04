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

import { Link as RouterLink } from "react-router-dom";


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
                        <Link underline="hover" component={RouterLink} to="/faq" color="inherit">
                            Frequently Asked Questions
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/delivery" color="inherit">
                            Delivery Information
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/click-and-collect" color="inherit">
                            Click and Collect
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/returns" color="inherit">
                            Returns Policy
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/contact" color="inherit">
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
                        <Link underline="hover" component={RouterLink} to="/privacy-notice" color="inherit">
                            Privacy Notice
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/terms-and-conditions" color="inherit">
                            Terms and Conditions
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/accessibility" color="inherit">
                            Accessibility
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/cookie-policy" color="inherit">
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
                        <Link underline="hover" component={RouterLink} to="/about-us" color="inherit">
                            About Us
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="hover" component={RouterLink} to="/sitemap" color="inherit">
                            Sitemap
                        </Link>
                    </ListItem>
                </List>
            </div>
        </footer>
    )
}

export default Footer;