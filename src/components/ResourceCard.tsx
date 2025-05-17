import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Card from './Card';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link, icon }) => {
  return (
    <Card>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-6 h-full hover:no-underline"
      >
        <div className="flex items-center mb-4">
          <div className="text-blue-600 dark:text-blue-400">
            {icon}
          </div>
          <h3 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
          <span>Learn more</span>
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </div>
      </a>
    </Card>
  );
};

export default ResourceCard;