import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = () => { // Removed : React.FC
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="hero-name" variants={textVariants}>
          Hi, I'm [Your Name]
        </motion.h1>
        <motion.p className="hero-title" variants={textVariants}>
          A Passionate <span className="highlight">Game Developer</span>,{' '}
          <span className="highlight">Software Developer</span>,{' '}
          <span className="highlight">Pro Gamer</span>, and{' '}
          <span className="highlight">Content Creator</span>.
        </motion.p>
        <motion.a
          href="#projects"
          className="hero-cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;