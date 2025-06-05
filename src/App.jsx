import './css/App.css'
import Home from "./pages/Home"
import Favorite from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorite' element={<Favorite />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
