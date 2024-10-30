export interface SkillDetails {
  name: string;
  details?: string[];
}

export interface PersonalProject {
  projectTitle: string;
  responsibilities: string[];
  techStack: string[];
  repoURL: string;
}

export interface ExperienceProject {
  projectTitle: string;
  duration: { from: string; to: string };
  client: string;
  logo: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Experience {
  company: string;
  duration: { from: string; to: string };
  logo: string;
  projects: ExperienceProject[];
}

export interface EducationInstitution {
  name: string;
  logo: string;
  location: string;
  website: string;
}

export interface Education {
  degree: string;
  major: string;
  institution: EducationInstitution;
  duration: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  about: string;
  displayPicture: string;
  skills: {
    Languages: string[];
    Frameworks: string[];
    Testing: string[];
    'Data Libraries': string[];
    'Containerization': string[];
    Tools: string[];
    'Cloud Platforms': SkillDetails[];
    Web: string[];
    'Database Systems': string[];
    OperatingSystems: string[];
    'Version Control': string[];
    'DevOps Tools': string[];
    QualityAssurance: string[];
    SiteReliability: string[];
    MobileDevelopment: string[];
    'Build Tools': string[];
    Artifactory: string[];
    DataFormats: string[];
    'Development and Testing Tools': string[];
    'Development Practices': Array<string | SkillDetails>;
    Others: string[];
  };
  experience: Experience[];
  personalProjects: PersonalProject[];
  education: Education[];
  awards: string[];
}
