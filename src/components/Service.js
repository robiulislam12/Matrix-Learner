import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

export default function Service({service}) {

    const { id, courseName , img, courseAuthorName } = service;
    const url = `/service/details/${id}`;
    
    const history = useHistory();

    const details = () =>{
        history.push(url)
    }
    return (
        <>
            <Grid item xs={4} md={4}>
                <Card  onClick={details} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="250"
                        image={img}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { courseName }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        By {courseAuthorName}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid >
            
        </>
    )
}
