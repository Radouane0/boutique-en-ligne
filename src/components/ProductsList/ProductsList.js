import React, { useState } from 'react';

import './ProductsList.css';

const ProductsList = ({ products }) => {
    const [quantities, setQuantities] = useState(new Array(products.length).fill(0));

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
                        <button className="add-product">Ajouter au panier</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
