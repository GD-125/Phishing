import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

interface PreventionTipProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PreventionTip: React.FC<PreventionTipProps> = ({ icon, title, description }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400">
            {icon}
          </div>
          <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
};

export default PreventionTip;