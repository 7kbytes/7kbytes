import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => { // Removed : React.FC
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gaming & Content', path: '/gaming-content' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
    >
      <div className="navbar-logo">
        <Link to="/">
          <motion.span
            whileHover={{ scale: 1.1, color: '#e94560' }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            [YourName].dev
          </motion.span>
        </Link>
      </div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>
              <motion.span
                className={location.pathname === item.path ? 'active' : ''}
                whileHover={{ scale: 1.05, color: '#e94560' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;