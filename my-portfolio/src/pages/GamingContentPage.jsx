import React from 'react';
import { motion } from 'framer-motion';

const GamingContentPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ padding: '80px 20px', minHeight: '100vh', background: '#3b3b5e', color: '#e0e0e0' }}
    >
      <h1>Pro Gaming & Content Creation</h1>
      <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
        Dive into my world of competitive gaming and content creation.
        Here I'll share my streaming highlights, competitive achievements, and creative process behind my content.
      </p>
      {/* Stream embeds, content galleries, achievement lists will go here */}
    </motion.div>
  );
};

export default GamingContentPage;