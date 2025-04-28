import React, { useState } from 'react';

function TaskItem({ Productos }) { // Recibe la lista de Productos como prop
  const [inputValue, setInputValue] = useState('');
  const [productoEncontrado, setProductoEncontrado] = useState(null);

  const handleSubmit = () => {
    const encontrado = Productos.find(
      (producto) => producto.Articulo.toLowerCase() === inputValue.toLowerCase()
    );

    if (encontrado) {
      setProductoEncontrado(encontrado); // Establecemos el producto encontrado en el estado
    } else {
      alert('Este artículo no ha sido ingresado.');
      setProductoEncontrado(null); // Si no existe, reseteamos el estado del producto
    }
  };

  return (
    <div>
      <label>Buscar Articulo</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Buscar
      </button>

      {productoEncontrado && (
        <h3>
          Artículo: {productoEncontrado.Articulo} - Precio: $
          {productoEncontrado.Precio}
        </h3>
      )}
    </div>
  );
}

export default TaskItem;