import { Typography } from "@mui/material";


const Footer = () => {
    return (
        <div>
            <Typography align='center'>&copy; MERN Blog {new Date().getFullYear()}</Typography>
        </div>
    );
};

export default Footer;