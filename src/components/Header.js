import { Container } from '@mui/material';
import Nav from './Nav';

export default function Header() {
    return (
        <div style={{background: '#fff', boxShadow: '0px 0px 40px rgba(0,0,0,0.025)', marginBottom: '35px'}}>
            <Container>
               <Nav/>
            </Container>
        </div>
    )
}
