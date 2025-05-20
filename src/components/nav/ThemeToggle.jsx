import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Start in 'modern' mode (your default design)
  const [theme, setTheme] = useState('modern');

  // Apply the theme class to the body whenever it changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Toggle between modern and hacker
  const toggleTheme = () => {
    setTheme(theme === 'modern' ? 'hacker' : 'modern');
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        fontSize: '0.9rem',
        padding: '0.5rem 1rem'
      }}
    >
      {theme === 'modern' ? '💻 Hacker Mode' : '🎨 Modern Mode'}
    </button>
  );
};

export default ThemeToggle;
