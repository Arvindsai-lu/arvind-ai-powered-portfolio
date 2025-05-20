import React from 'react';
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

import replyImg from '../../assets/Achivements/reply.png';
import cyberquestImg from '../../assets/Achivements/cyberquest.png';
import flipkartImg from '../../assets/Achivements/flipkart.png';
import innohacksImg from '../../assets/Achivements/innohacks.png';
import nclImg from '../../assets/Achivements/ncl.png';
import hashcodeImg from '../../assets/Achivements/hashcode.png';

const Services = () => {
  const extracurriculars = [
    {
      title: 'Reply Hack the Code CTF',
      date: '2025 • Rank #228 Global',
      points: [
        'Ranked 228th globally in Reply Hack the Code 2025 CTF.',
        'Web, Crypto, and Miscellaneous challenge categories.'
      ],
      image: replyImg
    },
    {
      title: 'InnoHacks 2022 (AI Hackathon)',
      date: '2022 • 3rd Place',
      points: [
        'Developed voice cloning software using AI/ML.',
        'Ranked among top 3 teams out of 2,526 nationwide.'
      ],
      image: innohacksImg
    },
    {
      title: 'National Cyber League (NCL)',
      date: '2024 • Top 300',
      points: [
        'Top 300 in NCL 2024 Individual Competition.',
        'Forensics, Web Exploits, OSINT, Cryptography, Password Cracking, Log Analysis.'
      ],
      image: nclImg
    },
    {
      title: 'Flipkart Grid 3.0 (Hackathon)',
      date: '2022 • National Winner',
      points: [
        '1st place in national robotics challenge among 9,549 teams.',
        'Built a central monitoring & navigation system for robots.'
      ],
      image: flipkartImg
    },
    {
      title: 'CyberQuest US Cyber Challenge (CTF)',
      date: '2024 • Rank #70 / 3,500+',
      points: [
        'Secured top-70 national rank in CyberQuest 2024 CTF.',
        'Demonstrated skills in OSINT, cryptography, forensics.'
      ],
      image: cyberquestImg
    },
    {
      title: 'Smart India Hackathon (Finalist)',
      date: '2022',
      points: [
        'Designed a VR pilgrimage application for accessibility.',
        'Selected among finalists for national implementation.'
      ]
    },
    {
      title: 'Publication',
      date: '2023–2025',
      points: [
        '"Deep Fake Voice Synthesizer" published in IJARSCT Vol.3 Issue 3, May 2023.'
      ]
    },
    {
      title: 'Google Hash Code 2022 (Team Contest)',
      date: '2022 • Rank #2600 (Global)',
      points: [
        'Participated in Google Hash Code with team Ctrl+C Ctrl+V.',
        'Ranked among top 2% of 125,000+ participants globally.'
      ],
      image: hashcodeImg
    }
  ];

  return (
    <section id='services'>
      <h5>Credentials</h5>
      <h2>Certifications & Training</h2>

      <div className="container services__container">
        {/* === Certifications === */}
        <article className="service">
          <div className="service__head">
            <h3>Certifications</h3>
          </div>
          <div className="cert__columns">
            <ul className="service__list">
              <li><p><b>CompTIA Security+</b> – CompTIA</p></li>
              <li><p><b>Cisco CyberOps Associate</b> – Cisco</p></li>
              <li><p><b>ISO/IEC 27001</b> – Information Security</p></li>
              <li><p><b>Cloud Security</b> – EC-Council</p></li>
            </ul>

            <ul className="service__list">
              <li><p><b>Google Cybersecurity Professional</b> – Google</p></li>
              <li><p><b>Practical Ethical Hacking</b> – TCM Security</p></li>
              <li><p><b>HIPAA Compliance</b> – Leap of Faith</p></li>
              <li><p><b>CCNA</b> – Cisco</p></li>
            </ul>
          </div>
        </article>
      </div>

      {/* === EXTRACURRICULARS SECTION === */}
      <section id="extracurriculars" style={{ marginTop: '4rem' }}>
        <h5>Recognition</h5>
        <h2>Extracurriculars</h2>

        <div className="experience__container">
          {extracurriculars.map(({ title, date, points, image }, i) => (
            <div className="experience__backend" key={i}>
              <h3>{title}</h3>
              <small>{date}</small>
              <div className="experience__content">
                {points.map((pt, idx) => (
                  <article className="experience__details" key={idx}>
                    <BsCheckLg className="experience__details-icon" />
                    <div>{pt}</div>
                  </article>
                ))}
                {image && (
                  <img
                    src={image}
                    alt={`${title} proof`}
                    className="achievement__img"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;
