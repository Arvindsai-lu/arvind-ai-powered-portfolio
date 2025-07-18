import React, { useState } from 'react';
import './services.css';
import { BsCheckLg, BsTrophy, BsAward } from 'react-icons/bs';
import { BiCode, BiShield, BiGlobe } from 'react-icons/bi';
import { TbCertificate } from 'react-icons/tb'; // Using TbCertificate instead

import replyImg from '../../assets/Achivements/reply.png';
import cyberquestImg from '../../assets/Achivements/cyberquest.png';
import flipkartImg from '../../assets/Achivements/flipkart.png';
import innohacksImg from '../../assets/Achivements/innohacks.png';
import nclImg from '../../assets/Achivements/ncl.png';
import hashcodeImg from '../../assets/Achivements/hashcode.png';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const certifications = [
    { name: 'CompTIA Security+', issuer: 'CompTIA', category: 'security', status: 'Active' },
    { name: 'Cisco CyberOps Associate', issuer: 'Cisco', category: 'security', status: 'Active' },
    { name: 'Google Cybersecurity Professional', issuer: 'Google', category: 'security', status: 'Active' },
    { name: 'ISO/IEC 27001', issuer: 'Information Security', category: 'compliance', status: 'Active' },
    { name: 'Cloud Security', issuer: 'EC-Council', category: 'cloud', status: 'Active' },
    { name: 'Practical Ethical Hacking', issuer: 'TCM Security', category: 'security', status: 'Active' },
    { name: 'HIPAA Compliance', issuer: 'Leap of Faith', category: 'compliance', status: 'Active' },
    { name: 'CCNA', issuer: 'Cisco', category: 'networking', status: 'Active' }
  ];

  const extracurriculars = [
    {
      title: 'Reply Hack the Code CTF',
      date: '2025 • Rank #228 Global',
      category: 'ctf',
      level: 'Global',
      points: [
        'Ranked 228th globally in Reply Hack the Code 2025 CTF.',
        'Web, Crypto, and Miscellaneous challenge categories.',
        'Competed against 10,000+ international participants.'
      ],
      image: replyImg,
      highlight: true
    },
    {
      title: 'Flipkart Grid 3.0 (Hackathon)',
      date: '2022 • National Winner',
      category: 'hackathon',
      level: 'National',
      points: [
        '🏆 1st place in national robotics challenge among 9,549 teams.',
        'Built a central monitoring & navigation system for robots.',
        'Developed computer vision and AI pathfinding algorithms.'
      ],
      image: flipkartImg,
      highlight: true,
      award: 'Winner'
    },
    {
      title: 'InnoHacks 2022 (AI Hackathon)',
      date: '2022 • 3rd Place',
      category: 'hackathon',
      level: 'National',
      points: [
        '🥉 Developed voice cloning software using AI/ML.',
        'Ranked among top 3 teams out of 2,526 nationwide.',
        'Implemented real-time voice synthesis using deep learning.'
      ],
      image: innohacksImg,
      highlight: true,
      award: '3rd Place'
    },
    {
      title: 'National Cyber League (NCL)',
      date: '2024 • Top 300',
      category: 'ctf',
      level: 'National',
      points: [
        'Top 300 in NCL 2024 Individual Competition.',
        'Forensics, Web Exploits, OSINT, Cryptography, Password Cracking.',
        'Log Analysis and Network Traffic Analysis challenges.'
      ],
      image: nclImg,
      highlight: true
    },
    {
      title: 'CyberQuest US Cyber Challenge (CTF)',
      date: '2024 • Rank #70 / 3,500+',
      category: 'ctf',
      level: 'National',
      points: [
        'Secured top-70 national rank in CyberQuest 2024 CTF.',
        'Demonstrated skills in OSINT, cryptography, forensics.',
        'Top 2% performance among cybersecurity professionals.'
      ],
      image: cyberquestImg,
      highlight: true
    },
    {
      title: 'Google Hash Code 2022 (Team Contest)',
      date: '2022 • Rank #2600 (Global)',
      category: 'programming',
      level: 'Global',
      points: [
        'Participated in Google Hash Code with team Ctrl+C Ctrl+V.',
        'Ranked among top 2% of 125,000+ participants globally.',
        'Solved complex algorithmic optimization problems.'
      ],
      image: hashcodeImg
    },
    {
      title: 'Smart India Hackathon (Finalist)',
      date: '2022',
      category: 'hackathon',
      level: 'National',
      points: [
        'Designed a VR pilgrimage application for accessibility.',
        'Selected among finalists for national implementation.',
        'Focus on inclusive technology and user experience.'
      ]
    },
    {
      title: 'Research Publication',
      date: '2023–2025',
      category: 'research',
      level: 'Academic',
      points: [
        '"Deep Fake Voice Synthesizer" published in IJARSCT Vol.3 Issue 3, May 2023.',
        'Peer-reviewed research on AI voice synthesis technology.',
        'Contributing to academic knowledge in AI/ML field.'
      ]
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Achievements', icon: BsTrophy },
    { key: 'ctf', label: 'CTF Competitions', icon: BiShield },
    { key: 'hackathon', label: 'Hackathons', icon: BiCode },
    { key: 'programming', label: 'Programming', icon: BiGlobe },
    { key: 'research', label: 'Research', icon: BsAward }
  ];

  const filteredExtracurriculars = activeFilter === 'all' 
    ? extracurriculars 
    : extracurriculars.filter(item => item.category === activeFilter);

  const getCertificationIcon = (category) => {
    switch(category) {
      case 'security': return <BiShield className="cert-icon security" />;
      case 'cloud': return <BiGlobe className="cert-icon cloud" />;
      case 'networking': return <BiCode className="cert-icon networking" />;
              case 'compliance': return <TbCertificate className="cert-icon compliance" />;
      default: return <BsAward className="cert-icon default" />;
    }
  };

  return (
    <section id='services'>
      <h5>Credentials</h5>
      <h2>Certifications & Training</h2>

      <div className="container services__container">
        {/* === Certifications === */}
        <article className="service">
          <div className="service__head">
            <h3><TbCertificate /> Professional Certifications</h3>
          </div>
          <div className="cert__columns">
            <ul className="service__list">
              {certifications.slice(0, Math.ceil(certifications.length / 2)).map((cert, index) => (
                <li key={index}>
                  <div className="cert-item">
                    {getCertificationIcon(cert.category)}
                    <div>
                      <p><b>{cert.name}</b></p>
                      <small className="cert-issuer">{cert.issuer}</small>
                      <span className={`cert-status ${cert.status.toLowerCase()}`}>{cert.status}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="service__list">
              {certifications.slice(Math.ceil(certifications.length / 2)).map((cert, index) => (
                <li key={index}>
                  <div className="cert-item">
                    {getCertificationIcon(cert.category)}
                    <div>
                      <p><b>{cert.name}</b></p>
                      <small className="cert-issuer">{cert.issuer}</small>
                      <span className={`cert-status ${cert.status.toLowerCase()}`}>{cert.status}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* === Stats Card === */}
        <article className="service stats-card">
          <div className="service__head">
            <h3><BsTrophy /> Achievement Stats</h3>
          </div>
          <div className="service__list">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Competitions Won</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Global Participants</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Top 2%</span>
                <span className="stat-label">Average Ranking</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8</span>
                <span className="stat-label">Active Certifications</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* === EXTRACURRICULARS SECTION === */}
      <section id="extracurriculars" style={{ marginTop: '4rem' }}>
        <h5>Recognition</h5>
        <h2>Competitions & Achievements</h2>

        {/* Filter Buttons */}
        <div className="achievement-filters">
          {filterCategories.map(category => {
            const IconComponent = category.icon;
            return (
              <button 
                key={category.key}
                className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.key)}
              >
                <IconComponent />
                {category.label}
                <span className="filter-count">
                  ({category.key === 'all' ? extracurriculars.length : extracurriculars.filter(item => item.category === category.key).length})
                </span>
              </button>
            );
          })}
        </div>

        <div className="experience__container">
          {filteredExtracurriculars.map(({ title, date, points, image, highlight, award, level }, i) => (
            <div 
              className={`experience__backend ${highlight ? 'highlight' : ''} ${award ? 'award-winner' : ''}`} 
              key={i}
            >
              <div className="achievement-header">
                <h3>{title}</h3>
                {award && <span className="award-badge">{award}</span>}
                {level && <span className="level-badge">{level}</span>}
              </div>
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
                    alt={`${title} achievement proof`}
                    className="achievement__img"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredExtracurriculars.length === 0 && (
          <div className="no-results">
            <p>No achievements found for this category.</p>
            <button 
              className="btn btn-primary"
              onClick={() => setActiveFilter('all')}
            >
              View All Achievements
            </button>
          </div>
        )}
      </section>
    </section>
  );
};

export default Services;