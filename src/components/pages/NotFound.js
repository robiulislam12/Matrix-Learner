import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';
import Img from '../../assets/404.svg';

const FlexStyled = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '30px 0px'
})

export default function NotFound() {
    const history= useHistory();

    const backToHome = () =>{
        history.push('/')
    }
    const back = () =>{
        history.goBack()
    }
    return (
        <FlexStyled >
            <img height="400px" src={Img} alt="Not Found Img" />
            <Typography variant="h4">Page Not Found</Typography>
            <div>
            <Button onClick={backToHome} sx={{ m: 2 }} variant="contained" color="error">Back to Home</Button> 
            
            <Button onClick={back} sx={{ m: 2 }} variant="contained" color="success">Go Back</Button> 
            </div>
        </FlexStyled>
    )
}
