import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import your page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GamingContentPage from './pages/GamingContentPage';
import ContactPage from './pages/ContactPage';

// Import Navbar
import Navbar from './components/Navbar';

import './styles/index.css';
import './styles/PageTransitions.css';

// Wrapper component for page transitions
const PageWrapper = ({ children }) => { // Removed : React.FC<{ children: React.ReactNode }>
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.5,
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-transition-container"
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
          <Route path="/gaming-content" element={<PageWrapper><GamingContentPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><div><h1>404 - Not Found</h1><p>The page you're looking for doesn't exist.</p></div></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;