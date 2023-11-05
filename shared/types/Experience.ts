export type Experience = {
  titles?: ExperienceTitle[];
  title: string;
  url?: string;
  note?: string;
  company: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
};

export type ExperienceTitle = {
  title: string;
  startDate: string;
  endDate?: string;
};
