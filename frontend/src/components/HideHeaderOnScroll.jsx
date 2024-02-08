/* eslint-disable react/prop-types */
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const HideHeaderOnScroll = ({ children }) => {

    const trigger = useScrollTrigger();

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

export default HideHeaderOnScroll;