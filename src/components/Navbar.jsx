import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/mission', label: 'Mission' },
    { path: '/programs', label: 'Programs' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-serif font-bold text-primary-900"
            >
              🌍 One World Foundation
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-deepBlue-600'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-gray-700 hover:text-deepBlue-600'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-deepBlue-600 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/donate"
              className="px-6 py-2.5 bg-deepBlue-600 text-white rounded-lg font-semibold hover:bg-deepBlue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || location.pathname !== '/'
                ? 'text-gray-700'
                : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mb-4"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-gray-700 hover:bg-earth-50 hover:text-deepBlue-600 transition-colors ${
                  location.pathname === link.path ? 'bg-earth-50 text-deepBlue-600 font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-2.5 bg-deepBlue-600 text-white rounded-lg font-semibold text-center hover:bg-deepBlue-700 transition-colors"
            >
              Donate
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

