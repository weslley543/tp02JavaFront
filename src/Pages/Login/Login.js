import React, {useState} from 'react';
import { 
    Grid, 
    TextField,
    InputAdornment,
    Input,
    IconButton,
    InputLabel,
    Button 
} from '@material-ui/core';
import { 
    AccountCircle,
    Visibility,
    VisibilityOff,
 } from '@material-ui/icons';
 import { makeStyles } from '@material-ui/core/styles';

import './Login.css'
import { login } from '../../Services/auth';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

function Login(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const classes = useStyles();

    const handleSingIn = () => {
        if(!email || !password){
            setError("Entre com e-mail e senha")
        }
        else {
            const response = Math.random(); //Criando um token aleatorio para mandar pro login
            login(response)
            props.history.push("/home")
        }
    }

    return (
        <>
            <Grid container className="main">
                <img alt="logo" src={require('../../img/logo.png')} className="logo"/>
                <Grid item xs={3}>
                    <form className={classes.root}>
                        {error && <p className="msgErro">{error}</p>}
                        <TextField
                            // variant="outlined" 
                            value={email}
                            label="Email"
                            onChange={e => setEmail(e.target.value)} 
                            variant="outlined" 
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
                        <Button variant="contained" className="button" color="primary" onClick={handleSingIn}>
                            Entrar
                        </Button>
                        <br/>
                        <Link className="link" to="/signup">Clique aqui e cadastre-se</Link>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;