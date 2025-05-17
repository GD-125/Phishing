import { PhishingType } from '../types';

export const phishingTypes: PhishingType[] = [
  {
    id: '1',
    title: 'Email Phishing',
    description: 'The most common type of phishing attack where attackers send fraudulent emails that appear to come from reputable sources.',
    example: 'An email claiming to be from your bank asking you to verify your account information by clicking on a link.',
    icon: 'mail',
  },
  {
    id: '2',
    title: 'Spear Phishing',
    description: 'A targeted form of phishing where attackers customize their approach for specific individuals or organizations.',
    example: 'An email addressed specifically to you, mentioning your company and role, asking for sensitive information.',
    icon: 'target',
  },
  {
    id: '3',
    title: 'Whaling',
    description: 'A type of spear phishing aimed at high-profile targets like C-level executives or other high-value individuals.',
    example: 'An email crafted to look like it\'s from the board of directors, targeting the CEO with an urgent financial request.',
    icon: 'anchor',
  },
  {
    id: '4',
    title: 'Smishing',
    description: 'Phishing conducted via SMS text messages instead of email.',
    example: 'A text message claiming to be from your bank asking you to call a number or click a link to verify a suspicious transaction.',
    icon: 'smartphone',
  },
  {
    id: '5',
    title: 'Vishing',
    description: 'Voice phishing that uses phone calls to deceive victims and steal personal information.',
    example: 'A call claiming to be from tech support saying your computer has a virus and asking for remote access.',
    icon: 'phone',
  },
  {
    id: '6',
    title: 'Clone Phishing',
    description: 'Attackers create a nearly identical copy of a legitimate email or website to trick recipients.',
    example: 'A duplicate of a legitimate email you previously received, but with links replaced to point to malicious sites.',
    icon: 'copy',
  },
];