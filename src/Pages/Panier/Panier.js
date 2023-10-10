import React from 'react';

import './Panier.css'

const Panier = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const calculateTotalPrice = (product) => {
        return product.quantity * product.price;
    }


    return (
        <div className='panier'>
            <h2>Panier</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt='Produit'></img>
                        <p>{item.name} - Quantité: {item.quantity} - Prix unitaire: {item.price} € - Prix total: {calculateTotalPrice(item)} €</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Panier;
