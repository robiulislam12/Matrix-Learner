import { TextField } from '@mui/material';

export default function Contact() {
    return (
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
    )
}
