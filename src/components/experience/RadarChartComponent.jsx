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

  const dataSets = {
    cyber: {
      labels: [
        'Security Operations',
        'Penetration Testing',
        'IAM & Access Control',
        'Malware Analysis',
        'Cloud Security',
        'Red Teaming',
        'Incident Response',
        'Log Analysis'
      ],
      data: [4, 4, 4, 3, 4, 3, 4, 4]
    },
    dev: {
      labels: [
        'React.js',
        'REST APIs',
        'Node.js',
        'Firebase / Netlify',
        'Responsive Design',
        'Git Workflow',
        'LangChain / RAG',
        'TIBCO Spotfire'
      ],
      data: [4, 4, 3, 3, 4, 4, 4, 3]
    }
  };

  const chartData = {
    labels: dataSets[profile].labels,
    datasets: [
      {
        label: profile === 'cyber' ? 'Cybersecurity Skill Level (1–5)' : 'Developer Skill Level (1–5)',
        data: dataSets[profile].data,
        backgroundColor: 'rgba(0, 255, 136, 0.2)',
        borderColor: '#00ff88',
        pointBackgroundColor: '#00ff88',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00ff88'
      }
    ]
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          backdropColor: 'transparent',
          color: '#ccc',
          stepSize: 1
        },
        pointLabels: {
          color: '#00ff88',
          font: { size: 14 }
        },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    },
    plugins: {
      legend: { labels: { color: '#00ff88' } }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div style={{ width: '100%', height: '450px' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button className="btn btn-primary" onClick={() => setProfile('cyber')} style={{ marginRight: '1rem' }}>
          Cybersecurity Profile
        </button>
        <button className="btn btn-primary" onClick={() => setProfile('dev')}>
          Developer Profile
        </button>
      </div>
      <Radar data={chartData} options={options} />
    </div>
  );
};

export default RadarChartComponent;
