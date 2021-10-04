import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AboutImg from '../../assets/about.svg';
import Img from '../../assets/about2.svg';
import HeroArea from '../HeroArea';

export default function About() {
    return (
        <div>
           <HeroArea text='About Us' img={AboutImg}/>
           <Grid container spacing={2} sx={{my: 8}}>
                <Grid item xs={5}>
                    <img width="350" src={Img} alt="" />
                </Grid>
                <Grid item xs={7}>
                    <div>
                        <Typography variant="h4">We Are Provided </Typography>
                        <Typography variant="body1"sx={{my: 2}}>
                            World best resources here. If you purses our course will be success. Our Course price is nothing high. It's near for your destination.
                        </Typography>
                        <Link to="/services">
                        <Button sx={{mt: 2}} variant="contained" color="success">See Services Page</Button>
                        </Link>
                    </div>
                </Grid>
           </Grid>

        </div>
    )
}
