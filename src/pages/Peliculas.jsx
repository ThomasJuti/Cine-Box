import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const API_KEY = '300fa5f7944ddeda42f1d199ef5f2187';
  const URL_POPULARES = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

  useEffect(() => {
    fetch(URL_POPULARES)
      .then((res) => res.json())
      .then((data) => {
        const filtradas = data.results
          .filter((p) => p.poster_path && p.title)
          .slice(0, 30);
        setPeliculas(filtradas);
      })
      .catch((error) => console.error('Error al cargar películas:', error));
  }, []);

  const peliculasFiltradas = peliculas.filter((p) =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={styles.input}
      />

      <div style={styles.grid}>
        {peliculasFiltradas.map((peli) => (
          <div
            key={peli.id}
            style={styles.card}
            onClick={() => navigate(`/pelicula/${peli.id}`)}
            onMouseEnter={(e) => (e.currentTarget.style.outline = '3px solid #6f42c1')}
            onMouseLeave={(e) => (e.currentTarget.style.outline = 'none')}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
              alt={peli.title}
              style={styles.img}
            />
            <p style={styles.titulo}>{peli.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '6rem 2rem 2rem',
    fontFamily: 'sans-serif',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    marginBottom: '2rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
  },
  card: {
    width: '100%',
    aspectRatio: '2 / 3',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'border 0.3s ease',
    backgroundColor: '#000',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    borderRadius: '8px',
  },
  titulo: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Peliculas;