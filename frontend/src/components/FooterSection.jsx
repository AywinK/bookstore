/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

import { Link as RouterLink } from "react-router-dom";


const FooterSection = ({ heading, dataArr }) => {

    return (
        <Stack>
            <Typography variant="h5" textAlign="start">
                {heading}
            </Typography>
            <List>
                {dataArr.map(({ link, text }) => (
                    <ListItem key={text}>
                        <Link underline="hover" component={RouterLink} to={link} color="inherit">
                            {text}
                        </Link>
                    </ListItem>
                ))}

            </List>
        </Stack>
    )
}

export default FooterSection;