import { Link } from 'react-router-dom';
import logo from '../assets/Cinebox-logo.png';


function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}><img src={logo} alt="CineBox Logo" style={styles.logoImage}/></Link>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Inicio</Link>
          <Link to="/peliculas" style={styles.link}>Películas</Link>
        </div>
      </nav>
    </header>
  );
}

const styles = {
header: {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  backgroundColor: '#1c1c1c',
  zIndex: 1000,
},

nav: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 2rem', 
  height: '6rem',       
  color: '#fff',
},

logoImage: {
  height: '6.5rem',
  width:'6.5rem',
  objectFit: 'contain',
  padding: 0,
  margin: 0
},
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
};

export default Navbar;