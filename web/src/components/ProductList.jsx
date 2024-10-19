import React from 'react';
import ProductCard from './ProductCard';
import '../styles/components.css';

const ProductList = ({ products, onProductClick }) => { // Recibir products y onProductClick como props
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => onProductClick(product)} // Pasar la función de clic
                />
            ))}
        </div>
    );
};

export default ProductList;
