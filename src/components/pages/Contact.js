import { TextField } from '@mui/material';
import Img from '../../assets/contact2.svg';
import HeroArea from '../HeroArea';

export default function Contact() {
    return (
        <>
            <HeroArea text="Contact Us" img={Img}>
                <p>
                    Stay Connect With us
                </p>
            </HeroArea>
        <div>
             <TextField
                fullWidth
                id="outlined-basic" 
                label="Name" 
                type="text"
                variant="standard" 
            />
                
             <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            <TextField
                margin="dense"
                id="phone-number"
                label="Phone Number"
                type="number"
                fullWidth
                variant="standard"
            />
        </div>
        </>
    )
}
