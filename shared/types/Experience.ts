export type Experience = {
  title: string;
  url?: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  technologies: string[];
};

export type ExperienceTitle = {
  title: string;
  startDate: string;
  endDate?: string;
};
