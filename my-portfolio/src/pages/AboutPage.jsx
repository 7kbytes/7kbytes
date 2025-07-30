import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => { // Removed : React.FC
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ padding: '80px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#1c1c3a', color: '#e0e0e0' }}
    >
      <h1>About Me</h1>
      <p style={{ maxWidth: '800px', fontSize: '1.2em', lineHeight: '1.8', marginTop: '20px' }}>
        This is where I'll tell my story as a developer, gamer, and creator.
        I'll dive deeper into my background, passions, and what drives me.
        Expect skill graphs, a career timeline, and maybe some fun facts!
      </p>
    </motion.div>
  );
};

export default AboutPage;