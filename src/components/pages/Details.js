import { Button } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';

export default function Details() {

    const { detailsID } = useParams();

    const history = useHistory();
    const back = () =>{
        history.goBack()
    }
    return (
        <div>
            <h1>Details Page {detailsID}</h1>

            <Button onClick={back} sx={{ m: 2 }} variant="contained" color="success">Back to Services Page</Button> 

        </div>
    )
}
