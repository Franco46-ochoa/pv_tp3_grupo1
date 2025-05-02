export function modificarProducto(index, productos) {
    const producto = productos[index];
  
    const nuevaDescripcion = prompt("Nueva descripción:", producto.descripcion);
    if (nuevaDescripcion === null || nuevaDescripcion.trim() === "") return null;
  
    const nuevoPrecioInput = prompt("Nuevo precio:", producto.precio);
    if (nuevoPrecioInput === null || nuevoPrecioInput.trim() === "") {
      alert("Precio no ingresado.");
      return null;
    }
  
    const nuevoPrecio = parseFloat(nuevoPrecioInput);
    if (isNaN(nuevoPrecio) || nuevoPrecio < 0) {
      alert("Precio inválido. Ingrese un número positivo.");
      return null;
    }
  
    const nuevosProductos = [...productos];
    nuevosProductos[index] = {
      ...producto,
      descripcion: nuevaDescripcion,
      precio: nuevoPrecio,
    };
  
    return nuevosProductos;
  }
  