import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Ícono para cerrar el globo
import '../styles/components.css';
import avatar from './avatar.png'; // Imagen de Bella

const ChatButton = ({ message, isBubbleVisible, setIsBubbleVisible ,producto}) => { // Aceptar message, isBubbleVisible y setIsBubbleVisible como props
    // Función para cerrar solo el globo de texto
    const closeChatBubble = () => {
        setIsBubbleVisible(false);
    };
    var mensajeWSP = producto ? "Hola Bella, estoy interesado en este producto, " + producto.name : "Hola Bella, me ayudas con mi compra?" 
    // Crear el enlace de WhatsApp
    const whatsappLink = `https://wa.me/900955933?text=${encodeURIComponent(mensajeWSP)}`;

    return (
        <div className="chat-floating-button">
            {/* Globo de texto que se puede cerrar */}
            {isBubbleVisible && (
                <div className="chat-bubble">
                    {/* Ícono de cierre (X) al lado izquierdo */}
                    <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={closeChatBubble} />
                    
                    {/* Texto dentro del globo que es un enlace para enviar mensaje por WhatsApp */}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <span className="btn-talk-floating">
                            {message.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </span>
                    </a>
                </div>
            )}

            {/* Imagen de Bella a la derecha del globo */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <img src={avatar} alt="Cara de Bella" className="avatar-floating" />
            </a>
        </div>
    );
};

export default ChatButton;
