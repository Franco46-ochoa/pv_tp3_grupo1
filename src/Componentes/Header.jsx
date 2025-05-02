import Titulo from './Titulo';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#282c34',
        /* padding: '0.5rem', */
        color: 'white',
        width: '100vw',
        position: 'fixed',
        top: 0,
        height: '6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Titulo titulo={'Programacion Visual 2025'}></Titulo>
    </header>
  );
}

export default Header;
