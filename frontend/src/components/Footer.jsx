
import SocialLinks from './SocialLinks';
import SupportLinks from './SupportLinks';
import LegalLinks from './LegalLinks';
import AboutLinks from './AboutLinks';
import { useMediaQuery } from '@mui/material';


const Footer = () => {

    const isMobile = useMediaQuery("(max-width: 688px)");

    return (
        <>
        <hr
        style={{
            borderWidth: "2px",
            borderColor: "lightslategray"
        }}
        />
        <footer
        style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "start",
            justifyContent: "space-evenly",
            padding: "10px",
            gap: "20px",
        }}
        >
            <SocialLinks isMobile={isMobile} />
            <SupportLinks />
            <LegalLinks />
            <AboutLinks />
        </footer>
        </>
    )
}

export default Footer;