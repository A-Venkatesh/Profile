import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = {
    name: 'Venkatesh Anbu Selvam',
    role: 'Full-Stack Software Engineer • Back-End Engineer • API and Cloud Engineer',
    location: 'Bronx, New York - 10463',
    phone: '(929) 633-2204',
    email: 'vkh@live.in',
    linkedin: 'https://www.linkedin.com/in/venkateshanbu',
    github: 'https://github.com/A-Venkatesh',
    about: 'Seasoned Full Stack Software Engineer with 6+ years of experience. I specialize in creation and development of web applications and services, covering every stage of the software development lifecycle from business analysis to testing. My expertise is in web application development, spanning from API, Java, Angular and Typescript, evidenced by contributions to Automobile, Telecom and Insurance domains. Expert in cloud platforms (Azure, GCP), DevOps (Tekton, Terraform, Jenkins, Ansible), and databases (Oracle Db, MongoDB, PostgreSQL), my skills extend to Agile methodologies, security practices, and quality assurance tools (42Crunch, SonarQube, Postman, CheckMarx).',
    skills: {
      Languages: ['Java', 'SQL', 'Typescript', 'Kotlin'],
      Frameworks: ['SpringBoot', 'Angular', 'Node.js'],
      Testing: ['JUnit', 'Mockito'],
      CloudPlatforms: [
        { name: 'Azure', details: ['Azure API manager', 'AD', 'Analytics', 'Cosmo DB', 'Key Vault'] },
        { name: 'GCP', details: ['Apigee x', 'Cloud Functions', 'Cloud Data Fusion', 'Cloud Pub/Sub', 'Cloud Run', 'Cloud Log', 'BigQuery', 'Cloud Secret', 'Cloud Build', 'GCP Cloud Artifacts'] },
        { name: 'AWS', details: ['Lambda', 'S3', 'EC2'] }
      ],
      Web: ['HTML', 'CSS', 'Material'],
      DatabaseSystems: ['Oracle Db', 'MongoDB', 'PostgreSQL', 'BigQuery'],
      OperatingSystems: ['Unix', 'Linux'],
      VersionControl: ['GIT (GitHub and Bitbucket)', 'SVN (Tortoise)'],
      DevOpsTools: ['Tekton', 'Terraform', 'Jenkins', 'Ansible', 'Pivotal Cloud Foundry'],
      QualityAssurance: ['SonarQube', '42Crunch', 'Fossa', 'Checkmarx', 'Postman', 'JIRA'],
      SiteReliability: ['SRE', 'Grafana', 'Health Nut'],
      MobileDevelopment: ['Native script', 'Firebase'],
      BuildTools: ['Gradle', 'Maven'],
      Artifactory: ['JFrog', 'Nexus', 'GCP Cloud Artifacts'],
      DataFormats: ['XML', 'JSON', 'XSLT', 'YAML'],
      DevelopmentTestingTools: ['IntelliJ', 'Eclipse', 'WebStorm', 'Postman', 'Docker'],
      DevelopmentPractices: [
        { name: 'Agile', details: ['Scrum', 'Extreme Programming', 'Pair/Mob Programming'] },
         'Test Driven Development','Behavior Driven Development'
      ],
      Others: ['REST APIs', 'Tomcat', 'JIRA', 'Microservices', 'Kafka', 'Swagger', 'Logging', 'Hibernate', 'JPA', 'JDBC', 'OOPS', 'Splunk']
    },
    experience: [
      {
        company: 'HTC Global Services',
        duration: '04/2021 – 04/2024',
        projects: [
          {
            projectTitle: 'API Platform Enablement',
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
        duration: '12/2017 – 04/2021',
        projects: [
          {
            projectTitle: 'Microservices for BPM – Client - Verizon, USA',
            duration: '07/2020 – 04/2021',
            responsibilities: [
              'Collaboratively developed 20+ microservices from wireframes that helped data provisioning functionality utilizing technologies such as Spring Boot, Camel, and Cassandra DB, facilitating seamless data provisioning and migration from legacy systems.',
              'Enhanced telecommunications, billing, and subscription management of BPM through the transition to agile microservices that act as middleware between UI and Legacy DB, fostering improved scalability and flexibility.',
              'Facilitated asynchronous communication via RabbitMQ, optimizing system throughput and responsiveness.'
            ],
            techStack: ['Java 8', 'Spring', 'PostgreSQL', 'Microservices', 'RabbitMQ', 'REST API', 'JIRA', 'GIT', 'Elasticsearch', 'MongoDB', 'Jenkins', 'Gradle', 'Ansible', 'AWS', 'Kibana']
          },
          {
            projectTitle: 'Mainframe to Micro-service migration – Client - Direct Line Group',
            duration: '01/2020 – 06/2020',
            responsibilities: [
              'Developed Spring Boot microservices for HTTP request conversion, bridging the gap between digital and legacy systems by translating requests across JSON, XML, and Delimited formats, replacing costly licensed Data Power APIs.',
              'Streamlined data exchange processes, fostering seamless integration between modern digital platforms and legacy systems, thereby enhancing operational efficiency and reducing expenses.'
            ],
            techStack: ['Java 11', 'Spring Boot', 'PostgreSQL', 'Microservices', 'Multithreading', 'JUnit', 'Jmeter', 'JFrog', 'JIRA', 'GIT', 'Gradle', 'Kafka']
          },
          {
            projectTitle: 'SRI Application Improvement – Client - Direct Line Group',
            duration: '08/2018 – 12/2019',
            responsibilities: [
              'Enhanced the SRI Application built on the JSF framework by implementing auditing capabilities, including individual audit trail pages for each document, multi-document updates, and automated indexing through internal email analysis for seamless data retrieval.',
              'Implemented advanced features such as sorting, filtering, and bulk updates to improve user experience and streamline workflow processes.',
              'Operated within an Agile Scrum framework with a dedicated team of three, ensuring efficient collaboration and iterative development to meet project goals and deliverables.'
            ],
            techStack: ['Java 6', 'JSF', 'Servlets', 'JDBC', 'EJB', 'Struts', 'Spring', 'PostgreSQL', 'PrimeFace', 'JIRA', 'GIT', 'Maven', 'HTML', 'CSS', 'Material']
          },
          {
            projectTitle: 'GDPR eCRM – Client - Direct Line Group',
            duration: '12/2017 – 07/2018',
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
    education: [
      {
        degree: 'Bachelor of Technology | Information Technology',
        institution: 'Crescent Institute of Science and Technology, Chennai, TN, India',
        duration: '07/2013 – 05/2017',
      }
    ],
    awards: [
      'Special Award for Q1 2019 from Cognizant UKI ADM',
      'Infinite Mile Award in Q1 2018 from Cognizant UKI ADM',
      // Add other awards here
    ],
  };

  getProfile() {
    return this.profile;
  }
}