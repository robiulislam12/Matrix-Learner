import { Grid, Typography } from '@mui/material';
import IMG from '../../assets/services.svg';
import useServices from '../../hooks/useServices';
import HeroArea from "../HeroArea";
import Service from '../Service';

export default function Services() {
    const [services] = useServices();
    return (
        <>
            <HeroArea text="Services" img={IMG}>
                <p>
                    We have lot of services for your bright future. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, consectetur aliquid cumque voluptatum repudiandae vero!
                </p>
            </HeroArea>


        <div style={{marginTop: '50px'}}>
            <div>
                <Typography variant="h3" align="center" sx={{fontSize:35}} component="h3">
                    All Services
                </Typography>
                <Typography align='center' variant="h6" color="text.secondary">
                    View the all services for your bright future
                </Typography>
            </div>
            <Grid className="content-area" container spacing={3} sx={{marginTop: '40px', marginBottom: '40px'}}>
               {
                   services.map(service => <Service key={service.id} service={service}/>)
               }
            </Grid>
        </div>
        </>
    )
}
