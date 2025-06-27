import React, { useState, useEffect } from 'react';

const Logo = ({ size = 34, className = '', showAnimation = true }) => {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
          }
          100% {
            filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
          }
        }

        .nav-pulse {
          animation: pulse 5s infinite;
        }
        .nav-glow {
          animation: glow 3s infinite;
        }
      `}</style>

      <div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
      >
        {/* Brain Container SVG */}
        <svg
          className={`absolute top-0 left-0 w-full h-full ${
            showAnimation ? 'nav-pulse' : ''
          } filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]`}
          viewBox='0 0 100 100'
        >
          <path
            d='M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z'
            fill='none'
            stroke='#60a5fa'
            strokeWidth='2'
          />
        </svg>

        {/* Circuit Lines SVG */}
        <svg
          className={`absolute top-0 left-0 w-full h-full ${
            showAnimation ? 'nav-glow' : ''
          }`}
          viewBox='0 0 100 100'
        >
          <path
            d='M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75'
            stroke='#93c5fd'
            strokeWidth='1.5'
            fill='none'
          />
          <circle cx='35' cy='80' r='2' fill='#93c5fd' />
          <circle cx='65' cy='80' r='2' fill='#93c5fd' />
        </svg>
      </div>
    </>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Solutions', href: '#features' },
    { name: 'In Action', href: '#solutions-in-action' },
    { name: 'Technology', href: '#technology' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Case Use', href: '#case-use' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`
        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-color: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 100;
          display: flex;
          align-items: center;
          padding: 0 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-bar.scrolled {
          height: 55px;
          background-color: rgba(15, 23, 42, 0.98);
        }

        .nav-logo {
          display: flex;
          align-items: center;
        }

        .nav-logo-text {
          font-size: 1.44rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin-left: 12px;
        }

        .nav-links {
          display: flex;
          margin-left: auto;
          margin-right: 40px;
          gap: 35px;
        }

        .nav-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
          background: none;
          border: none;
        }

        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -6px;
          left: 0;
          background-color: #60a5fa;
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
        }

        .nav-link:hover:after,
        .nav-link.active:after {
          width: 100%;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          margin-left: auto;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(12px);
          padding: 20px 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-nav-link {
          display: block;
          color: #94a3b8;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 10px 0;
          transition: color 0.3s ease;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .nav-bar {
            padding: 0 20px;
          }
        }
      `}</style>

      <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className='nav-logo'>
          <Logo size={34} />
          <span className='nav-logo-text'>Clin</span>
        </div>

        <div className='nav-links'>
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`nav-link ${
                activeSection === link.href ? 'active' : ''
              }`}
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          className='mobile-menu-button'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            width='24'
            height='24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`mobile-nav-link ${
                activeSection === link.href ? 'active' : ''
              }`}
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
