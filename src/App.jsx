import './App.css';
import { useState } from 'react';
import TaskInput from './Componentes/TaskInput.jsx';
import TaskList from './Componentes/TaskList.jsx';
import TaskItem from './Componentes/TaskItem.jsx';
import Header from './Componentes/Header.jsx';
import Footer from './Componentes/Footer.jsx';
import Titulo from './Componentes/Titulo.jsx';

function App() {
  const [Productos, setProductos] = useState([
    { Articulo: 'Lapiz', descripcion: 'Lapiz', precio: 100 },
    { Articulo: 'Goma', descripcion: 'Goma', precio: 50 },
    { Articulo: 'Cuaderno', descripcion: 'Cuaderno', precio: 300 },
    { Articulo: 'Regla', descripcion: 'Regla', precio: 150 },
    { Articulo: 'Tijera', descripcion: 'Tijera', precio: 200 },
  ]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header></Header>
        <Titulo titulo={'Listado de Productos'}></Titulo>
        <TaskInput Productos={[Productos, setProductos]}></TaskInput>
        <TaskList Productos={Productos} setProductos={setProductos}></TaskList>
        <TaskItem Productos={Productos}></TaskItem>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
