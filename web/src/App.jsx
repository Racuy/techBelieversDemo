import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal'; // Importar el modal
import ChatButton from './components/ChatButton';
import './styles/App.css';

const App = () => {
    // Lista completa de productos
    const products = [
        { 
            id: 1, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$20', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 2, 
            name: 'Máscara de Pestañas Forever', 
            price: '$15', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
        { 
            id: 3, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$22', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 4, 
            name: 'Máscara de Pestañas Forever', 
            price: '$18', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
        { 
            id: 5, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$20', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 6, 
            name: 'Máscara de Pestañas Forever', 
            price: '$16', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
        { 
            id: 7, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$25', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 8, 
            name: 'Máscara de Pestañas Forever', 
            price: '$14', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
        { 
            id: 9, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$20', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 10, 
            name: 'Máscara de Pestañas Forever', 
            price: '$17', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
        { 
            id: 11, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$21', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 12, 
            name: 'Máscara de Pestañas Forever', 
            price: '$15', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
        { 
            id: 13, 
            name: 'Rouge L Intense Labial en Barra 4 g', 
            price: '$24', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Un labial en barra que proporciona un color intenso y duradero, ideal para cualquier ocasión.' 
        },
        { 
            id: 14, 
            name: 'Máscara de Pestañas Forever', 
            price: '$19', 
            image: 'https://belcorpperu.vtexassets.com/arquivos/ids/281232-800-800?v=638300604225100000&width=800&height=800&aspect=true',
            description: 'Esta máscara de pestañas aporta volumen y longitud a tus pestañas, manteniéndolas perfectas todo el día.' 
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [chatMessage, setChatMessage] = useState('Chatea con Bella!\nTu nueva asesora de ventas'); // Mensaje inicial
    const [isBubbleVisible, setIsBubbleVisible] = useState(true); // Controla la visibilidad del globo

    const openModal = (product) => {
        setSelectedProduct(product);
        setChatMessage('¡Buena elección!\nVamos al chat, te ayudo a comprarlo'); // Cambiar el mensaje del chat
        setIsBubbleVisible(true); // Asegurarse de que el globo se muestre al abrir el modal
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setChatMessage('Chatea con Bella!\nTu nueva asesora de ventas'); // Reiniciar el mensaje al cerrar el modal
        setIsBubbleVisible(true); // Mostrar el globo de texto nuevamente al cerrar el modal
    };

    return (
        <Router>
            <div className="app">
                <Navigation />
                <Header />
                <Filters />
                <ProductList products={products} onProductClick={openModal} /> {/* Pasar productos y función para abrir el modal */}
                {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={closeModal} /> // Mostrar el modal si hay un producto seleccionado
                )}
                <ChatButton 
                    message={chatMessage}
                    producto={selectedProduct}
                    isBubbleVisible={isBubbleVisible} 
                    setIsBubbleVisible={setIsBubbleVisible} 
                /> {/* Pasar el mensaje y el estado al botón de chat */}
            </div>
        </Router>
    );
};

export default App;
