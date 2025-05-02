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

  const mostrarProductos = () => {
    console.log('1- Mostrar productos:');
    Productos.forEach((producto) => {
      console.log(`Producto: ${producto.descripcion} - Precio:$${producto.precio}`);
    });
  };

  const mayoresA20 = () => {
    const productosMayorA20 = Productos.filter((producto) => producto.precio > 20);
    console.log('\n2- Productos con precio mayor a $20:');
    productosMayorA20.forEach((producto) => {
      console.log(`Producto: ${producto.descripcion} - Precio:$${producto.precio}`);
    });
  };

  const preciosMasIVA = () => {
    const productosConIVA = Productos.map((producto) => {
      return {
        ...producto,
        precioConIVA: producto.precio * 1.21,
      };
    });
    console.log('\n3- Productos con IVA incluido (21%):');
    productosConIVA.forEach((producto) => {
      console.log(
        `Producto: ${
          producto.descripcion
        } - Precio:$${producto.precioConIVA.toFixed(2)}`,
      );
    });
  };

  const ordenarProductos = () => {
    const productosOrdenados = [...Productos].sort((a, b) => a.precio - b.precio);
    console.log(
      '\n4- Array de productos ordenado por precio (de menor a mayor):',
    );
    productosOrdenados.forEach((producto) => {
      console.log(
        `Producto: ${producto.descripcion} - Precio:$${producto.precio}`,
      );
    });
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
      <button onClick={() => mostrarProductos()}>Mostrar Productos</button>
      <button onClick={() => mayoresA20()}>Precios mayores a $20</button>
      <button onClick={() => preciosMasIVA()}>Precios mas IVA</button>
      <button onClick={()=> ordenarProductos()}>Ordenar productos por precio</button>
    </div>
  );
}

export default TaskList;
