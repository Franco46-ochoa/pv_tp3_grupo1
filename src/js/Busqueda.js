export function buscarProducto(productos, nombreArticulo) {
    return productos.find(
      (producto) => producto.Articulo.toLowerCase() === nombreArticulo.toLowerCase()
    );
  }