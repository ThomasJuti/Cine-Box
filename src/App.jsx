import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Peliculas from './pages/Peliculas';
import PeliculaDetalle from './pages/PeliculasDetalle'; 
import TarjetaPelicula from './components/TarjetaPelicula';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/pelicula/:id" element={<PeliculaDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
