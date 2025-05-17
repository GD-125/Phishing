import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, LockKeyhole } from 'lucide-react';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  const statsAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="relative overflow-hidden">
        <Header 
          title="Phishing Awareness & Education" 
          subtitle="Learn to identify and protect yourself from phishing attacks in the digital world" 
        />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What is Phishing?</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Phishing is a type of cybercrime where attackers impersonate legitimate organizations or individuals through email,
            text messages, or websites to trick people into revealing sensitive information such as passwords, credit card numbers,
            or personal data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            variants={statsAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Card>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full mb-4">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">83%</h3>
                <p className="text-gray-600 dark:text-gray-400">of organizations experienced phishing attacks in 2024</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={statsAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Card>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">95%</h3>
                <p className="text-gray-600 dark:text-gray-400">of breaches are caused by human error</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={statsAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Card>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4">
                  <LockKeyhole className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">70%</h3>
                <p className="text-gray-600 dark:text-gray-400">risk reduction with proper security awareness training</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Watch: Understanding Phishing Attacks</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-6">
            This educational video demonstrates how phishing attacks work and what to watch out for.
          </p>
        </div>

        <VideoPlayer 
          videoId="jBpeBULJr_E" 
          title="Understanding Phishing Attacks"
        />

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why This Matters</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
            Phishing attacks have become increasingly sophisticated, making them difficult to identify.
            Learning to recognize and respond to these threats is essential for protecting your personal information,
            financial assets, and digital identity.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/practice" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Test Your Phishing Knowledge
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;