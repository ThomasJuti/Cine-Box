import { Link } from 'react-router-dom';
import './Home.css'; // Estilos personalizados

function Home() {
  const peliculasFamosas = [
    {
      id: 238,
      titulo: 'The Godfather',
      imagen: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      puntuacion: 8.6,
    },
    {
      id: 680,
      titulo: 'Pulp Fiction',
      imagen: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      puntuacion: 8.5,
    },
    {
      id: 244786,
      titulo: 'Whiplash',
      imagen: 'https://image.tmdb.org/t/p/original/uy36CPy5ARuC8qrH8Esg2ndFyJ5.jpg',
      puntuacion: 8.3,
    },
  ];

  const funciones = [
    'Explorar películas por género',
    'Ver reseñas y puntuaciones',
    'Guardar tus favoritas',
    'Filtrar por año o popularidad',
    'Ver detalles de cada película',
    'Diseño visual tipo Letterboxd',
  ];

  return (
    <>
      <div className="home-container">
        <section className="descripcion">
          <h1>Bienvenido a CineBox</h1>
          <p>
            CineBox es tu espacio para descubrir, explorar y disfrutar del cine. Aquí puedes ver reseñas,
            guardar tus películas favoritas, y navegar por un catálogo visualmente atractivo.
          </p>
          <Link to="/peliculas" className="boton">
            Ver reseñas
          </Link>
        </section>

        <section className="tarjetas">
          <h2>Películas destacadas</h2>
          <div className="grid-tarjetas">
            {peliculasFamosas.map((peli) => (
              <Link
                key={peli.id}
                to={`/pelicula/${peli.id}`}
                className="tarjeta-home"
              >
                <div className="tarjeta-imagen-home">
                  <img src={peli.imagen} alt={peli.titulo} />
                </div>
                <p className="tarjeta-titulo-home">{peli.titulo}</p>
                <p className="tarjeta-puntuacion-home">⭐ {peli.puntuacion}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="funciones">
          <h2>¿Qué puedes hacer aquí?</h2>
          <div className="grid-funciones">
            {funciones.map((funcion, index) => (
              <div key={index} className="funcion-item">
                {funcion}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer fuera del contenedor */}
      <footer className="footer">
        <p>© 2025 CineBox. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Home;