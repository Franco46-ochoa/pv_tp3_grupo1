// Función para eliminar un producto y actualizar la lista de vendidos
export function eliminarProducto(index, productos, vendidos) {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    const nuevosVendidos = vendidos
      .filter(i => i !== index)
      .map(i => (i > index ? i - 1 : i)); // ajusta los índices si es necesario
    return { nuevosProductos, nuevosVendidos };
  }
  