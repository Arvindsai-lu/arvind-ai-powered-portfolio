import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './hero.css';
import HeaderSocials from '../header/HeaderSocials';
import MatrixBackground from './MatrixBackground';

const Hero = () => {
  const [theme, setTheme] = useState(document.body.className);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.body.className);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-container">
      {theme === 'hacker' && <MatrixBackground />}

      <h1>
        Hi, I’m<br />
        <span className="highlight">Arvind Sai Dooda</span>
      </h1>

      <div className="type-animation">
        <TypeAnimation
          sequence={[
            'Cybersecurity Analyst', 2000,
            'Secure Code Developer', 2000,
            'CTF Player & NCL Top 300', 2000,
            'Threat Hunter & Log Analyst', 2000,
            'Malware & Network Traffic Investigator', 2000,
            'Full-Stack Web Developer', 2000,
            'Cloud & IAM Security Specialist', 2000
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: '1.8rem',
            display: 'inline-block',
            color: 'var(--color-primary)'
          }}
          repeat={Infinity}
        />
      </div>

      <p className="tagline">Blending cybersecurity and AI to build secure, scalable, and intelligent solutions.</p>

      <div className="hero-buttons">
        <a href="/cv.pdf" download="Arvind_Sai_Resume.pdf" className="btn btn-primary">
          Download CV
        </a>
        <a href="#contact" className="btn">Let's Talk</a>
      </div>

      <HeaderSocials />
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </section>
  );
};

export default Hero;
