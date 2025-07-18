import React, { useState, useMemo } from 'react';
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
import IMG12 from '../../assets/portfolio12.png'; // Add new image for RecruitIntel

// Enhanced project data with categories and tags
const allProjects = [
  // Current/In Progress Projects
  {
    id: 1,
    image: IMG12,
    title: 'RecruitIntel – AI-Powered Job Scam Detection Tool',
    category: 'ai',
    tags: ['AI', 'Chrome Extension', 'GPT-4', 'Machine Learning', 'Cybersecurity'],
    github: 'https://github.com/Arvindsai-lu/RecruitIntel',
    demo: '',
    description: 'AI-powered Chrome extension with 98% accuracy in detecting recruitment scams using GPT-4 and custom ML models',
    status: 'In Progress',
    date: 'June 2025 - Present',
    featured: true
  },
  
  // Security Projects
  {
    id: 2,
    image: IMG1,
    title: 'Hybrid Intrusion Detection System using Machine Learning',
    category: 'security',
    tags: ['Machine Learning', 'Cybersecurity', 'Python', 'IDS', 'Network Security'],
    github: 'https://github.com/Arvindsai-lu/Hybrid-Intrusion-Detection-System-Using-Machine-Learning-',
    demo: '',
    description: 'AI-powered IDS with 97.1% DoS detection accuracy using advanced ML algorithms',
    status: 'Completed',
    featured: true
  },
  {
    id: 3,
    image: IMG4,
    title: 'DoS (Denial of Service) Attack Detection and Mitigation Tool',
    category: 'security',
    tags: ['Network Security', 'Attack Detection', 'Python', 'Real-time Monitoring'],
    github: 'https://github.com/Arvindsai-lu/dos-detection',
    demo: '',
    description: 'Real-time DoS attack detection and prevention system with automated mitigation capabilities',
    status: 'Completed'
  },
  {
    id: 4,
    image: IMG9,
    title: 'Port Scanner CLI Tool',
    category: 'security',
    tags: ['Network Security', 'CLI', 'Python', 'Reconnaissance', 'Pentesting'],
    github: 'https://github.com/Arvindsai-lu/portscanner-python',
    demo: '',
    description: 'Advanced port scanning tool with stealth capabilities and comprehensive reporting',
    status: 'Completed'
  },
  {
    id: 5,
    image: IMG7,
    title: 'Data & Image Encryption-Decryption using Java',
    category: 'security',
    tags: ['Cryptography', 'Java', 'Data Security', 'File Protection'],
    github: 'https://github.com/Arvindsai-lu/Data-Image-Encryption-Decryption-Java',
    demo: 'https://github.com/Arvindsai-lu/Data-Image-Encryption-Decryption-Java',
    description: 'Secure encryption tool for files and images with advanced cryptographic algorithms',
    status: 'Completed'
  },
  {
    id: 6,
    image: IMG8,
    title: 'MIPS Measure Evaluation System (Healthcare AI)',
    category: 'ai',
    tags: ['Python', 'Streamlit', 'GPT-4o Mini', 'LangChain', 'Pinecone', 'Healthcare'],
    github: 'https://github.com/Arvindsai-lu/mips.git',
    demo: '',
    description: 'AI-powered healthcare app using LangChain + RAG to evaluate MIPS measures from clinical notes with explainable outputs',
    status: 'Completed',
    date: 'March 2025 - May 2025',
    featured: true
  },
  {
    id: 7,
    image: IMG10,
    title: 'System & Network Security Labs',
    category: 'security',
    tags: ['Network Security', 'Labs', 'Practical Security', 'Vulnerability Assessment'],
    github: 'https://github.com/Arvindsai-lu/Masters-Courses-and-assignments-answers/tree/main/CSP%20544%20System%20and%20Network%20Security',
    demo: '',
    description: 'Comprehensive security lab implementations covering penetration testing and vulnerability assessment',
    status: 'Completed'
  },
  {
    id: 8,
    image: IMG11,
    title: 'Threat Detection & Analysis Labs',
    category: 'security',
    tags: ['Threat Detection', 'SIEM', 'Log Analysis', 'Incident Response'],
    github: 'https://github.com/Arvindsai-lu/Threat-Detection-Analysis-labs-projects',
    demo: '',
    description: 'Advanced threat detection and analysis projects using SIEM tools and forensic techniques',
    status: 'Completed'
  },
  
  // AI/ML Projects
  {
    id: 9,
    image: IMG5,
    title: 'Deep Fake Voice Synthesizer (Voice Cloning)',
    category: 'ai',
    tags: ['AI', 'Machine Learning', 'Voice Synthesis', 'Python', 'Deep Learning'],
    github: 'https://github.com/Arvindsai-lu/Real-time-voice-cloning',
    demo: '',
    description: 'Real-time voice cloning system using advanced AI models and neural networks',
    status: 'Completed'
  },
  
  // Web Development Projects
  {
    id: 10,
    image: IMG2,
    title: 'Personal Portfolio Website (React)',
    category: 'web',
    tags: ['React', 'JavaScript', 'CSS', 'Responsive Design', 'Portfolio'],
    github: 'https://github.com/Arvindsai-lu/web-portfolio',
    demo: 'https://arvindsai-portfolio.netlify.app/',
    description: 'Modern, responsive portfolio website with theme switching and interactive components',
    status: 'Completed'
  },
  {
    id: 11,
    image: IMG3,
    title: 'Decentralized Voting System using Ethereum Blockchain',
    category: 'web',
    tags: ['Blockchain', 'Ethereum', 'Solidity', 'Web3', 'Smart Contracts'],
    github: 'https://github.com/Arvindsai-lu/Decentralized-Voting-System-Decentralized-Voting-System-with-Metamask.git',
    demo: '',
    description: 'Secure, transparent voting system built on Ethereum blockchain with MetaMask integration',
    status: 'Completed'
  },
  
  // Embedded Systems / Robotics
  {
    id: 12,
    image: IMG6,
    title: 'Hackathon: Flipkart Grid 3.0 (Robotics)',
    category: 'embedded',
    tags: ['Robotics', 'IoT', 'Python', 'Computer Vision', 'Navigation'],
    github: 'https://github.com/Arvindsai-lu/flipkart-grid-robotics',
    demo: 'https://www.youtube.com/watch?v=D0rlm-pwEn0',
    description: 'National winning robot navigation system with advanced computer vision and path planning',
    status: 'Completed',
    award: 'National Winner'
  }
];

