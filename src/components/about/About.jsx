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
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certificates</h5>
              <small>Security+ & 8+ More</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Including AI & Security</small>
            </article>
          </div>

          <p>
            Hi! I'm Arvind Sai Dooda — a <strong>cybersecurity professional</strong> and <strong>AI-driven developer</strong> with hands-on experience in enterprise security operations and cutting-edge AI development.
          </p>
          
          <p>
            <strong>Recent Master's graduate in Cybersecurity Engineering</strong> from Illinois Institute of Technology (May 2025), I bring <strong>2+ years of industry experience</strong> from companies like <strong>Renault Nissan</strong> and <strong>Excelerate</strong>, where I've worked with <strong>SIEM tools (Splunk, QRadar)</strong>, <strong>cloud security (GCP, AWS)</strong>, and <strong>enterprise data protection</strong>.
          </p>
          
          <p>
            My achievements include <strong>ranking 228th globally in Reply CTF 2025</strong>, <strong>winning Flipkart Grid 3.0 nationally</strong>, and building AI-powered solutions like <strong>RecruitIntel (98% scam detection accuracy)</strong> and healthcare AI systems. I hold <strong>Security+, Google Cybersecurity</strong>, and <strong>CCNA certifications</strong>.
          </p>
          
          <p>
            I'm passionate about combining <strong>cybersecurity expertise with AI innovation</strong> to build secure, intelligent systems. Whether it's <strong>threat detection, incident response, or AI-powered security solutions</strong> — I'm ready to help your team secure and scale effectively.
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
            <h3>Master's in Cybersecurity Engineering</h3>
            <p><strong>Aug 2023 – May 2025 (Graduated)</strong><br />Illinois Institute of Technology<br />GPA: 3.40/4.0</p>
          </div>

          <div className="education__item">
            <h3>Bachelor of Engineering in Computer Science</h3>
            <p><strong>May 2019 – May 2023</strong><br />Anna University<br />GPA: 8.7/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;