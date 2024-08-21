import { Profile } from "./profile.interface";


export const neha: Profile = {
  name: 'Neha Galla',
  role: 'Full-Stack Software Engineer • Back-End Engineer • API and Cloud Engineer',
  location: 'Bronx, New York - 10463',
  phone: '(929) 584-4045',
  email: 'nsg2057@nyu.edu',
  linkedin: 'https://www.linkedin.com/in/venkateshanbu',
  github: 'https://github.com/A-Venkatesh',
  about: `Results-driven Software Engineer with 4 years of experience and a master’s degree in computer science with a strong foundation in computer science, excelling in data structures and algorithms, Machine Learning, Big Data, Microservices, Containerization, and Test Driven Development. Demonstrated success in developing innovative solutions, leading projects, and collaborating effectively. Completed Master of Science in Computer Science.`,
  skills: {
    Languages: ['Python', 'Java', 'SQL', 'Typescript'],
    Frameworks: ['SpringBoot', 'Spring MVC', 'Spring Data JPA', 'Angular'],
    Testing: [],
    CloudPlatforms: [
      { name: 'AWS', details: ['IAM', 'RDS', 'EC2', 'S3', 'CloudFront', 'SNS', 'Cognito', 'API Gateway'] },
      { name: 'GCP', details: ['Cloud Run', 'Storage', 'Cloud Build', 'Container Registry'] }
    ],
    Web: [],
    DatabaseSystems: ['Oracle Db', 'Microsoft SQL Server', 'MongoDB', 'PostgreSQL'],
    OperatingSystems: [],
    VersionControl: ['GIT'],
    DevOpsTools: ['Docker', 'Maven', 'Jenkins'],
    QualityAssurance: [],
    SiteReliability: [],
    MobileDevelopment: [],
    BuildTools: ['Gradle'],
    Artifactory: [],
    DataFormats: [],
    DevelopmentTestingTools: ['IntelliJ', 'Eclipse', 'WebStorm', 'Postman', 'Docker'],
    DevelopmentPractices: ['Microservices', 'REST APIs'],
    Others: ['REST APIs', 'Tomcat', 'JIRA', 'Microservices Architecture', 'Kafka', 'Swagger', 'Logging'],
  },
  experience: [
    {
      company: 'SAYge Link',
      duration: { from: '09/2023', to: 'Present' },
      logo: '',  // Add logo URL here
      projects: [
        {
          projectTitle: 'User Endpoints Development',
          duration: { from: '09/2023', to: 'Present' },
          client: '',
          logo: '',
          responsibilities: [
            'Engineered user endpoints to encompass a comprehensive suite of features, including registration, login, and profile management.',
            'Implemented robust OAuth security measures to fortify the protection of sensitive user data within APIs.',
            'Designed database schemas for categories, subcategories, and women\'s issue topics, allowing single users to express interest in multiple topics.'
          ],
          techStack: ['Python', 'FastAPI', 'Pydantic', 'Git', 'Poetry', 'Postman', 'Jira'],
        },
      ],
    },
    {
      company: 'TheoremLabs io',
      duration: { from: '05/2023', to: '09/2023' },
      logo: '',  // Add logo URL here
      projects: [
        {
          projectTitle: 'API and Cloud Engineering',
          duration: { from: '05/2023', to: '09/2023' },
          client: '',
          logo: '',
          responsibilities: [
            'Spearheaded the development and maintenance of secure and scalable REST APIs for the company\'s financial applications.',
            'Designed and implemented cloud-native solutions in GCP, employing best practices to achieve high availability and fault tolerance.',
            'Collaborated with cross-functional teams to implement DevOPS practices and secure CI/CD pipelines.'
          ],
          techStack: ['Node.js', 'Express.js', 'Jira', 'GCP (Cloud Build, Cloud Run, Cloud SQL)'],
        },
      ],
    },
    {
      company: 'Infinite Computer Solutions',
      duration: { from: '10/2020', to: '08/2021' },
      logo: '',  // Add logo URL here
      projects: [
        {
          projectTitle: 'BlueJeans Video Conferencing Application Enhancement',
          duration: { from: '10/2020', to: '08/2021' },
          client: 'Verizon',
          logo: '',  // Add logo URL here
          responsibilities: [
            'Implemented a live polling feature using web sockets to enhance the BlueJeans video conferencing application.',
            'Leveraged Angular to integrate back-end APIs and create interactive front-end features.',
            'Collaborated with cross-functional teams, employing REST APIs and Microservices architecture.'
          ],
          techStack: ['SpringBoot', 'REST APIs', 'WebSocket', 'Git', 'Maven', 'Tomcat', 'Postman', 'Jira'],
        },
      ],
    },
    {
      company: 'Happy Healthy Life Pvt Ltd',
      duration: { from: '12/2018', to: '09/2020' },
      logo: '',  // Add logo URL here
      projects: [
        {
          projectTitle: 'User Engagement Features Development',
          duration: { from: '12/2018', to: '09/2020' },
          client: '',
          logo: '',  // Add logo URL here
          responsibilities: [
            'Implemented features such as push notifications, video playback, and live chat using Quickblox.',
            'Utilized Angular to integrate various back-end functionalities and create dynamic front-end components.',
            'Orchestrated the secure hosting and maintenance of the application on AWS.'
          ],
          techStack: ['SpringBoot', 'Angular', 'Java 8', 'AWS', 'Jira', 'PostgreSQL', 'Microservices', 'Maven', 'Jenkins'],
        },
      ],
    },
    {
      company: 'Cognizant',
      duration: { from: '12/2017', to: '10/2018' },
      logo: '',  // Add logo URL here
      projects: [
        {
          projectTitle: 'Microservices Development',
          duration: { from: '12/2017', to: '10/2018' },
          client: 'Voya Financials',
          logo: '',  // Add logo URL here
          responsibilities: [
            'Developed high-impact Spring Boot-based microservices that streamlined data communication between digital and legacy systems.',
            'Leveraged Java, Spring, and Oracle SQL Developer to handle data conversions, ensuring a seamless transition between systems.'
          ],
          techStack: ['SpringBoot', 'Java 8', 'Git', 'Jira', 'Jenkins', 'Maven', 'REST'],
        },
      ],
    },
  ],
  personalProjects: [
    {
      projectTitle: 'Price Aggregator Application',
      responsibilities: [
        'Developed a Price Aggregator Application using Python, FastAPI, Angular, and MongoDB.',
        'Enhanced user experience by providing real-time pricing information across multiple e-commerce websites.'
      ],
      techStack: ['Java', 'Spring', 'Angular', 'MongoDB'],
      repoURL: '',  // Add repository URL here
    },
    {
      projectTitle: 'Reverse Visual Search',
      responsibilities: [
        'Developed a Reverse Visual Search project using Python, Keras, Scikit-Learn, and other data libraries.',
        'Achieved exceptional accuracy of up to 99.4% using state-of-the-art models such as ResNet50 and FaceNet.'
      ],
      techStack: ['Python', 'Keras', 'Scikit-Learn', 'Numpy', 'Pandas'],
      repoURL: '',  // Add repository URL here
    },
  ],
  education: [
    {
      degree: 'Master of Science',
      major: 'Computer Science',
      institution: {
        name: 'New York University',
        logo: '',  // Add logo URL here
        location: 'New York, NY',
        website: '',  // Add institution website here
      },
      duration: '08/2021 - 05/2023',
    },
  ],
  awards: [
    'Special Award for Q1 2019 from Cognizant UKI ADM',
    'Infinite Mile Award in Q1 2018 from Cognizant UKI ADM',
  ],
};