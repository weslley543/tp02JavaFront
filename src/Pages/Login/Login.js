import React, {useState} from 'react';
import { 
    Grid, 
    TextField,
    InputAdornment,
    Input,
    IconButton,
    InputLabel 
} from '@material-ui/core';
import { 
    AccountCircle,
    Visibility,
    VisibilityOff,
 } from '@material-ui/icons';
import './Login.css'

function Login(){
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleMouseDownPassword = (event) => {
        
    }

    return (
        <>
            <Grid container className="main">
                <Grid item xs={3}>
                    <img alt="logo" src={require('../../img/logo.png')} className="logo"/>
                    <form className="root">
                        <TextField
                            // variant="outlined" 
                            label="Email" 
                            id="email"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;