import { Profile } from "./profile.interface";


export const venkatesh: Profile = {
  name: 'Venkatesh Anbu Selvam',
  role: 'Full-Stack Software Engineer • Back-End Engineer • API and Cloud Engineer',
  location: 'Bronx, New York - 10463',
  phone: '+1 (646) 494-5454',
  email: 'vkh@live.in',
  linkedin: 'https://www.linkedin.com/in/venkateshanbu',
  github: 'https://github.com/A-Venkatesh',
  displayPicture: 'https://media.licdn.com/dms/image/v2/D5603AQE3s9kqPTToRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711751348767?e=1735776000&v=beta&t=8O3r-ttSxZtJKmWqrCXKfG62GnauglM4Mlv2-CZ1F8Y',
  about: 'Seasoned Full Stack Software Engineer with 6+ years of experience. I specialize in creation and development of web applications and services, covering every stage of the software development lifecycle from business analysis to testing. My expertise is in web application development, spanning from API, Java, Angular and Typescript, evidenced by contributions to Automobile, Telecom and Insurance domains. Expert in cloud platforms (Azure, GCP), DevOps (Tekton, Terraform, Jenkins, Ansible), and databases (Oracle Db, MongoDB, PostgreSQL), my skills extend to Agile methodologies, security practices, and quality assurance tools (42Crunch, SonarQube, Postman, CheckMarx).',
  skills: {
    Languages: ['Java', 'SQL', 'Typescript', 'Kotlin'],
    Frameworks: ['Spring Boot', 'Angular', 'Node.js'],
    Testing: ['JUnit', 'Mockito'],
    'Cloud Platforms': [
      { name: 'Azure', details: ['API manager', 'AD', 'Analytics', 'Cosmos DB', 'Key Vault'] },
      { name: 'Google Cloud Platform', details: ['Apigee', 'Cloud Functions', 'Cloud Data Fusion', 'Cloud Pub/Sub', 'Cloud Run', 'Cloud Logging', 'Cloud Storage', 'BigQuery', 'Cloud Secret', 'Cloud Build', 'Cloud Artifacts'] },
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
      duration: { from: '04/2024', to: 'Present' },
      logo: 'https://pbs.twimg.com/profile_images/1390283337055490048/Dt5ZJBL6_400x400.png',
      projects: [
        {
          projectTitle: 'Microserives for Ecommerce platform',
          duration: { from: '04/2024', to: 'Present' },
          client: '', // Add client name if applicable
          logo: '',
          responsibilities: [
            'Build multiple microservices using an API-first approach in Spring Boot with shift-left quality practices.',
            'Led the migration of SpringBoot microservices and APIs from on-premises PCF (Pivotal Cloud Foundry) to GCP OpenShift, utilizing JIB (Java Image Builder) for containerization and deployment to Red Hat Quay Registry.',
            'Configured clusters and namespaces, incorporating best practices such as WIF binding and Terraform configurations, while developing a comprehensive migration strategy with detailed resource calculations.',
            'Coordinated cross-team communication with the CaaS team to ensure a seamless migration process and established Tekton CI/CD pipelines for both application deployment and infrastructure changes.',
            'Managed secure credential access and executed integration tests using GCP service accounts with WIF binding.',
            'Facilitated application connectivity within the OpenShift cluster through private network (C2C) setups and exposed select services externally.',
            'Implemented logging solutions with OpenShift LogSink and GCP Service accounts to store logs in Cloud Buckets, and integrated Dynatrace for monitoring, health checks, scaling insights, and alerts.',
            'Utilized Environment Variables and ConfigMaps for configuration management and employed JFrog Artifactory for package version control to maintain deployment consistency.',
          ],
          techStack: [
            'SpringBoot',
            'GCP',
            'OpenShift',
            'JIB',
            'RedHat Quay',
            'Terraform',
            'Tekton',
            'Dynatrace',
            'JFrog Artifactory',
            'Kotlin'
          ],
        },
      ],
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
          logo: 'https://pbs.twimg.com/profile_images/1390283337055490048/Dt5ZJBL6_400x400.png',
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
