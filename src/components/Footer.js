import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div style={{background: '#fff', padding: '30px 0',marginTop: '35px', textAlign: 'center'}}>
            <Container>
                <Grid  item >
                    <div>
                        <Link to="/">
                        <div>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                Mat<span>rix</span>
                            </Typography>
                        </div>
                        </Link>
                        <Typography variant="p" sx={{ fontWeight: 'bold' }}>
                            <p>We are very happy for hiring your bright future ❤️</p>
                        </Typography>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}
 