// Función para marcar un producto como vendido
export function marcarComoVendido(index, vendidos) {
    if (!vendidos.includes(index)) {
      return [...vendidos, index];
    }
    return vendidos;
  }
  