// Enhanced project item component with status badges
const ProjectItem = ({ project, onImageLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoad?.(project.id);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'In Progress': 'status-badge status-progress',
      'Completed': 'status-badge status-completed'
    };
    return statusClasses[status] || 'status-badge';
  };

  return (
    <article className={`portfolio__item ${project.featured ? 'portfolio__item--featured' : ''}`}>
      <div className="portfolio__item-image">
        {!imageLoaded && !imageError && (
          <div className="skeleton portfolio__image-skeleton"></div>
        )}
        {imageError ? (
          <div className="portfolio__image-placeholder">
            <span>📁</span>
            <p>Image unavailable</p>
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        )}
        
        {/* Status and Award badges */}
        <div className="portfolio__item-badges">
          {project.status && (
            <span className={getStatusBadge(project.status)}>
              {project.status}
            </span>
          )}
          {project.award && (
            <span className="status-badge status-award">
              {project.award}
            </span>
          )}
          {project.featured && (
            <span className="status-badge status-featured">
              Featured
            </span>
          )}
        </div>
      </div>
      
      <div className="portfolio__item-content">
        <h3>{project.title}</h3>
        {project.date && (
          <p className="portfolio__item-date">{project.date}</p>
        )}
        {project.description && (
          <p className="portfolio__item-description">{project.description}</p>
        )}
        
        <div className="portfolio__item-tags">
          {project.tags?.slice(0, 4).map((tag, index) => (
            <span key={index} className="portfolio__tag">{tag}</span>
          ))}
          {project.tags?.length > 4 && (
            <span className="portfolio__tag portfolio__tag--more">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
        
        <div className="portfolio__item-cta">
          <a 
            href={project.github} 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter;
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  // Group projects by category and priority
  const projectsByCategory = useMemo(() => {
    const categories = {
      featured: { title: 'Featured Projects', projects: [] },
      ai: { title: 'AI / ML Projects', projects: [] },
      security: { title: 'Security Projects', projects: [] },
      web: { title: 'Web Applications', projects: [] },
      embedded: { title: 'Embedded Systems / Robotics', projects: [] }
    };

    filteredProjects.forEach(project => {
      if (project.featured && filter === 'all') {
        categories.featured.projects.push(project);
      } else if (categories[project.category]) {
        categories[project.category].projects.push(project);
      }
    });

    return categories;
  }, [filteredProjects, filter]);

  const filterCategories = [
    { key: 'all', label: 'All Projects', count: allProjects.length },
    { key: 'ai', label: 'AI/ML', count: allProjects.filter(p => p.category === 'ai').length },
    { key: 'security', label: 'Security', count: allProjects.filter(p => p.category === 'security').length },
    { key: 'web', label: 'Web Dev', count: allProjects.filter(p => p.category === 'web').length },
    { key: 'embedded', label: 'Robotics', count: allProjects.filter(p => p.category === 'embedded').length }
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      {/* Enhanced search and filter controls */}
      <div className="portfolio__controls">
        <div className="portfolio__search">
          <input 
            type="text"
            placeholder="Search projects, technologies, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="portfolio__search-input"
            aria-label="Search projects"
          />
        </div>
        
        <div className="portfolio__filters">
          {filterCategories.map(category => (
            <button 
              key={category.key}
              className={`portfolio__filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(searchTerm || filter !== 'all') && (
        <p className="portfolio__results-count">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {searchTerm && ` for "${searchTerm}"`}
        </p>
      )}

      {/* Render projects by category */}
      {Object.entries(projectsByCategory).map(([categoryKey, category]) => {
        if (category.projects.length === 0) return null;
        
        return (
          <div key={categoryKey}>
            {(filter === 'all' || categoryKey === 'featured') && (
              <h3 className="portfolio__section-title">{category.title}</h3>
            )}
            <div className="container portfolio__container">
              {category.projects.map(project => (
                <ProjectItem 
                  key={project.id} 
                  project={project}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* No results state */}
      {filteredProjects.length === 0 && (
        <div className="portfolio__no-results">
          <h3>No projects found</h3>
          <p>Try adjusting your search terms or filters.</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm('');
              setFilter('all');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;