import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Video, Users, Database, Globe, Search, Shield } from 'lucide-react';
import Header from '../components/Header';
import ResourceCard from '../components/ResourceCard';

const ResourcesPage: React.FC = () => {
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
        title="Additional Resources" 
        subtitle="Expand your knowledge with these trusted resources on phishing and cybersecurity" 
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Educational Resources</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            These resources provide in-depth information about phishing attacks and cybersecurity best practices.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="Report Phishing"
              description="Report phishing websites to Google's Safe Browsing service to help protect other users."
              link="https://safebrowsing.google.com/safebrowsing/report_phish/"
              icon={<Shield className="h-6 w-6" />}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="Google Security Checkup"
              description="Google's security checkup tool helps you strengthen your online security and protect against phishing."
              link="https://myaccount.google.com/security-checkup"
              icon={<Search className="h-6 w-6" />}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="FTC Consumer Information"
              description="The Federal Trade Commission's advice on how to recognize and avoid phishing scams."
              link="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"
              icon={<BookOpen className="h-6 w-6" />}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="NIST Cybersecurity Framework"
              description="The National Institute of Standards and Technology's framework for improving cybersecurity posture."
              link="https://www.nist.gov/cyberframework"
              icon={<Database className="h-6 w-6" />}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="Phishing.org"
              description="A comprehensive resource dedicated to educating users about phishing, including the latest trends and tactics."
              link="https://www.phishing.org/"
              icon={<Globe className="h-6 w-6" />}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="Cybersecurity Courses"
              description="Free and premium online courses covering various aspects of cybersecurity, including phishing prevention."
              link="https://www.coursera.org/courses?query=cybersecurity"
              icon={<Video className="h-6 w-6" />}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ResourceCard 
              title="StaySafeOnline.org"
              description="Resources from the National Cybersecurity Alliance for staying safe online, including phishing awareness."
              link="https://staysafeonline.org/"
              icon={<Users className="h-6 w-6" />}
            />
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Report Phishing Attempts</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you encounter a phishing attempt, report it to help protect others and improve anti-phishing measures:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-3">→</span>
              <span>Forward phishing emails to <strong>phishing@irs.gov</strong> (IRS), <strong>reportphishing@apwg.org</strong> (Anti-Phishing Working Group), and <strong>spam@uce.gov</strong> (FTC)</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-3">→</span>
              <span>Report phishing websites to <a href="https://safebrowsing.google.com/safebrowsing/report_phish/" className="text-blue-600 dark:text-blue-400 hover:underline">Google Safe Browsing</a></span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-3">→</span>
              <span>Report to the organization being impersonated (most companies have a dedicated email address for reporting phishing)</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-3">→</span>
              <span>File a report with the <a href="https://www.ic3.gov/" className="text-blue-600 dark:text-blue-400 hover:underline">FBI's Internet Crime Complaint Center (IC3)</a> for significant incidents</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;