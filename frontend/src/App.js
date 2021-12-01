import './App.css';

import Donut from './components/Donut';
import Images from "./components/Images"
import Shapes from './components/Shapes';
import Discover from './components/Discover';
import Stories from './components/Stories';
import { Route, BrowserRouter, Routes, Redirect } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import HighScore from './components/HighScore';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/highscore" element={<HighScore />} />
        {/* <Route path="/rosco" element={<Donut />} />
        <Route path="/images" element={<Images />} />
        <Route path="/formas" element={<Shapes />} />
        <Route path="/descubre" element={<Discover />} />
        <Route path="/cuentos" element={<Stories />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
