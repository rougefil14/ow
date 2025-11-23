import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'About': [
      { path: '/mission', label: 'Our Mission' },
      { path: '/about', label: 'About Us' },
      { path: '/programs', label: 'Programs' },
    ],
    'Get Involved': [
      { path: '/get-involved', label: 'Volunteer' },
      { path: '/get-involved', label: 'Partner' },
      { path: '/donate', label: 'Donate' },
    ],
    'Resources': [
      { path: '/mission', label: 'Impact' },
      { path: '/about', label: 'News' },
      { path: '/get-involved', label: 'Contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-deepBlue-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                🌍 One World Foundation
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Building foundational beginnings for all humanity.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-deepBlue-600 flex items-center justify-center transition-colors"
                    aria-label={social}
                  >
                    <span className="text-sm">📱</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-300 text-sm">
            © {currentYear} One World Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
