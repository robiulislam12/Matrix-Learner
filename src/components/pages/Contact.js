import { Button, Grid, TextField, Typography } from '@mui/material';
import Img from '../../assets/contact2.svg';
import HeroArea from '../HeroArea';

export default function Contact() {
    return (
        <>
            <HeroArea text="Contact Us" img={Img}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quisquam.
                </p>
            </HeroArea>
            <Grid sx={{my: 8}} container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Typography variant="h4">
                        Stay Connect Us
                    </Typography>
                    <Typography variant="body2">
                        If you have any question? Send me a mail or send me a message
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                <div>
                    <TextField
                        fullWidth
                        id="name" 
                        label="Name" 
                        type="text"
                        
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        
                    />
                    <TextField
                        margin="dense"
                        id="phone-number"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        
                    />
                    <TextField
                        margin="dense"
                        label="Message"
                        type="textarea"
                        fullWidth
                        rows={4}
                        multiline
                    />
                    <Button sx={{mt:3, px: 8, py: 1}} variant="contained" color="success">Submit</Button>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
