import '../hojas-de-estilo/Logo.css';

const Logo = ({ logo }) => (
  <div className='logo-contenedor'>
    <img
      src={logo} 
      className='logo'
      alt = 'Foto del Logo' />
  </div>
)

export default Logo;