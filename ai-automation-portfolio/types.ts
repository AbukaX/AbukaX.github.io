export interface CaseStudy {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  color: string;
  problem: string;
  solution: {
    description: string;
    steps: string[];
  };
  integrations: string[];
  results: string[];
  stats: {
    label: string;
    value: string;
    desc: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}