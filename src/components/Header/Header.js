import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Ma boutique</h1>
            <div className="header-nav">
                <p>Accueil</p>
                <p>Mon Panier</p>
            </div>        
        </div>    
    );
};

export default Header;