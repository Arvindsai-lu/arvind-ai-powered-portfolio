import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChartComponent = () => {
  const [profile, setProfile] = useState('cyber');
  const [animationComplete, setAnimationComplete] = useState(false);

  const dataSets = {
    cyber: {
      labels: [
        'SIEM & Log Analysis',
        'Penetration Testing',
        'Incident Response',
        'Threat Detection',
        'Cloud Security (AWS/GCP)',
        'Network Security',
        'Vulnerability Assessment',
        'Security Compliance'
      ],
      data: [4.5, 4, 4, 4.5, 4, 4, 4, 4],
      description: 'Cybersecurity expertise based on hands-on experience with enterprise security tools and frameworks'
    },
    dev: {
      labels: [
        'Python/SQL',
        'React.js/JavaScript',
        'AI/ML (LangChain)',
        'Cloud Platforms',
        'API Development',
        'Data Visualization',
        'Version Control (Git)',
        'Agile/DevOps'
      ],
      data: [4.5, 4, 4, 4, 3.5, 4, 4, 3.5],
      description: 'Development skills spanning full-stack web development, AI/ML, and cloud technologies'
    },
    tools: {
      labels: [
        'Splunk/QRadar',
        'Wireshark/Nmap',
        'Burp Suite/Metasploit',
        'Docker/Kubernetes',
        'TIBCO Spotfire',
        'Google Cloud Platform',
        'Autopsy/Forensics',
        'Active Directory/IAM'
      ],
      data: [4.5, 4.5, 4, 3, 4, 4, 3.5, 4],
      description: 'Proficiency with industry-standard security, development, and analytics tools'
    }
  };

  const getGradientColors = (profile) => {
    const colorMap = {
      cyber: {
        background: 'rgba(239, 68, 68, 0.15)',
        border: '#ef4444',
        point: '#ef4444'
      },
      dev: {
        background: 'rgba(59, 130, 246, 0.15)',
        border: '#3b82f6',
        point: '#3b82f6'
      },
      tools: {
        background: 'rgba(16, 185, 129, 0.15)',
        border: '#10b981',
        point: '#10b981'
      }
    };
    return colorMap[profile];
  };

  const colors = getGradientColors(profile);

  const chartData = {
    labels: dataSets[profile].labels,
    datasets: [
      {
        label: `${profile.charAt(0).toUpperCase() + profile.slice(1)} Skills (1-5 Scale)`,
        data: dataSets[profile].data,
        backgroundColor: colors.background,
        borderColor: colors.border,
        borderWidth: 2,
        pointBackgroundColor: colors.point,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.border,
        pointHoverRadius: 8,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          backdropColor: 'transparent',
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            size: 12
          },
          callback: function(value) {
            const labels = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
            return labels[value] || '';
          }
        },
        pointLabels: {
          color: colors.border,
          font: {
            size: 13,
            weight: '500'
          },
          padding: 20
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(255, 255, 255, 0.9)',
          font: {
            size: 14,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            const skillLevels = ['', 'Beginner (1)', 'Basic (2)', 'Intermediate (3)', 'Advanced (4)', 'Expert (5)'];
            const value = context.parsed.r;
            return `${context.label}: ${skillLevels[Math.floor(value)] || `Level ${value}`}`;
          }
        }
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
      onComplete: () => setAnimationComplete(true)
    },
    interaction: {
      mode: 'point',
      intersect: false
    }
  };

  const profileButtons = [
    { key: 'cyber', label: 'Cybersecurity', icon: '🛡️' },
    { key: 'dev', label: 'Development', icon: '💻' },
    { key: 'tools', label: 'Tools & Platforms', icon: '🔧' }
  ];

  return (
    <div className="radar-chart-container">
      <div className="profile-buttons">
        {profileButtons.map(({ key, label, icon }) => (
          <button 
            key={key}
            className={`profile-btn ${profile === key ? 'active' : ''}`}
            onClick={() => {
              setProfile(key);
              setAnimationComplete(false);
            }}
          >
            <span className="profile-icon">{icon}</span>
            {label}
          </button>
        ))}
      </div>
      
      <div className="chart-description">
        <p>{dataSets[profile].description}</p>
      </div>

      <div className="chart-wrapper">
        <Radar data={chartData} options={options} />
      </div>

      <div className="skill-legend">
        <div className="legend-item">
          <span className="legend-color beginner"></span>
          <span>1-2: Beginner/Basic</span>
        </div>
        <div className="legend-item">
          <span className="legend-color intermediate"></span>
          <span>3: Intermediate</span>
        </div>
        <div className="legend-item">
          <span className="legend-color advanced"></span>
          <span>4-5: Advanced/Expert</span>
        </div>
      </div>

      {animationComplete && (
        <div className="chart-stats">
          <div className="stat">
            <span className="stat-value">
              {(dataSets[profile].data.reduce((a, b) => a + b, 0) / dataSets[profile].data.length).toFixed(1)}
            </span>
            <span className="stat-label">Average Skill Level</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {dataSets[profile].data.filter(skill => skill >= 4).length}
            </span>
            <span className="stat-label">Advanced+ Skills</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RadarChartComponent;