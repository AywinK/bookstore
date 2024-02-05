import Typography from '@mui/material/Typography';


import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Link as RouterLink } from "react-router-dom";

const SupportLinks = () => {

    return (
        <>
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
        </>
    )
}

export default SupportLinks;