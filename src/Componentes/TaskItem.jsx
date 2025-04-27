import React, { useState } from 'react';

function TaskItem() {
    const [inputValue, setInputValue] = useState('');
    const [producto, setProducto] = useState(null);

    const handleSubmit = () => {
        const existe = Productos.some(producto => producto.Articulo.toLowerCase() === inputValue.toLowerCase());

        if (existe) {
            const encontrado = Productos.find(producto => producto.Articulo.toLowerCase() === inputValue.toLowerCase());
            setProducto(encontrado); // Establecemos el producto encontrado en el estado
        } else {
            alert('Este artículo no ha sido ingresado.');
            setProducto(null); // Si no existe, reseteamos el estado del producto
        }
    };

    return (
        <div>
            <label>Buscar Articulo</label>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="button" onClick={handleSubmit}>Buscar</button>
            
            {producto && (
                <h3>Artículo: {producto.Articulo} - Precio: ${producto.Precio}</h3>
            )}
        </div>
    );
}

export default TaskItem;
