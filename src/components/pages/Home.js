import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/herobg.svg';
import useData from '../../hooks/useData';
import HeroArea from "../HeroArea";
import Service from '../Service';

export default function Home() {
    const [services] = useData();
    return (
        <div>
            <HeroArea text="Don't Run, Just Crawl" img={HeroImg} isTrue={true}/>

            <Grid className="content-area" container spacing={3} sx={{marginTop: '40px', marginBottom: '40px'}}>
               {
                   services.map(service => <Service key={service.id} service={service} isTrue/>)
               }
            </Grid>
            <div style={{textAlign: 'center'}}>
                <Link to="/services">
                    <Button sx={{ m: 2, px:8, py: 1 }} variant="contained" color="success">See All Services</Button>
                </Link>
            </div>
        </div>
    )
}
