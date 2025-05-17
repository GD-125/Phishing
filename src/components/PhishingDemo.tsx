import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { PhishingDemo as PhishingDemoType } from '../types';
import Card from './Card';

interface PhishingDemoProps {
  demo: PhishingDemoType;
}

const PhishingDemo: React.FC<PhishingDemoProps> = ({ demo }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  const isCorrect = selectedOption === demo.correctAnswer;

  return (
    <Card className="max-w-3xl mx-auto mb-12">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{demo.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{demo.description}</p>
        
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 mb-6 whitespace-pre-line text-sm font-mono">
          {demo.scenario}
        </div>
        
        <div className="space-y-3 mb-6">
          {demo.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              disabled={showResult}
              className={`w-full p-3 text-left rounded-md border transition-colors ${
                selectedOption === option
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                  : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        
        {!showResult ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
              selectedOption
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </motion.button>
        ) : (
          <div>
            <div className={`p-4 rounded-md mb-4 flex items-start ${
              isCorrect 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
            }`}>
              <div className="flex-shrink-0 mr-3 mt-0.5">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="font-medium">
                  {isCorrect ? 'Correct!' : 'Incorrect!'}
                </p>
                <p className="mt-1 text-sm">
                  {isCorrect 
                    ? 'Good job identifying this phishing attempt!' 
                    : `This is a phishing attempt. The correct answer is: ${demo.correctAnswer}`}
                </p>
                {!isCorrect && (
                  <div className="mt-2 text-sm">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      <span className="font-medium">Red flags to look for:</span>
                    </div>
                    <ul className="list-disc list-inside mt-1 ml-1">
                      <li>Urgency to create pressure</li>
                      <li>Suspicious URL/domains</li>
                      <li>Requesting sensitive information</li>
                      <li>Poor grammar or spelling</li>
                      <li>Generic greeting</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReset}
              className="w-full py-2 px-4 rounded-md font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Try Another Example
            </motion.button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PhishingDemo;