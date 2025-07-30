import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ padding: '80px 20px', minHeight: '100vh', background: '#2a2a4c', color: '#e0e0e0' }}
    >
      <h1>My Projects</h1>
      <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
        Here you'll find a comprehensive showcase of my Game Development and Software Development projects.
        Each project will have detailed descriptions, technologies used, and links to demos/repositories.
      </p>
      {/* Project filtering, cards, and grid will go here */}
    </motion.div>
  );
};

export default ProjectsPage;