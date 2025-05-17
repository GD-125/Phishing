import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import PhishingTypeCard from '../components/PhishingTypeCard';
import { phishingTypes } from '../data/phishingTypes';

const TypesPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header 
        title="Types of Phishing Attacks" 
        subtitle="Learn about the various phishing techniques used by attackers" 
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Common Phishing Techniques</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Phishing attacks come in many forms, each with unique characteristics. Understanding these different types
            can help you recognize and avoid falling victim to them.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {phishingTypes.map((type) => (
            <motion.div key={type.id} variants={itemVariants}>
              <PhishingTypeCard type={type} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Evolution of Phishing Techniques</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            As security measures improve, phishing techniques continue to evolve. Modern attacks often combine multiple methods
            and use advanced social engineering tactics to appear more convincing.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Recent trends include:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
            <li>AI-generated phishing content that's harder to identify as fake</li>
            <li>Targeted attacks using information gathered from social media</li>
            <li>Exploiting current events and crises to create urgency</li>
            <li>Business Email Compromise (BEC) targeting corporate environments</li>
            <li>Multi-platform attacks that combine email, phone calls, and text messages</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TypesPage;