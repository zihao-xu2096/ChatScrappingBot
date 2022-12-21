import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComp from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <NavbarComp></NavbarComp>
      
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </div>

  );
}

export default App;