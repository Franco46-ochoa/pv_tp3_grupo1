import React, { useState } from 'react';
import { buscarProducto } from '../js/Busqueda'; // Importás la lógica
function TaskItem({ Productos }) {
  const [inputValue, setInputValue] = useState('');
  const [productoEncontrado, setProductoEncontrado] = useState(null);
  const handleSubmit = () => {
    const encontrado = buscarProducto(Productos, inputValue);
    if (encontrado) {
      setProductoEncontrado(encontrado);
    } else {
      alert('Este artículo no ha sido ingresado.');
      setProductoEncontrado(null);
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
          Artículo: {productoEncontrado.descripcion} - Precio: ${productoEncontrado.precio}
        </h3>
      )}
    </div>
  );
}
export default TaskItem;