import { Profile } from "./profile.interface";


export const venkatesh: Profile = {
  name: 'Venkatesh Anbu Selvam',
  role: 'Technical Anchor • Full-Stack Software Engineer • Cloud-Native Engineer',
  location: 'Detroit, Michigan - 48226',
  phone: '+1 (646) 494-5454',
  email: 'vkh@live.in',
  linkedin: 'https://www.linkedin.com/in/venkateshanbu',
  github: 'https://github.com/A-Venkatesh',
  displayPicture: 'https://media.licdn.com/dms/image/v2/D5603AQE3s9kqPTToRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711751348767?e=1773878400&v=beta&t=V-Zc0HaTTsvUPH676mev04motWbQEfFBA6pMIfMMIwo',
  about: 'Technical Lead & Cloud-Native Engineer with 8+ years of experience designing secure, scalable microservices and enterprise-grade API platforms. Proven ability to drive end-to-end architecture, mentor teams, and deliver production-resilient systems aligned with business strategy. Expert in Java 21, Spring Boot 3, and Google Cloud Platform (GCP) services. Expertise in designing high-performing, scalable systems with security-first approach. Adhere to clean code principles, delivering bug-free, maintainable, and efficient software solutions. Proficient with modern technologies including Java, SQL, Typescript, Kotlin, Angular, Node.js, Azure, GCP, AWS, and comprehensive DevOps tools.',
  skills: {
    Languages: ['Java', 'SQL', 'Typescript', 'Kotlin'],
    Frameworks: ['Spring Boot', 'Angular', 'Node.js'],
    Testing: ['JUnit', 'Mockito', 'REST Assured', 'XRAY'],
    'Cloud Platforms': [
      { name: 'Azure', details: ['API Manager', 'AD', 'B2C', 'Analytics', 'Cosmos DB', 'Key Vault'] },
      { name: 'Google Cloud Platform', details: ['Apigee x', 'Cloud Functions', 'Cloud Data Fusion', 'Cloud Pub/Sub', 'Cloud Run', 'Cloud Log', 'Cloud Storage', 'BigQuery', 'Cloud Secret', 'Cloud Build', 'Cloud Artifacts', 'Memorystore'] },
      { name: 'Amazon Web Services', details: ['Lambda', 'S3', 'EC2'] }
    ],
    Web: ['HTML', 'CSS', 'Material', 'PrimeNG'],
    'Database Systems': ['Oracle Db', 'MongoDB', 'PostgreSQL', 'BigQuery'],
    OperatingSystems: ['Unix', 'Linux'],
    'Version Control': ['GIT (GitHub and Bitbucket)', 'SVN (Tortoise)'],
    'DevOps Tools': ['Tekton', 'Terraform', 'Jenkins', 'Ansible', 'Pivotal Cloud Foundry'],
    QualityAssurance: ['SonarQube', '42Crunch', 'Fossa', 'Checkmarx', 'Postman', 'JIRA'],
    SiteReliability: ['SRE', 'Grafana', 'Health Nut'],
    MobileDevelopment: ['Native script', 'Firebase'],
    'Build Tools': ['Gradle', 'Maven'],
    Artifactory: ['JFrog', 'Nexus', 'GCP Cloud Artifacts'],
    DataFormats: ['XML', 'JSON', 'XSLT', 'YAML'],
    'Development and Testing Tools': ['IntelliJ', 'Eclipse', 'WebStorm', 'Postman', 'Docker'],
    'Development Practices': [
      { name: 'Agile', details: ['Scrum', 'Extreme Programming', 'Pair/Mob Programming'] },
      'Test Driven Development', 'Behavior Driven Development'
    ],
    Others: ['REST APIs', 'Tomcat', 'JIRA', 'Microservices', 'Kafka', 'Swagger', 'Logging', 'Hibernate', 'JPA', 'JDBC', 'OOPS', 'Splunk']
    , 'Data Libraries': [],
    'Containerization': [],
    Tools: [],
  },
  experience: [
    {
      company: 'Ford Motor Company',
      duration: { from: '09/2024', to: 'Present' },
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAllBMVEUBCVwBCVsAB1wAAFgAAFEAAE8AAFUAAFIAAFoABltaW4bIydXh4+va2uTr6/O0tMWLi6ohJWkAAEoAAE0AAFdKTX0MEF6/wM709fhjZIw1N3L///+Ula4qLWoMEWPs7fCCg6IAAECsrcF3eZy6u887PXMAAEnT1N1BQ3eZmbBsbZMYHGNSVYFOUIEAAEXMztwyNG+oqL4TkqJBAAABNklEQVR4AWIYnABAB1UlOAoE0UraCoJrhweLRpDY/Q+37jPzVV5PdkT7j2ZCKm2UMlrw9x2Hf686yj14vh/4YeTGJkmTJMuLn9O9Ke2RtSiqwLeA9TwLFOIHnK5h0rwRn9quT6v64FlvKPgnF+W10vUE2+M4CaFlmqSGv5NkIhkCOJ0v5dWbsr85i5wyxfXcDbatx9mVe6EUS02OMSL1aPFXY9wNt3sTjnOytY/nZVbpfLjWIOSCxIrwPuJlENkZrW3Zep3FTIPaZdzarMF8TmD1C2GzwDszWkWP+/naIr+XyKSL5xM1fIst6bAxIfCAJYkslg1d73vJdYsQjyiVRw/gcjXZmAVAdI5QMesKOPgIclJGKaadYFkJ7RQsiIh3TbIeTUa0/+UxO0SO8z1nJhZ7+rJhBACBlBuWpsduywAAAABJRU5ErkJggg==',
      projects: [
        {
          projectTitle: 'E-Commerce Platform',
          duration: { from: '08/2024', to: 'Present' },
          client: '', // Add client name if applicable
          logo: '',
          responsibilities: [
            'Develop and implement robust microservices for Ford\'s e-commerce platform, focusing on cart and checkout functionalities to enable seamless online and dealership-based sales processes.',
            'Lead end-to-end technical ownership—from low-level design and API contract governance (RFC-aligned) to integration enablement and production reliability.',
            'Architect and deliver security-first, cloud-native microservices for Ford\'s global e-commerce platform (Cart, Checkout, Express Checkout), driving scalable online and dealership sales.',
            'Leverage modern technologies such as Java 21, Spring Boot 3, and Google Cloud Platform (GCP) services to design and maintain high-performing, scalable systems.',
            'Collaborate closely with Product Managers, Architects, DevOps, and QA teams to deliver high-quality solutions aligned with business objectives.',
            'Conduct code reviews, adhere to best practices, and ensure compliance with Ford\'s architectural principles.',
            'Utilize AI tools like Copilot to optimize development workflows and enhance efficiency.',
            'Identify and address performance bottlenecks, optimize code, and ensure solutions meet performance requirements.',
            'Actively participate in Agile ceremonies, define technical features, contribute to user stories, and employ methodologies like Kanban and Extreme Programming to enhance workflow.'
          ],
          techStack: ['Java 21', 'Spring Boot', 'Gradle', 'Git', 'GCP', 'JFrog', 'Tekton', 'Terraform', 'Redis', 'Azure', 'Reactive', 'Dynatrace', 'Grafana', 'SonarQube', '42Crunch', 'Fossa', 'Checkmarx', 'Postman', 'JIRA', 'XRAY']
        }
      ]
    },
    {
      company: 'Wisetek Providers Inc',
      duration: { from: '04/2024', to: '08/2024' },
      logo: 'data:image/jpeg;base64,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',
      projects: [
        {
          projectTitle: 'Microservices and Cloud Migration',
          duration: { from: '04/2024', to: '08/2024' },
          client: 'Citizens Financial Group',
          logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEX8/vw0mmQEmmRkzpw0mpyczszM/vzM/szMzszxIXIHAAAAbElEQVQYlW1PSRLAMAhC1MT/v7guSS8tF5ERVKCx8GJTAKULgSi+KAIVTSGKAp7FSjDW1JgkLYXuY2WfrpTVM3xL9xPWHjHTHtXD7Ao+bDPDbSxkWTw63zs0fteew2rZ3XZO91b6OZ/nnIIPHu+ZAbgVe+0tAAAAAElFTkSuQmCC',
          responsibilities: [
            'Developed scalable microservices and secure APIs using Spring Boot and Angular, focusing on enhancing cloud connectivity and security.',
            'Played a key role in migrating legacy systems to modern microservices architecture, improving system performance and maintainability.',
            'Leveraged AWS for deploying applications, ensuring high availability and scalability.',
            'Conducted code reviews and implemented best practices in version control using Git and CI/CD pipelines with Jenkins.',
            'Collaborated with cross-functional teams to ensure timely delivery of features and improvements, adhering to Agile methodologies.',
            'Enhanced data processing and analytics capabilities using PostgreSQL and MongoDB.'
          ],
          techStack: ['Java 17', 'SpringBoot', 'Maven', 'Git', 'AWS', 'Angular', 'Mockito', 'MongoDB', 'Docker Hub', 'Vault', 'JIRA', 'Jenkins']
        }
      ]
    },
    {
      company: 'HTC Global Services',
      duration: {
        from: '04/2021',
        to: '04/2024'
      },
      logo: 'https://image-service.leadiq.com/companylogo?linkedinId=201351',
      projects: [
        {
          projectTitle: 'API Platform Enablement',
          duration: {
            from: '04/2021',
            to: '04/2024'
          },
          client: 'Ford',
          logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAllBMVEUBCVwBCVsAB1wAAFgAAFEAAE8AAFUAAFIAAFoABltaW4bIydXh4+va2uTr6/O0tMWLi6ohJWkAAEoAAE0AAFdKTX0MEF6/wM709fhjZIw1N3L///+Ula4qLWoMEWPs7fCCg6IAAECsrcF3eZy6u887PXMAAEnT1N1BQ3eZmbBsbZMYHGNSVYFOUIEAAEXMztwyNG+oqL4TkqJBAAABNklEQVR4AWIYnABAB1UlOAoE0UraCoJrhweLRpDY/Q+37jPzVV5PdkT7j2ZCKm2UMlrw9x2Hf686yj14vh/4YeTGJkmTJMuLn9O9Ke2RtSiqwLeA9TwLFOIHnK5h0rwRn9quT6v64FlvKPgnF+W10vUE2+M4CaFlmqSGv5NkIhkCOJ0v5dWbsr85i5wyxfXcDbatx9mVe6EUS02OMSL1aPFXY9wNt3sTjnOytY/nZVbpfLjWIOSCxIrwPuJlENkZrW3Zep3FTIPaZdzarMF8TmD1C2GzwDszWkWP+/naIr+XyKSL5xM1fIst6bAxIfCAJYkslg1d73vJdYsQjyiVRw/gcjXZmAVAdI5QMesKOPgIclJGKaadYFkJ7RQsiIh3TbIeTUa0/+UxO0SO8z1nJhZ7+rJhBACBlBuWpsduywAAAABJRU5ErkJggg==',
          responsibilities: [
            'Developed secure web applications that help other teams publish APIs to APIGEE gateway, catalog for searching the available APIs and access management with Angular and Spring Boot, focusing on cloud connectivity and security, utilizing OAuth, Open API, GraphQL, REST and JSON for secure, efficient APIs.',
            'Managed gateways like Azure API Management (APIM), IBM API Connect and GCP APIgee.',
            'Conducted security audits across Asia Pacific and led open office hours for API security providing expert advice and reinforcing a security culture, resulting in increase of API Compliance from 58% to 75% across all teams.',
            'Committed to Agile and eXtreme Programming (XP) methodologies, development with practices like Pair/Mob programming and Test-Driven Development (TDD).',
            'Deployed applications and microservices across major cloud platforms (Google Cloud, Microsoft Azure), leveraging SQL/NoSQL databases and focusing on scalability and reliability.',
            'Instrumental in microservices development, data modeling, and system design, creating data pipelines with GCP Data Fusion, and deploying APIs in GCP Cloud Functions (Serverless) and Cloud Run.',
            'Developed UI components with Angular, managed projects with JIRA, and ensured code quality with SonarQube, Checkmarx, and 42Crunch.',
            'Expertise in OpenAPI Specification/Swagger documentation and validate using security penetration testing (OWASP).',
            'Utilized GitHub for version control, Maven and Gradle for builds, and employed CI/CD practices with Tekton, Terraform, Jenkins, and managed artifacts with JFrog, Nexus, and GCP Cloud Artifacts.',
            'Engineered a DORA metrics system to significantly enhance the assessment of software delivery performance across all dev teams. Implemented key GCP services (BigQuery, Data Fusion, Cloud Functions, Pub/Sub, Looker Studio) to manage data workflows, process automation, and real-time analytics effectively.',
            'Developed a user-friendly registration interface with Angular and Material Design for onboarding other teams to the DORA metrics system.'
          ],
          techStack: ['Java 17', 'SpringBoot', 'Gradle (Groovy)', 'Git', 'GCP', 'Azure', 'Angular', 'Node.js', 'Mockito', 'MongoDB', 'JFrog', 'Nexus', 'GCP Cloud Artifacts']
        }
      ]
    },
    {
      company: 'Cognizant, India',
      duration: {
        from: '12/2017',
        to: '04/2021'
      },
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s',
      projects: [
        {
          projectTitle: 'Microservices for BPM',
          duration: {
            from: '07/2020',
            to: '04/2021'
          },
          client: 'Verizon',
          logo: 'https://assets.simon.com/tenantlogos/6461.png',
          responsibilities: [
            'Collaboratively developed 20+ microservices from wireframes that helped data provisioning functionality utilizing technologies such as Spring Boot, Camel, and Cassandra DB, facilitating seamless data provisioning and migration from legacy systems.',
            'Enhanced telecommunications, billing, and subscription management of BPM through the transition to agile microservices that act as middleware between UI and Legacy DB, fostering improved scalability and flexibility.',
            'Facilitated asynchronous communication via RabbitMQ, optimizing system throughput and responsiveness.'
          ],
          techStack: ['Java 8', 'Spring', 'PostgreSQL', 'Microservices', 'RabbitMQ', 'REST API', 'JIRA', 'GIT', 'Elasticsearch', 'MongoDB', 'Jenkins', 'Gradle', 'Ansible', 'AWS', 'Kibana']
        },
        {
          projectTitle: 'Mainframe to Micro-service migration',
          duration: {
            from: '01/2020',
            to: '06/2020'
          },
          client: 'Direct Line Group',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJaZcviKeVz0qqm_IyaFtQwFSaoEEpVkq0A&s',
          responsibilities: [
            'Developed Spring Boot microservices for HTTP request conversion, bridging the gap between digital and legacy systems by translating requests across JSON, XML, and Delimited formats, replacing costly licensed Data Power APIs.',
            'Streamlined data exchange processes, fostering seamless integration between modern digital platforms and legacy systems, thereby enhancing operational efficiency and reducing expenses.'
          ],
          techStack: ['Java 11', 'Spring Boot', 'PostgreSQL', 'Microservices', 'Multithreading', 'JUnit', 'Jmeter', 'JFrog', 'JIRA', 'GIT', 'Gradle', 'Kafka']
        },
        {
          projectTitle: 'SRI Application Improvement',
          duration: {
            from: '08/2018',
            to: '12/2019'
          },
          client: 'Direct Line Group',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJaZcviKeVz0qqm_IyaFtQwFSaoEEpVkq0A&s',
          responsibilities: [
            'Enhanced the SRI Application built on the JSF framework by implementing auditing capabilities, including individual audit trail pages for each document, multi-document updates, and automated indexing through internal email analysis for seamless data retrieval.',
            'Implemented advanced features such as sorting, filtering, and bulk updates to improve user experience and streamline workflow processes.',
            'Operated within an Agile Scrum framework with a dedicated team of three, ensuring efficient collaboration and iterative development to meet project goals and deliverables.'
          ],
          techStack: ['Java 6', 'JSF', 'Servlets', 'JDBC', 'EJB', 'Struts', 'Spring', 'PostgreSQL', 'PrimeFace', 'JIRA', 'GIT', 'Maven', 'HTML', 'CSS', 'Material']
        },
        {
          projectTitle: 'GDPR eCRM',
          duration: {
            from: '12/2017',
            to: '07/2018'
          },
          client: 'Direct Line Group',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJaZcviKeVz0qqm_IyaFtQwFSaoEEpVkq0A&s',
          responsibilities: [
            'Contributed to the migration of the eCRM Application to meet rigorous data protection standards, specifically addressing GDPR amendments, to bolster organizational data security and compliance.',
            'Collaborated in the implementation of enhanced data protection measures across all CRM functionalities, utilizing the Spring and Hibernate frameworks to fortify data security and ensure regulatory adherence.',
            'Engaged in the project\'s execution within a waterfall model alongside a dedicated team of two, ensuring thorough attention to detail and adherence to project milestones.'
          ],
          techStack: ['Java 8', 'Spring', 'Hibernate', 'JMS', 'JIRA', 'Oracle SQL', 'Unix', 'Maven', 'Tortoise SVN', 'XML', 'XSLT', 'IBM WebSphere']
        }
      ]
    }
  ],
  personalProjects: [],
  education: [
    {
      degree: 'Bachelor of Technology',
      major: 'Information Technology',
      institution: {
        name: 'Crescent Institute of Science and Technology',
        logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/B.S._Abdur_Rahman_Crescent_Institute_of_Science_and_Technology_logo.png',
        location: 'Chennai, TN, India',
        website: 'https://crescent.education/'
      },
      duration: '07/2013 – 05/2017',
    }
  ],
  awards: [
    'Special Award for Q1 2019 from Cognizant UKI ADM',
    'Infinite Mile Award in Q1 2018 from Cognizant UKI ADM',
    // Add other awards here
  ],
};
