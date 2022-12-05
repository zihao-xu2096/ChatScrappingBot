import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComp from './components/Navbar';
import MainVideo from './components/MainVideo';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavbarComp></NavbarComp>
      <MainVideo></MainVideo>
      <body>
        <div className='About-Section'>
          <h2> How does it work?</h2>
        </div>
      </body>
      <Footer></Footer>
    </div>

  );
}

export default App;