import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComp from './components/Navbar';
import Footer from './components/Footer';
import Routers from './Router';
function App() {

  return (
    <div className='App'>
      <NavbarComp></NavbarComp>
      <Routers> </Routers>
      <Footer></Footer>
    </div>

  );
}

export default App;