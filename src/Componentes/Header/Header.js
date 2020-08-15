import React, {useState} from 'react';
import {
    Menu,
    MenuItem,
    Button
} from '@material-ui/core';
import './Header.css'
import { logout } from '../../Services/auth'
import user from '../../img/user.png'

function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () =>{
        setAnchorEl(null)
        logout();
        window.location.href = '/';
    }

    return(
        <div className="menu">
            <p className="item-menu">Categorias</p>
            <p className="item-menu">Favoritos</p>
            <p className="item-menu">Mais Assistidos</p>
            <div className="div-menu-usuario">
                <img src={user} className="item-logo"/>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Gustavo Serpeloni</Button>
                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Sair</MenuItem>
                </Menu>
            </div>
        </div>
    )
  }
  
  export default Header;