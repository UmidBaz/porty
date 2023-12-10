import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Header from './components/Header';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact/>
        </Routes>
        <Header/>
        <Cards/>
      </Router>
    </>
  );
}

export default App;
<Route path='/' exact/>
