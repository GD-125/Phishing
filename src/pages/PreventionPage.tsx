import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, RefreshCw, Bell, Fingerprint, FilterX, HardDrive } from 'lucide-react';
import Header from '../components/Header';
import PreventionTip from '../components/PreventionTip';

const PreventionPage: React.FC = () => {
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
        title="Phishing Prevention" 
        subtitle="Essential tips and strategies to protect yourself from phishing attacks" 
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How to Stay Safe</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            While phishing attacks are becoming more sophisticated, there are several effective strategies you can use to protect yourself.
            The following tips will help you identify and avoid phishing attempts.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<Eye className="h-6 w-6" />}
              title="Verify the Sender"
              description="Always check the email address or phone number of the sender. Phishers often use addresses that look similar to legitimate ones but with slight variations."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<Lock className="h-6 w-6" />}
              title="Check for HTTPS"
              description="Before entering personal information on a website, verify that the URL begins with 'https://' and has a padlock icon in the address bar."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<RefreshCw className="h-6 w-6" />}
              title="Use Strong, Unique Passwords"
              description="Create different passwords for each of your accounts and use a password manager to keep track of them securely."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<Bell className="h-6 w-6" />}
              title="Be Wary of Urgency"
              description="Phishing attempts often create a false sense of urgency. Be suspicious of messages that pressure you to act immediately."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<Fingerprint className="h-6 w-6" />}
              title="Enable Two-Factor Authentication"
              description="Add an extra layer of security to your accounts by enabling two-factor authentication whenever possible."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<FilterX className="h-6 w-6" />}
              title="Use Email Filtering"
              description="Enable spam filters on your email account to reduce the number of phishing attempts that reach your inbox."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<HardDrive className="h-6 w-6" />}
              title="Keep Software Updated"
              description="Regularly update your operating system, browsers, and security software to protect against the latest vulnerabilities."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PreventionTip 
              icon={<Shield className="h-6 w-6" />}
              title="Trust Your Instincts"
              description="If something feels suspicious or too good to be true, it probably is. When in doubt, verify through official channels."
            />
          </motion.div>
        </motion.div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-md max-w-4xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-300">What to do if you've been phished</h3>
              <div className="mt-2 text-yellow-700 dark:text-yellow-200">
                <p>If you think you've fallen victim to a phishing attack:</p>
                <ol className="list-decimal list-inside mt-2 ml-2 space-y-1">
                  <li>Change your passwords immediately for any compromised accounts</li>
                  <li>Contact your bank or credit card company if financial information was shared</li>
                  <li>Monitor your accounts for suspicious activity</li>
                  <li>Report the phishing attempt to the organization being impersonated</li>
                  <li>File a report with your local law enforcement or cybercrime unit</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AlertTriangle: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export default PreventionPage;