import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Lightproj from './projetcs/lightshotproj/Lightproj';

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
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;