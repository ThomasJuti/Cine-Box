import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PeliculaDetalle.css';

function PeliculaDetalle() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '300fa5f7944ddeda42f1d199ef5f2187';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar la película');
        return res.json();
      })
      .then((data) => setPelicula(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!pelicula) return <p className="cargando">Cargando detalles...</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-contenido">
        <img
          src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          className="detalle-poster"
        />
        <div className="detalle-info">
          <h1>{pelicula.title}</h1>
          <p>Resumen:{pelicula.overview || 'Sin descripción disponible.'}</p>
          <p>Fecha de estreno: {pelicula.release_date}</p>
          <p>Puntuación: ⭐ {pelicula.vote_average}</p>
          <p>Duración: {pelicula.runtime} minutos</p>
          <p>Géneros: {pelicula.genres.map(g => g.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default PeliculaDetalle;