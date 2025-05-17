import { PhishingDemo } from '../types';

export const demoScenarios: PhishingDemo[] = [
  {
    id: '1',
    title: 'Bank Email Alert',
    description: 'You received an email claiming to be from your bank.',
    scenario: 'Subject: URGENT: Your Account Has Been Compromised\n\nDear Customer,\n\nWe have detected suspicious activity on your account. Please click the link below to verify your identity and secure your account immediately:\n\nwww.yourbank-secure.com.phish.net\n\nFailure to verify within 24 hours will result in account suspension.\n\nYourBank Security Team',
    correctAnswer: 'This is a phishing attempt',
    options: [
      'This is a legitimate email',
      'This is a phishing attempt',
      'This is a routine notification',
      'Not sure'
    ]
  },
  {
    id: '2',
    title: 'Package Delivery Notification',
    description: 'You received an SMS about a package delivery.',
    scenario: 'FedEx: Your package #3829102 is pending delivery. Please confirm your address: bit.ly/fd-deliver23',
    correctAnswer: 'This is a phishing attempt',
    options: [
      'This is a legitimate message',
      'This is a phishing attempt',
      'This is a routine notification',
      'Not sure'
    ]
  },
  {
    id: '3',
    title: 'IT Department Request',
    description: 'You received an email from your IT department.',
    scenario: 'Subject: Immediate Action Required - Password Reset\n\nDear Employee,\n\nDue to a recent security update, we need all employees to reset their network passwords immediately. Please click the link below to update your password:\n\nhttp://company-it-support.com/reset\n\nRegards,\nIT Support',
    correctAnswer: 'This is a phishing attempt',
    options: [
      'This is a legitimate email',
      'This is a phishing attempt',
      'This is a routine IT update',
      'Not sure'
    ]
  },
  {
    id: '4',
    title: 'Social Media Alert',
    description: 'You received a notification about your social media account.',
    scenario: 'Facebook Security: Your account was recently accessed from a new location. If this wasn\'t you, please verify your identity: fb-secure-login.com/verify',
    correctAnswer: 'This is a phishing attempt',
    options: [
      'This is a legitimate alert',
      'This is a phishing attempt',
      'This is a routine notification',
      'Not sure'
    ]
  },
  {
    id: '5',
    title: 'PayPal Payment Request',
    description: 'You received an email about a PayPal transaction.',
    scenario: 'Subject: PayPal - Unusual Transaction Detected\n\nDear valued customer,\n\nWe noticed a suspicious transaction of $750 on your account. If you did not authorize this payment, click here to dispute: secure-paypal-verify.net/dispute\n\nYour account will be limited if no action is taken within 12 hours.',
    correctAnswer: 'This is a phishing attempt',
    options: [
      'This is a legitimate email',
      'This is a phishing attempt',
      'This is a routine notification',
      'Not sure'
    ]
  },
  {
    id: '6',
    title: 'Google Drive Share',
    description: 'You received an email about a shared document.',
    scenario: 'Subject: Important Document Shared With You\n\nHi,\n\nA document titled "Q4_Financial_Report.xlsx" has been shared with you on Google Drive. Click here to view: drive-google.security-verify.com/document\n\nBest regards,\nGoogle Drive Team',
    correctAnswer: 'This is a phishing attempt',
    options: [
      'This is a legitimate email',
      'This is a phishing attempt',
      'This is a routine notification',
      'Not sure'
    ]
  }
];