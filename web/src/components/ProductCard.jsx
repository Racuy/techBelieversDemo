import React from 'react';
import '../styles/components.css';

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}> {/* Llama a onClick al hacer clic */}
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="btn-buy">Agregar</button>
            </div>
        </div>
    );
};

export default ProductCard;
