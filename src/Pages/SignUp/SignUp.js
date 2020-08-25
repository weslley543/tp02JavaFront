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
import './SignUp.css'

import { api } from '../../Services/api';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

function SignUp(props){
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const classes = useStyles();

    const handleSubmmit = async () =>{
        const response = await api.post('/usuario', {email, password_hash, nome})

        if(response.status === 200){
            props.history.push("/");
        }
    }

    const handleSignUp = async () => {
        if(!nome || !email || !password_hash){
            setError("Preencha todos os dados");
        }
        else{
            try{
                await handleSubmmit();
            }catch(err){
                setError(err);
            }
        }
    }

    return (
        <>
            <Grid container className="main">
                <img alt="logo" src={require('../../img/logo.png')} className="logo"/>
                <Grid item xs={3}>
                    <form className={classes.root} autoComplete="off">
                        {error && <p className="msgErro">{error}</p>}
                        <TextField className="input"  label="Nome" variant="outlined" onChange={e => setNome(e.target.value)}/>
                        <TextField
                            variant="outlined" 
                            value={email}
                            label="Email"
                            className="input"
                            onChange={e => setEmail(e.target.value)} 
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
                            value={password_hash}
                            className="input"
                            variant="outlined" 
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
                        <Button variant="contained" color="primary" className="button" onClick={handleSignUp}>
                            Cadastrar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default SignUp;