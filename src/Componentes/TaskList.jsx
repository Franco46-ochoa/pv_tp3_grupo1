import React, { useState } from 'react';
import { marcarComoVendido } from '../js/vendido';
import { eliminarProducto } from '../js/eliminar';
import { modificarProducto } from '../js/Modificar'

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
  const handleModificar = (index) => {
    const nuevosProductos = modificarProducto(index, Productos);
    if (nuevosProductos) {
      setProductos(nuevosProductos);
      console.log("Productos actualizados:", setProductos);
    }
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
            <button onClick={()=> handleModificar(index)}>Modificar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
