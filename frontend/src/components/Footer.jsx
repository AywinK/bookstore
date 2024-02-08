import FooterSection from './FooterSection';
import footerData from "../siteData/footerData.json";
import SocialLinks from './SocialLinks';
import { Stack, useMediaQuery, Container } from '@mui/material';


const Footer = () => {

    const isMobile = useMediaQuery("(max-width: 688px)");

    return (
        <Container component="footer">
            <hr
                style={{
                    borderWidth: "2px",
                    borderColor: "lightslategray"
                }}
            />
            <Stack
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
                <FooterSection heading="Support" dataArr={footerData.supportLinks} />
                <FooterSection heading="Legal" dataArr={footerData.legalLinks} />
                <FooterSection heading="About" dataArr={footerData.aboutLinks} />
            </Stack>
        </Container>
    )
}

export default Footer;