import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Lightproj from './projetcs/lightshotproj/Lightproj';
import Pastejacking from './projetcs/Pastejacking/Pastejacking';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Header/>
        <About/>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/lightproj" element={<Lightproj />} />
          <Route path="/pasteJack" element={<Pastejacking />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;