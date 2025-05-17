export interface PhishingType {
  id: string;
  title: string;
  description: string;
  example: string;
  icon: string;
}

export interface PhishingDemo {
  id: string;
  title: string;
  description: string;
  scenario: string;
  correctAnswer: string;
  options: string[];
}

export interface NavItem {
  title: string;
  path: string;
}