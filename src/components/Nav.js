import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

const NavBar = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

export default function Nav() {
    return (
        <NavBar sx={{p:2}}>
        <Link to="/">
             <div style={{marginLeft: "-15px"}}>
                 <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Matrix
                 </Typography>
             </div>
         </Link>
         <div  className="nav-link">
             <Link to="/home">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/services">Services</Link>
             <Link to="/contact">Contact</Link>
         </div>
        </NavBar>
    )
}
