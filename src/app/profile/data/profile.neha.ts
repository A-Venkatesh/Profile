import { Profile } from "./profile.interface";


export const neha: Profile = {
  name: 'Neha Galla',
  role: 'Full-Stack Software Engineer • Back-End Engineer • API and Cloud Engineer',
  location: 'Bronx, New York - 10463',
  phone: '(929) 584-4045',
  email: 'nsg2057@nyu.edu',
  linkedin: 'https://www.linkedin.com/in/nehagalla',
  github: 'https://github.com/Nsg2057',
  displayPicture: 'https://media.licdn.com/dms/image/v2/D4E03AQGPBJ0cZ-D8sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689957477358?e=1735776000&v=beta&t=S9Qasp7_lz0gPS4UwArqBtY6L2fUDdd8RMn3tgjAM2I',
  about: `Results-driven Software Engineer with 5 years of experience and a master’s degree in computer science. Specialized in Data Structures and Algorithms, Machine Learning, Microservices, Containerization, and Test-Driven Development. Proven expertise in Agile Software Development (Scrum), leading projects, and effective team collaboration.`,
  skills: {
    Languages: ['Python', 'Java', 'SQL', 'Typescript'],
    Frameworks: ['SpringBoot', 'Spring MVC', 'Spring Data JPA', 'Angular'],
    Testing: [],
    'Cloud Platforms': [
      { name: 'AWS', details: ['IAM', 'RDS', 'EC2', 'S3', 'CloudFront', 'SNS', 'Cognito', 'API Gateway'] },
      { name: 'GCP', details: ['Cloud Run', 'Cloud Storage', 'Cloud Build', 'Container Registry'] }
    ],
    Web: [],
    'Database Systems': ['Oracle Db', 'Microsoft SQL Server', 'MongoDB', 'PostgreSQL'],
    'Data Libraries': [
      'NumPy', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn',
      'Pandas', 'OpenCV', 'PySpark'
    ],
    Containerization: [
      'RedHat Quay (Container Registry)', 'Kubernetes OpenShift (Orchestration Tool)'
    ],
    Tools: [
      'Colab', 'Jupyter', 'IntelliJ', 'Eclipse', 'WebStorm', 'Postman',
      'Docker', 'Gradle', 'Maven', 'Jenkins', 'Tekton'
    ],
    Others: [
      'REST APIs', 'GIT', 'Tomcat', 'JIRA', 'Microservices Architecture',
      'Kafka', 'Swagger', 'Logging'
    ],

    OperatingSystems: [],
    'Version Control': ['GIT'],
    'DevOps Tools': ['Docker', 'Maven', 'Jenkins'],
    QualityAssurance: [],
    SiteReliability: [],
    MobileDevelopment: [],
    'Build Tools': ['Gradle'],
    Artifactory: [],
    DataFormats: [],
    'Development and Testing Tools': ['IntelliJ', 'Eclipse', 'WebStorm', 'Postman', 'Docker'],
    'Development Practices': ['Microservices', 'REST APIs'],
  },

  experience: [
    {
      company: 'Ford Motor Company',
      duration: { from: '01/2024', to: 'Present' },
      logo: 'https://pbs.twimg.com/profile_images/1390283337055490048/Dt5ZJBL6_400x400.png',
      projects: [
        {
          projectTitle: 'SpringBoot Microservices Migration',
          duration: { from: '01/2024', to: 'Present' },
          client: '', // Add client name if applicable
          logo: '',
          responsibilities: [
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
            'JFrog Artifactory'
          ],
        },
      ],
    },
    {
      company: 'SAYge Link',
      duration: { from: '09/2023', to: '01/2024' },
      logo: 'https://media.bio.site/sites/AF66C67F-9D55-4F6E-A60B-287BE66D963E/h2c5FTBWHR5J9Ru5n44Ysh.png',  // Add logo URL here
      projects: [
        {
          projectTitle: 'User Endpoints Development',
          duration: { from: '09/2023', to: '01/2024' },
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
      logo: 'https://media.licdn.com/dms/image/D4E0BAQHqnbibulZbyw/company-logo_200_200/0/1689210191840?e=2147483647&v=beta&t=ryV4wAPg_I5_bwtFg-kenxbN3k_2acvk_W6EdPkN02E',  // Add logo URL here
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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmMrpj0BhEO7CyUn7A3Ur-zOioqJYMWVppg&s',  // Add logo URL here
      projects: [
        {
          projectTitle: 'BlueJeans Video Conferencing Application Enhancement',
          duration: { from: '10/2020', to: '08/2021' },
          client: 'Verizon',
          logo: 'https://logowik.com/content/uploads/images/verizon-2024-v-icon80737.logowik.com.webp',
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
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFwekkL13ZRYQ/company-logo_200_200/company-logo_200_200/0/1630511950288/happy_healthy_life_private_limited_logo?e=2147483647&v=beta&t=BtVOq-onZadU0NjPrSHF3_EieAg_5l5TiS_Xj9FiRNA',  // Add logo URL here
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
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s',
      projects: [
        {
          projectTitle: 'Microservices Development',
          duration: { from: '12/2017', to: '10/2018' },
          client: 'Voya Financials',
          logo: 'https://s3-symbol-logo.tradingview.com/voya-financial--600.png',  // Add logo URL here
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
      projectTitle: 'MULTIPLE OBJECT TRACKING',
      responsibilities: [
        'Independently developed an advanced computer vision application for Multiple Object Tracking using OpenCV, Scikit-Learn, and Kalman Filter.',
        'Achieved up to 95% accuracy in tracking multiple moving objects, with a specific focus on tennis balls in videos, even in challenging scenarios.',
        'Fine-tuned Kalman Filter parameters using Scikit-Learn, optimizing tracking performance.',
        'Delivered valuable insights for sports analysis, security, and surveillance applications through the successful implementation of the project.',
      ],
      techStack: ['OpenCV', 'Scikit-Learn', 'Kalman Filter'],
      repoURL: '', // Add GitHub repo link if available
    },
    {
      projectTitle: 'PRICE AGGREGATOR APPLICATION',
      responsibilities: [
        'Single-handedly developed a Price Aggregator Application using Python, Fast API, Angular, and MongoDB.',
        'Significantly enhanced the user experience for online shoppers by providing an efficient and convenient way to monitor prices across multiple e-commerce websites.',
        'Leveraged web scraping and API calls to enrich the website\'s functionality, allowing users to access real-time pricing information from various sources.',
        'Implemented schedulers using Python and MongoDB to ensure timely and accurate price notifications.'
      ],
      techStack: ['Java', 'Spring', 'Angular', 'MongoDB'],
      repoURL: 'https://github.com/Nsg2057/price-aggregator'  // Update with the actual URL
    },
    {
      projectTitle: 'REVERSE VISUAL SEARCH',
      responsibilities: [
        'Developed a cutting-edge Reverse Visual Search project using Python, Keras, Scikit-Learn, Numpy, Pandas, Matplotlib, KNN, and SVM.',
        'Utilized the LFW (Labelled Faces in the Wild) dataset for identification purposes, making significant advancements in computer vision.',
        'Implemented state-of-the-art models, including ResNet50 and FaceNet, combined with K-nearest neighbors (KNN) and Support Vector Machines (SVM), achieving an exceptional accuracy of up to 99.4%.',
        'Explored various machine learning techniques and convolutional neural network (CNN) architectures, providing valuable insights on their effectiveness in high-dimensional space.',
        'Demonstrated expertise in both machine learning and computer vision domains, showcasing a strong understanding of Python libraries and algorithms used in image recognition and classification tasks.'
      ],
      techStack: ['Python', 'Keras', 'Scikit-Learn', 'Numpy', 'Pandas', 'Matplotlib', 'KNN', 'SVM'],
      repoURL: 'https://github.com/Nsg2057/reverse-visual-search'  // Update with the actual URL
    },
    {
      projectTitle: 'FLAGGING FAKE NEWS FROM TWITTER DATA',
      responsibilities: [
        'Developed an innovative system for flagging fake news from Twitter data, utilizing Spark, NLTK, TF-IDF vectorization, and Scikit-Learn.',
        'Effectively pre-processed data from fact-checking websites and Twitter using Spark and NLTK (Natural Language Toolkit), creating feature vectors through TF-IDF (Term Frequency – Inverse Document Frequency).',
        'Employed Logistic Regression, Random Forest, and Support Vector Machines (SVM) to accurately predict tweet genuineness using the pre-processed data and TF-IDF vectors.',
        'Demonstrated expertise in big data processing, natural language processing (NLP), and machine learning, providing a robust solution for identifying fake news on social media platforms.',
        'Contributed to the fight against misinformation, showcasing the potential of advanced data analysis techniques in ensuring credibility and accuracy in information dissemination.'
      ],
      techStack: ['Spark', 'NLTK', 'TF-IDF', 'Scikit-Learn'],
      repoURL: 'https://github.com/Nsg2057/flagging-fake-news'  // Update with the actual URL
    },
    {
      projectTitle: 'PREDICTING STUDENT\'S ABILITY TO ANSWER A DIAGNOSTIC QUESTION',
      responsibilities: [
        'Developed an academic project focused on predicting students\' ability to answer unseen diagnostic questions, employing PyTorch, Scikit-Learn, NumPy, and Pandas.',
        'Implemented three different algorithms: K-nearest neighbours (KNN), neural network autoencoder, and collaborative filtering.',
        'Explored KNN in two variations: user-based collaborative filtering and item-based collaborative filtering, leveraging previous question responses and responses of other students to predict correctness.',
        'Demonstrated expertise in machine learning, deep learning, and data analysis, offering valuable insights into predicting student performance in educational assessments.',
        'Contributed to the educational domain, showcasing the potential of data-driven approaches in understanding student learning patterns and enhancing personalized learning experiences.'
      ],
      techStack: ['PyTorch', 'Scikit-Learn', 'NumPy', 'Pandas'],
      repoURL: 'https://github.com/Nsg2057/student-diagnostic-question'  // Update with the actual URL
    }
  ],
  education: [
    {
      degree: 'Master of Science',
      major: 'Computer Science',
      institution: {
        name: 'New York University',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxCP2J7oeWSNz4QyysUsj66aFI9wUxs5o8w&s',  // Add logo URL here
        location: 'New York, NY',
        website: 'https://www.nyu.edu/',  // Add institution website here
      },
      duration: '08/2021 - 05/2023',
    },
  ],
  awards: [],
};