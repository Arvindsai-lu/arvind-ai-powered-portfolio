import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import RadarChartComponent from './RadarChartComponent'; // adjust path if needed

const Experience = () => {
  return (
    <section id="experience">
      {/* === SKILLS MATRIX === */}
      <div style={{ marginBottom: '3rem', paddingBottom: '1.5rem' }}>
        <section id="skills-matrix">
          <h5>My Technical Skills</h5>
          <h2>Skills Matrix</h2>
          <RadarChartComponent />
        </section>
      </div>

      {/* === TECHNICAL SKILL CARDS === */}
      <div className="container experience__container">
        {/* === LANGUAGES === */}
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content experience__content--grid">
            {[
              { skill: 'Python', level: 'Intermediate' },
              { skill: 'SQL', level: 'Intermediate' },
              { skill: 'JavaScript', level: 'Basic' },
              { skill: 'C', level: 'Basic' },
              { skill: 'Node.js/React', level: 'Basic' },
              { skill: 'HTML/CSS', level: 'Intermediate' },
              { skill: 'Shell Scripting', level: 'Intermediate' },
              { skill: 'Bash', level: 'Intermediate' },
            ].map(({ skill, level }) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* === CYBERSECURITY TOOLS === */}
        <div className="experience__backend">
          <h3>Cybersecurity Tools & Platforms</h3>
          <div className="experience__content experience__content--grid">
            {[
              { skill: 'Splunk/QRadar', level: 'Intermediate' },
              { skill: 'Wireshark', level: 'Experienced' },
              { skill: 'Nmap/OpenVAS', level: 'Experienced' },
              { skill: 'Metasploit', level: 'Intermediate' },
              { skill: 'Burp Suite', level: 'Intermediate' },
              { skill: 'Docker', level: 'Basic' },
              { skill: 'SIEM Platforms', level: 'Intermediate' },
              { skill: 'AWS/GCP', level: 'Intermediate' },
              { skill: 'Git/GitHub', level: 'Intermediate' },
              { skill: 'Jira', level: 'Intermediate' },
            ].map(({ skill, level }) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* === SECURITY SKILLS === */}
        <div className="experience__frontend">
          <h3>Security Skills</h3>
          <div className="experience__content experience__content--grid">
            {[
              { skill: 'Identity & Access Management (IAM)', level: 'Intermediate' },
              { skill: 'Threat Detection & Incident Response', level: 'Intermediate' },
              { skill: 'Penetration Testing & Vulnerability Assessment', level: 'Intermediate' },
              { skill: 'Network Security & Forensics', level: 'Intermediate' },
              { skill: 'Scanning & Reconnaissance', level: 'Intermediate' },
              { skill: 'Risk Management & Compliance', level: 'Intermediate' },
              { skill: 'Offensive Security', level: 'Intermediate' },
              { skill: 'Open Source Intelligence (OSINT)', level: 'Intermediate' },
            ].map(({ skill, level }) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* === DEVELOPER SKILLS === */}
        <div className="experience__backend">
          <h3>Developer Skills</h3>
          <div className="experience__content experience__content--grid">
            {[
              { skill: 'React.js/JavaScript', level: 'Intermediate' },
              { skill: 'Node.js/REST APIs', level: 'Intermediate' },
              { skill: 'Python/SQL', level: 'Intermediate' },
              { skill: 'Firebase/Netlify', level: 'Basic' },
              { skill: 'Responsive Design', level: 'Intermediate' },
              { skill: 'Git Workflow', level: 'Intermediate' },
              { skill: 'LangChain/RAG', level: 'Intermediate' },
              { skill: 'Google Cloud (GCP)', level: 'Intermediate' }
            ].map(({ skill, level }) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* === WORK EXPERIENCE SECTION === */}
      <section id="work-experience" style={{ marginTop: '4rem' }}>
        <h5>Where I've Worked</h5>
        <h2>Work Experience</h2>

        <div className="experience__container">
          {[
            {
              title: 'Cybersecurity Intern',
              company: 'Excelerate',
              date: 'May 2023 – Jul 2023',
              points: [
                'Investigated and triaged security events using Splunk and QRadar, improving threat detection and response time.',
                'Built and tuned detection rules, correlation queries, and dashboards to monitor brute force and unauthorized access.',
                'Onboarded and enriched log data from various sources, enhancing SIEM visibility and forensic traceability.'
              ]
            },
            {
              title: 'Cybersecurity Analyst Intern',
              company: 'TCS Forage',
              date: 'Jul 2024 – Aug 2024',
              points: [
                'Built Splunk dashboards simulating threat response.',
                'Designed IAM plans for onboarding/offboarding.',
                'Audited cryptographic protocols.'
              ]
            },
            {
              title: 'Software Engineer Intern (Data Security Analyst)',
              company: 'Renault Nissan Technology Business Centre India',
              date: 'July 2022 – June 2023',
              points: [
                'Maintained 100% accuracy in secure data extraction through SQL optimization and variance analysis.',
                'Implemented data protection protocols during GCP migrations for sensitive automotive data.',
                'Reduced data processing vulnerabilities by 25% using Tibco Spotfire and Python governance frameworks.',
                'Collaborated with European clients (Italy, France) ensuring regional data protection compliance.'
              ]
            },
            {
              title: 'Technical Support Assistant',
              company: 'S4 INTERIORS & ARCHITECTS',
              date: 'Jul 2021 – June 2022',
              points: [
                'Configured TCP/IP networks, Active Directory, and managed Windows domain environments across offices.',
                'Delivered Tier 1-2 support to 15+ users, implementing MFA and endpoint protection.',
                'Administered Google Workspace with secure file-sharing policies for confidential architectural data.',
                'Managed complete device lifecycle and maintained compliance through asset tracking audits.'
              ]
            },
            {
              title: 'IT Security Analyst',
              company: 'Gurugram Cyber Cell',
              date: 'Jun 2021 – Jul 2021',
              points: [
                'Monitored network performance and implemented Veeam backup procedures for data integrity.',
                'Developed IT security policies and documented incidents to strengthen security posture.',
                'Implemented RBAC for virtualization environments and user account management.',
                'Automated administrative tasks using scripting to enhance system performance efficiency.'
              ]
            },
            {
              title: 'Cybersecurity Engineer Intern',
              company: 'Virtual Testing Foundation',
              date: 'Jan 2021 – May 2021',
              points: [
                'Collaborated on cloud feature development and bug fixes.',
                'Performed vulnerability assessments and penetration testing.',
                'Automated compliance auditing with Azure Functions.',
                'Developed internal tools using C#/.NET.'
              ]
            },
            {
              title: 'Freelance Full Stack Developer',
              company: 'Self-Employed',
              date: 'Ongoing',
              points: [
                'Delivered 10+ websites and portfolios for happy clients.',
                'Built full-stack apps with HTML, CSS, JS, React, Node.js.',
                'Optimized interfaces for SEO and mobile devices.'
              ]
            },
            {
              title: 'Open Source Contributor',
              company: 'GSSoC (GirlScript)',
              date: 'Mar 2021 – Jun 2021',
              points: [
                'Contributed to web dev and automation projects on GitHub.',
                'Fixed bugs, implemented features, and reviewed PRs.',
                'Strengthened skills in HTML, JS, React, Git, REST APIs.'
              ]
            }
          ].map(({ title, company, date, points }, i) => (
            <div className="experience__backend" key={i}>
              <h3>{title}</h3>
              {company && <h4 className="company-name">{company}</h4>}
              <small>{date}</small>
              <div className="experience__content">
                {points.map((pt, idx) => (
                  <article className="experience__details" key={idx}>
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>{pt}</div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Experience;