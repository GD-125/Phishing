import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`rounded-lg shadow-md bg-white dark:bg-gray-800 overflow-hidden transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;