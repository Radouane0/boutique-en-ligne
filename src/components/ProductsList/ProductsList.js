import React from 'react'
import './ProductsList.css'

const ProductsList = ({ products }) => {
    return (
        <div className='productsList'>
           {products.map((product) => (
            <div key={product.id} className='product'>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price} €</p>
            </div>
           ))}   
        </div>
    );
};

export default ProductsList;