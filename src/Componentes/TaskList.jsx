import React, { useState } from 'react';
import { marcarComoVendido } from '../js/vendido';
import { eliminarProducto } from '../js/eliminar';

function TaskList({ Productos, setProductos }) {
  const [vendidos, setVendidos] = useState([]);

  const handleVendido = (index) => {
    const nuevosVendidos = marcarComoVendido(index, vendidos);
    setVendidos(nuevosVendidos);
  };

  const handleEliminar = (index) => {
    const { nuevosProductos, nuevosVendidos } = eliminarProducto(index, Productos, vendidos);
    setProductos(nuevosProductos);
    setVendidos(nuevosVendidos);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {Productos.map((producto, index) => (
          <li key={index} style={vendidos.includes(index) ? { textDecoration: 'line-through' } : {}}>
            Descripción: {producto.descripcion} - Precio: ${producto.precio}
            <button onClick={() => handleVendido(index)}>Vendido</button>
            <button onClick={() => handleEliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
