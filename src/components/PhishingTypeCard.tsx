import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Target, Anchor, Smartphone, Phone, Copy } from 'lucide-react';
import { PhishingType } from '../types';
import Card from './Card';

interface PhishingTypeCardProps {
  type: PhishingType;
}

const PhishingTypeCard: React.FC<PhishingTypeCardProps> = ({ type }) => {
  const getIcon = () => {
    switch (type.icon) {
      case 'mail':
        return <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />;
      case 'target':
        return <Target className="h-8 w-8 text-red-600 dark:text-red-400" />;
      case 'anchor':
        return <Anchor className="h-8 w-8 text-teal-600 dark:text-teal-400" />;
      case 'smartphone':
        return <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />;
      case 'phone':
        return <Phone className="h-8 w-8 text-green-600 dark:text-green-400" />;
      case 'copy':
        return <Copy className="h-8 w-8 text-orange-600 dark:text-orange-400" />;
      default:
        return <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h3 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">{type.title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{type.description}</p>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
          <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">Example:</p>
          <p>{type.example}</p>
        </div>
      </div>
    </Card>
  );
};

export default PhishingTypeCard;