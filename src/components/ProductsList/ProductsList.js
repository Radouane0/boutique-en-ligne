import React, { useState, useEffect } from 'react';

import './ProductsList.css';

const ProductsList = ({ products }) => {
    const [quantities, setQuantities] = useState(new Array(products.length).fill(0));
    const [cart, setCart] = useState([]);

    const handleQuantityIncreased = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const handleQuantityDecreased = (index) => {
        if(quantities[index] > 0) {
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    }

    const handleAddToCart = (product, index) => {
        const cartItem = {
            image: product.image,
            name: product.name,
            quantity: quantities[index],
            price: product.price,
        };

        const updatedCart = [...cart, cartItem];
        setCart(updatedCart);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div className='productsList'>
            {products.map((product, index) => (
                <div key={product.id} className='product'>
                    <img src={product.image} alt={product.name} />
                    <div className="product-infos">
                        <h2>{product.name}</h2>
                        <p>{product.price} €</p>
                        <div className="quantity-controls"> 
                            <button className='reduce-quantity' onClick={() => handleQuantityDecreased(index)}>-</button>
                            <p>Quantity : {quantities[index]}</p>
                            <button className='add-quantity' onClick={() => handleQuantityIncreased(index)}>+</button>
                        </div>
                        <button className="add-product" onClick={() => handleAddToCart(product, index)}>Ajouter au panier</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
