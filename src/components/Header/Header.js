import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Ma boutique</h1>
            <div className="header-nav">
                <p>Accueil</p>
                <Link to="/panier">Mon Panier</Link>  
            </div>        
        </div>    
    );
};

export default Header;