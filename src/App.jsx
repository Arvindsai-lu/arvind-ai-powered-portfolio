import React from 'react';

// Core sections
import ThemeToggle from './components/nav/ThemeToggle';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Optional
// import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <ThemeToggle />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />

      {/* 💬 Floating Chat Assistant */}
<a
  href="https://chatgpt.com/g/g-682c09ae8ff48191913c618b30818727-arvind-resume-assistant"
  target="_blank"
  rel="noreferrer"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textDecoration: 'none',
    fontWeight: 'bold',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  }}
>
  <span style={{ fontSize: '16px' }}>💬</span> AI Bot
</a>
    </>
  );
};

export default App;
