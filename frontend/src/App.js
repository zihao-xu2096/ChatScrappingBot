import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComp from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <NavbarComp></NavbarComp>
      <Home></Home>
      <Footer></Footer>
    </div>

  );
}

export default App;