import React from "react";
import { Grid,Paper} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
const Login=()=>
{
    const paper={padding:10,height:'70vh',width:330,margin:'20px auto'}
    const avatar={background:''}
    const btnstyle={margin:'8px 0',width:'100%'}
    return(
   
    <Grid>
        <Paper elevation={10} style={paper}>
            <Grid align='center'>
            <Avatar style={avatar}><LockOpenOutlinedIcon/></Avatar>
            <h2>Sign in</h2>
            <TextField label="Username" variant="standard" placeholder="Enter username" fullWidth required/>
            <br/>
            <TextField  label="Password" variant="standard" placeholder="Enter Password" type="password" fullWidth required/>
            
            </Grid>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </FormGroup>
            <br/>
            <Button type="submit" color="primary" style={btnstyle} variant="contained" fullwidth> SIGN IN</Button>
            <br/>
            <Link href="#" underline="none">
            forgot password?
            </Link>
            <br/>
            <Typography>
                new User?
                <Link href="#"> Sign up
                </Link>
            </Typography>

        </Paper>


    </Grid>
    )
    
}
export default Login