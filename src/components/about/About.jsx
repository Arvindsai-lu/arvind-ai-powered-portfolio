import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certificates</h5>
              <small>25+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Hi! I’m Arvind Sai Dooda — a cybersecurity enthusiast and AI-driven developer focused on building secure, intelligent, and scalable systems.
          </p>
          <p>
            I bring hands-on experience with <strong>IAM, threat detection</strong>, and <strong>network forensics</strong> using tools like <strong>Splunk</strong> and <strong>Wireshark</strong>, alongside scripting in <strong>Python</strong> and <strong>Shell</strong>. I’ve also built AI-powered healthcare tools, full-stack apps, and blockchain solutions.
          </p>
          <p>
            Completed my Master’s in Cybersecurity, I’m now eager to contribute as a <strong>Security Analyst, Engineer, or AI+Security innovator</strong> — applying data-driven approaches to detect threats, secure infrastructure, and drive innovation.
          </p>
          <p>
            Let’s connect — I’m excited to help your team protect, scale, and evolve securely.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      {/* === Education Section === */}
      <div className="education__section">
        <h5>Academic Background</h5>
        <h2>Education</h2>

        <div className="education__container">
          <div className="education__item">
            <h3>Master’s in Cybersecurity Engineering</h3>
            <p><strong>Aug 2023 – May 2025 </strong><br />Illinois Institution of Technology</p>
          </div>

          <div className="education__item">
            <h3>Bachelor of Engineering in Computer Science</h3>
            <p><strong> May 2019 – May 2023  </strong><br />Anna University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
