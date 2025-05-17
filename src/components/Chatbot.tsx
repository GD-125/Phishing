import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = getResponse(userMessage);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
      setIsLoading(false);
    }
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    // Greetings
    if (['hi', 'hello', 'hey', 'howdy', 'hola'].some(greeting => lowerMessage.includes(greeting))) {
      return 'Hello! I\'m your phishing awareness assistant. How can I help you learn about cybersecurity today?';
    }

    // Types of phishing
    if (lowerMessage.includes('type') || lowerMessage.includes('kinds') || lowerMessage.includes('different') || lowerMessage.includes('phishing attack')) {
      return `Here are the main types of phishing attacks:

1. Email Phishing: Mass emails impersonating legitimate organizations
2. Spear Phishing: Targeted attacks using personal information
3. Whaling: Attacks targeting high-profile executives
4. Smishing: SMS-based phishing
5. Vishing: Voice phishing via phone calls
6. Clone Phishing: Duplicating legitimate emails
7. Pharming: DNS poisoning to redirect to fake websites
8. Business Email Compromise (BEC): Impersonating business executives
9. Search Engine Phishing: Fake websites in search results
10. Social Media Phishing: Attacks through social platforms`;
    }

    // Prevention methods
    if (lowerMessage.includes('prevent') || lowerMessage.includes('protect') || lowerMessage.includes('avoid') || lowerMessage.includes('safe')) {
      return `Key phishing prevention strategies:

1. Email Security:
   • Verify sender addresses carefully
   • Don't click suspicious links
   • Be wary of unexpected attachments

2. Authentication:
   • Use strong, unique passwords
   • Enable two-factor authentication
   • Use a password manager

3. Technical Protection:
   • Keep software updated
   • Use spam filters
   • Enable email authentication

4. Best Practices:
   • Never share sensitive information via email
   • Verify requests through official channels
   • Keep informed about latest threats`;
    }

    // Signs of phishing
    if (lowerMessage.includes('sign') || lowerMessage.includes('identify') || lowerMessage.includes('spot') || lowerMessage.includes('tell') || lowerMessage.includes('red flag')) {
      return `Common signs of phishing attempts:

1. Urgency and Pressure:
   • Threatening language
   • Immediate action required
   • Limited time offers

2. Sender Red Flags:
   • Mismatched email domains
   • Slight misspellings
   • Generic greetings

3. Content Issues:
   • Grammar and spelling errors
   • Requests for sensitive data
   • Suspicious attachments
   • Unusual payment requests

4. Technical Indicators:
   • Hovering shows different URL
   • Suspicious file extensions
   • Poor formatting`;
    }

    // What to do if phished
    if (lowerMessage.includes('victim') || lowerMessage.includes('happened') || lowerMessage.includes('attacked') || lowerMessage.includes('compromised')) {
      return `If you've been phished, take these steps immediately:

1. Immediate Actions:
   • Change all passwords
   • Contact your bank
   • Enable 2FA everywhere
   • Disconnect compromised devices

2. Report the Incident:
   • Report to your IT department
   • Contact law enforcement
   • File with IC3.gov
   • Alert credit bureaus

3. Monitor Accounts:
   • Check for unauthorized activity
   • Review credit reports
   • Monitor bank statements
   • Watch for identity theft`;
    }

    // Latest trends
    if (lowerMessage.includes('trend') || lowerMessage.includes('new') || lowerMessage.includes('recent') || lowerMessage.includes('current')) {
      return `Current phishing trends and tactics:

1. AI-Enhanced Attacks:
   • AI-generated content
   • Deep fake voice calls
   • Personalized targeting

2. Emerging Threats:
   • QR code phishing
   • Cryptocurrency scams
   • Cloud service impersonation
   • Multi-channel attacks

3. Business Targeting:
   • Remote work exploitation
   • Supply chain attacks
   • Employee impersonation
   • Cloud service fraud`;
    }

    // Social engineering
    if (lowerMessage.includes('social') || lowerMessage.includes('engineer') || lowerMessage.includes('manipulate')) {
      return `Social engineering in phishing:

1. Common Tactics:
   • Authority abuse
   • Urgency creation
   • Fear manipulation
   • Trust exploitation

2. Psychology Used:
   • Fear of missing out
   • Authority bias
   • Social proof
   • Reciprocity

3. Protection Tips:
   • Verify independently
   • Question urgency
   • Check emotional triggers
   • Follow security protocols`;
    }

    // Mobile phishing
    if (lowerMessage.includes('mobile') || lowerMessage.includes('phone') || lowerMessage.includes('smartphone') || lowerMessage.includes('sms')) {
      return `Mobile phishing threats and protection:

1. Attack Vectors:
   • Smishing (SMS phishing)
   • Malicious apps
   • QR code scams
   • Fake app notifications

2. Protection Methods:
   • Use security apps
   • Verify app sources
   • Don't click unknown links
   • Enable spam filtering

3. Best Practices:
   • Update OS regularly
   • Use official app stores
   • Enable remote wiping
   • Be cautious with permissions`;
    }

    // Business protection
    if (lowerMessage.includes('business') || lowerMessage.includes('company') || lowerMessage.includes('corporate') || lowerMessage.includes('organization')) {
      return `Business phishing protection strategies:

1. Technical Controls:
   • Email authentication (DMARC/SPF)
   • Advanced threat protection
   • Network segmentation
   • Access controls

2. Employee Training:
   • Regular awareness training
   • Simulated phishing tests
   • Security policy education
   • Incident reporting procedures

3. Process Controls:
   • Payment verification protocols
   • Multi-person authorization
   • Regular security audits
   • Incident response planning`;
    }

    // Default response
    return `I can help you with:

• Types of phishing attacks
• How to identify phishing attempts
• Prevention methods
• What to do if you're phished
• Latest phishing trends
• Social engineering tactics
• Mobile phishing protection
• Business security measures

What would you like to know more about?`;
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50"
          >
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PhishGuard Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                    <Loader className="h-5 w-5 animate-spin text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about phishing..."
                  className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;