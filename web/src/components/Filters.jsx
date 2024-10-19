import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/components.css';

const Filters = () => {
    return (
        <div className="filters">
            {/* Filtros dropdown */}
            <select className="filter-dropdown">
                <option value="">Categoría</option>
                <option value="maquillaje">Maquillaje</option>
                <option value="labios">Labios</option>
            </select>
            <select className="filter-dropdown">
                <option value="">Tipo</option>
                <option value="novedades">Novedades</option>
                <option value="populares">Populares</option>
            </select>
            <select className="filter-dropdown">
                <option value="">Otros</option>
                <option value="otros1">Opción 1</option>
                <option value="otros2">Opción 2</option>
            </select>

            {/* Barra de búsqueda con ícono de lupa */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Buscar productos..."
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>

        </div>
    );
};

export default Filters;
