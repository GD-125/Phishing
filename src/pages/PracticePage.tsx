import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import PhishingDemo from '../components/PhishingDemo';
import { demoScenarios } from '../data/demoScenarios';

const PracticePage: React.FC = () => {
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  const handleNextDemo = () => {
    setCurrentDemoIndex((prevIndex) => (prevIndex + 1) % demoScenarios.length);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header 
        title="Practice Identifying Phishing" 
        subtitle="Test your knowledge with these real-world phishing scenarios" 
      />

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md text-center">
            <h3 className="text-2xl font-bold mb-4">Test Your Phishing Knowledge</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Take Google's phishing quiz to test your ability to spot phishing attempts.
            </p>
            <div className="space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://phishingquiz.withgoogle.com/', '_blank')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Click Here
              </motion.button>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Interactive Practice Scenarios</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            These scenarios simulate real phishing attempts. Practice identifying the red flags that indicate 
            a message might be a phishing attempt. This is purely for educational purposes.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextDemo}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Show Different Example
          </motion.button>
        </div>

        <PhishingDemo demo={demoScenarios[currentDemoIndex]} />

        <div className="max-w-3xl mx-auto mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Common Red Flags in Phishing Messages</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">1</span>
              <span><strong>Urgent action required</strong> - Creating pressure to act quickly without thinking</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">2</span>
              <span><strong>Suspicious links</strong> - URLs that look similar to legitimate sites but with slight differences</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">3</span>
              <span><strong>Requesting sensitive information</strong> - Legitimate organizations rarely ask for passwords or full credit card details via email</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">4</span>
              <span><strong>Spelling and grammar errors</strong> - Professional organizations typically have proofreading processes</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">5</span>
              <span><strong>Mismatched email domains</strong> - The sender's email domain doesn't match the organization they claim to represent</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">6</span>
              <span><strong>Generic greetings</strong> - "Dear Customer" instead of your name</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-3">7</span>
              <span><strong>Unexpected attachments</strong> - Files you weren't expecting, especially executable files</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PracticePage;