import React, { Component, Suspense, lazy } from 'react';

// Core sections - keep these immediately loaded
import ThemeToggle from './components/nav/ThemeToggle';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';

// Lazy load heavy components for better performance
const Experience = lazy(() => import('./components/experience/Experience'));
const Services = lazy(() => import('./components/services/Services'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console for debugging
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <div className="error-content">
            <h2>🚫 Oops! Something went wrong</h2>
            <p>We're sorry, but something unexpected happened.</p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Error Details (Development Mode)</summary>
                <pre>{this.state.error.toString()}</pre>
                {this.state.errorInfo.componentStack && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}
            
            <div className="error-actions">
              <button onClick={this.handleReset} className="btn btn-primary">
                Try Again
              </button>
              <button onClick={this.handleReload} className="btn">
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component
const LoadingFallback = ({ sectionName }) => (
  <div className="loading-fallback">
    <div className="loading-content">
      <div className="loading-spinner"></div>
      <p>Loading {sectionName}...</p>
    </div>
  </div>
);

// Custom hook for intersection observer (scroll-based loading)
const useIntersectionObserver = (targetRef, options) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once visible
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [targetRef, options]);

  return isVisible;
};

// Section wrapper for lazy loading
const LazySection = ({ children, fallback, threshold = 0.1 }) => {
  const sectionRef = React.useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold });

  return (
    <div ref={sectionRef}>
      {isVisible ? (
        <ErrorBoundary>
          <Suspense fallback={fallback}>
            {children}
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div style={{ height: '100vh' }}></div> // Placeholder to maintain scroll position
      )}
    </div>
  );
};

const App = () => {
  React.useEffect(() => {
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Performance metrics:', {
          loadTime: perfData.loadEventEnd - perfData.loadEventStart,
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart
        });
      });
    }

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="app">
        {/* Fixed elements - always loaded */}
        <ThemeToggle />
        <Nav />
        
        {/* Main content with skip target */}
        <main id="main-content">
          {/* Above-the-fold content - immediately loaded */}
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <About />
          </ErrorBoundary>

          {/* Below-the-fold content - lazy loaded */}
          <LazySection 
            fallback={<LoadingFallback sectionName="Experience" />}
            threshold={0.2}
          >
            <Experience />
          </LazySection>

          <LazySection 
            fallback={<LoadingFallback sectionName="Services" />}
            threshold={0.2}
          >
            <Services />
          </LazySection>

          <LazySection 
            fallback={<LoadingFallback sectionName="Portfolio" />}
            threshold={0.2}
          >
            <Portfolio />
          </LazySection>

          <LazySection 
            fallback={<LoadingFallback sectionName="Contact" />}
            threshold={0.2}
          >
            <Contact />
          </LazySection>

          <LazySection 
            fallback={<LoadingFallback sectionName="Footer" />}
            threshold={0.1}
          >
            <Footer />
          </LazySection>
        </main>

        {/* 💬 Enhanced Floating Chat Assistant */}
        <ErrorBoundary>
          <a
            href="https://chatgpt.com/g/g-682c09ae8ff48191913c618b30818727-arvind-resume-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-chat"
            aria-label="Open AI Resume Assistant"
          >
            <span className="chat-icon">💬</span>
            <span className="chat-text">Arvind AI</span>
          </a>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;