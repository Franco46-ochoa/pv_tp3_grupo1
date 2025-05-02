export function buscarProducto(productos, nombreArticulo) {
  return productos.find(
    (producto) => producto.descripcion.toLowerCase() === nombreArticulo.toLowerCase()
  );
}
