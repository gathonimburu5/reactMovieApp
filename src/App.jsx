import './css/App.css'
import Home from "./pages/Home"
import Favorite from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorite' element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;
