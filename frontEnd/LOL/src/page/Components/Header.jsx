import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-xl' : 'py-4'} ${isMenuOpen ? 'bg-gradient-to-r from-purple-700 to-indigo-700' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center hover:scale-105 transition-transform duration-200" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-10 w-10 mr-2"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/40?text=Logo';
            }}
          />
          <span className="hidden sm:inline">BuildMaster</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''} text-white hover:text-purple-200 transition-colors duration-200 px-2 py-1`}
          >
            Home
          </Link>
          <Link
            to="/service"
            className={`nav-link ${isActive('/services') ? 'active' : ''} text-white hover:text-purple-200 transition-colors duration-200 px-2 py-1`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''} text-white hover:text-purple-200 transition-colors duration-200 px-2 py-1`}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''} text-white hover:text-purple-200 transition-colors duration-200 px-2 py-1`}
          >
            About
          </Link>
          <div className="flex space-x-3 ml-4">
            <Link to="/signup" className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition-all duration-300 hover:shadow-md">
              Sign Up
            </Link>
            <Link to="/login" className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition-all duration-300 hover:shadow-md">
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-purple-700 to-indigo-700 shadow-lg px-4 pb-4 flex flex-col space-y-3">
          <Link
            to="/"
            className={`text-white hover:text-purple-200 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200 text-left ${isActive('/') ? 'bg-white/10' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/service"
            className={`text-white hover:text-purple-200 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200 text-left ${isActive('/services') ? 'bg-white/10' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-white hover:text-purple-200 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200 text-left ${isActive('/contact') ? 'bg-white/10' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={`text-white hover:text-purple-200 py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200 text-left ${isActive('/about') ? 'bg-white/10' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <div className="flex flex-col space-y-3 pt-2">
            <Link to="/signup" className="bg-white text-purple-600 text-center py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors duration-200" onClick={closeMenu}>
              Sign Up
            </Link>
            <Link to="/login" className="bg-purple-800 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-900 transition-colors duration-200" onClick={closeMenu}>
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;