import Typography from '@mui/material/Typography';


import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Link as RouterLink } from "react-router-dom";

const AboutLinks = () => {

    return (
        <>
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
        </>
    )
}

export default AboutLinks;