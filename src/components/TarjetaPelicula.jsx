import './TarjetaPelicula.css';

function TarjetaPelicula({ titulo, imagen }) {
  return (
    <div className="tarjeta-wrapper">
      <div className="tarjeta-pelicula">
        <img src={imagen} alt={titulo} className="tarjeta-img" />
      </div>
      <p className="tarjeta-titulo">{titulo}</p>
    </div>
  );
}

export default TarjetaPelicula;