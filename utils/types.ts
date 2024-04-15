export type ProjectType = {
  id: number;
  title: string;
  description: string;
  techList: string[];
  githubLink: string;
  npmLink?: string;
  websiteLink?: string;
};

export type WorkExperienceType = {
  id: number;
  title: string;
  date: string;
  description?: string[];
};

export type SkillType = {
  id: number;
  skillName: string;
  imgSrc: string;
};

export type socialLinkType = {
  instagram: string;
  linkedin: string;
  twitter: string;
  github: string;
};
