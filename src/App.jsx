import React from 'react';
import './styles/base.css';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
  return (
    <>
      <Hero />
      <main className="container" style={{paddingTop: '40px', paddingBottom: '80px'}}>
        <About />
        <Products />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
