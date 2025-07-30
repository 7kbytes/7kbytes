import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ padding: '80px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: '#4c4c70', color: '#e0e0e0' }}
    >
      <h1>Get in Touch</h1>
      <p style={{ maxWidth: '600px', fontSize: '1.2em', lineHeight: '1.8', marginTop: '20px' }}>
        Have a project idea, a gaming challenge, or just want to say hello?
        Feel free to reach out through the form below or connect with me on social media.
      </p>
      {/* Contact form and social links will go here */}
    </motion.div>
  );
};

export default ContactPage;