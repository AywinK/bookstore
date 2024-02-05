import Typography from '@mui/material/Typography';


import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Link as RouterLink } from "react-router-dom";

const LegalLinks = () => {

    return (
        <>
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
        </>
    )
}

export default LegalLinks;