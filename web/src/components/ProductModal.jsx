import React from 'react';
import '../styles/components.css'; // Asegúrate de que los estilos están en este archivo

const ProductModal = ({ product, onClose }) => {
    if (!product) return null; // No renderizar si no hay producto

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h1 className="modal-product-name">{product.name}</h1>
                <p className="modal-product-price">{product.price}</p>
                <img src={product.image} alt={product.name} className="modal-product-image" />
                
                <p className="modal-product-description">{product.description || 'Descripción no disponible.'}</p>
                <button className="modal-add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ProductModal;
