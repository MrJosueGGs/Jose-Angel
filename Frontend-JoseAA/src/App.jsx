import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage/Landing'; 
import Noticias from './pages/Noticias';
import Inscripcion from './pages/Inscripcion';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
          </Routes>
        </div>
        <footer className="bg-[#1B3A57] text-white p-4 text-center text-sm">
          © {new Date().getFullYear()} U.E.N José Ángel Álamo - Panel de Control Educativo
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
