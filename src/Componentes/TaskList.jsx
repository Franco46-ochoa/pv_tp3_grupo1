import React, { useState } from 'react';

function TaskList({ Productos, setProductos }) {
  const [vendidos, setVendidos] = useState([]); // índices de productos vendidos

  // Tachar producto (vendido)
  const marcarComoVendido = (index) => {
    if (!vendidos.includes(index)) {
      setVendidos([...vendidos, index]);
    }
  };

  // Eliminar producto
  const eliminarProducto = (index) => {
    const nuevosProductos = Productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);

    // También actualizamos la lista de vendidos
    setVendidos(vendidos.filter((i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {Productos.map((producto, index) => (
          <li key={index} style={vendidos.includes(index) ? { textDecoration: 'line-through' } : {}}>
            Descripción: {producto.descripcion} - Precio: ${producto.precio}
            <button onClick={() => marcarComoVendido(index)}>Vendido</button>
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
