import { useState } from 'react';
import TaskInput from "./Componentes/TaskInput.jsx";
function App() {
  const [Articulos, setArticulo]=useState('');
  const [Precio, setPrecio]= useState(0);
  return (
    <>
      <div>
        <TaskInput art={[Articulos, setArticulo]} pre={[Precio, setPrecio]}/>
        <h1>{Articulos}${Precio}</h1>
      </div>
    </>
  )
}

export default App
