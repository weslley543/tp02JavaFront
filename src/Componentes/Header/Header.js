import React from 'react';
import './Header.css'

import user from '../../img/user.png'

function Header() {
    return(
        <div className="menu">
            <p className="item-menu">Categorias</p>
            <p className="item-menu">Favoritos</p>
            <p className="item-menu">Mais Assistidos</p>
            <div className="div-menu-usuario">
                <img src={user} className="item-logo"/>
                <p className="item-menu">Gustavo Serpeloni</p>
            </div>
        </div>
    )
  }
  
  export default Header;