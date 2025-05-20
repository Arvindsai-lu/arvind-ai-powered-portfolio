import React from 'react';
import './portfolio.css';

import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';
import IMG7 from '../../assets/portfolio7.png';
import IMG8 from '../../assets/portfolio8.png';
import IMG9 from '../../assets/portfolio9.png';
import IMG10 from '../../assets/portfolio10.png';
import IMG11 from '../../assets/portfolio11.png';

const securityProjects = [
  {
    id: 1,
    image: IMG1, // Replace with appropriate image later
    title: 'Hybrid Intrusion Detection System using Machine Learning',
    github: 'https://github.com/Arvindsai-lu/Hybrid-Intrusion-Detection-System-Using-Machine-Learning-',
    demo: ''
  },
  {
    id: 2,
    image: IMG4, // Replace with appropriate image later
    title: 'DoS (Denial of Service) Attack Detection and Mitigation Tool',
    github: 'https://github.com/',
    demo: ''
  },
  {
    id: 3,
    image: IMG9, // Replace with appropriate image later
    title: 'Port Scanner CLI Tool',
    github: 'https://github.com/Arvindsai-lu/portscanner-python',
    demo: ''
  },
  {
    id: 4,
    image: IMG7, // Replace with appropriate image later
    title: 'Data & Image Encryption-Decryption using Java',
    github: 'https://github.com/Arvindsai-lu/Data-Image-Encryption-Decryption-Java',
    demo: 'https://github.com/Arvindsai-lu/Data-Image-Encryption-Decryption-Java'
  },
{
  id: 10,
  image: IMG10,
  title: 'System & Network Security Labs',
  github: 'https://github.com/Arvindsai-lu/Masters-Courses-and-assignments-answers/tree/main/CSP%20544%20System%20and%20Network%20Security',
  demo: ''
},
{
  id: 11,
  image: IMG11,
  title: 'Threat Detection & Analysis Labs',
  github: 'https://github.com/Arvindsai-lu/Threat-Detection-Analysis-labs-projects',
  demo: ''
}
];

const aiProjects = [
  {
    id: 5,
    image: IMG5,
    title: 'Deep Fake Voice Synthesizer (Voice Cloning)',
    github: 'https://github.com/Arvindsai-lu/Real-time-voice-cloning',
    demo: ''
  },
  {
    id: 6,
    image: IMG8,
    title: 'MIPS Quality Measures with GPT-4 Mini',
    github: 'https://github.com/Arvindsai-lu/mips.git',
    demo: ''
  }
];

const webProjects = [
  {
    id: 7,
    image: IMG2,
    title: 'Personal Portfolio Website (React)',
    github: 'https://github.com/Arvindsai-lu/web-portfolio',
    demo: ''
  },
  {
    id: 8,
    image: IMG3,
    title: 'Decentralized Voting System using Ethereum Blockchain',
    github: 'https://github.com/Arvindsai-lu/Decentralized-Voting-System-Decentralized-Voting-System-with-Metamask.git',
    demo: ''
  }
];

const embeddedProjects = [
  {
    id: 9,
    image: IMG6,
    title: 'Hackathon: Flipkart Grid 3.0 (Robotics)',
    github: 'https://github.com/',
    demo: 'https://www.youtube.com/watch?v=D0rlm-pwEn0'
  }
];

const renderProjects = (projects) => (
  <div className="container portfolio__container">
    {projects.map(({ id, image, title, github, demo }) => (
      <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <div className="portfolio__item-cta">
          <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
          {demo && <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>}
        </div>
      </article>
    ))}
  </div>
);

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <h3 className="portfolio__section-title">Security Projects</h3>
      {renderProjects(securityProjects)}

      <h3 className="portfolio__section-title">AI / ML Projects</h3>
      {renderProjects(aiProjects)}

      <h3 className="portfolio__section-title">Web Applications</h3>
      {renderProjects(webProjects)}

      <h3 className="portfolio__section-title">Embedded Systems / Robotics</h3>
      {renderProjects(embeddedProjects)}
    </section>
  );
};

export default Portfolio;
