import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillService {

  private skillIcons: { [key: string]: string } = {
    Languages: 'language',
    Frameworks: 'settings',
    Testing: 'bug_report',
    'Cloud Platforms': 'cloud',
    Web: 'web',
    'Database Systems': 'storage',
    OperatingSystems: 'computer',
    'Version Control': 'history',
    'DevOps Tools': 'build',
    QualityAssurance: 'verified',
    SiteReliability: 'insights',
    MobileDevelopment: 'phone_android',
    'Build Tools': 'build_circle',
    Artifactory: 'archive',
    DataFormats: 'data_usage',
    DevelopmentTools: 'code',
    DevelopmentPractice: 'engineering',
    Others: 'more_horiz'
  };

  private skillImages: { [key: string]: string } = {
    '42crunch': '42crunch.svg',
    ad: 'ad.svg',
    'amazon-web-services': 'amazon-web-services.svg',
    aws: 'amazon-web-services.svg',
    analytics: 'analytics.svg',
    angular: 'angular.svg',
    ansible: 'ansible.svg',
    'microsoft-sql-server': 'Microsoft-SQL-Server.svg',
    'api-manager': 'api-manager.svg',
    apigee: 'apigee.svg',
    azure: 'azure.svg',
    bigquery: 'bigquery.svg',
    checkmarx: 'checkmarx.svg',
    'cloud-data-fusion': 'cloud-data-fusion.svg',
    'cloud-functions': 'cloud-functions.svg',
    'cloud-logging': 'cloud-logging.svg',
    'cloud-pub-sub': 'cloud-pub-sub.svg',
    'cloud-storage': 'cloud-storage.svg',
    'cloud-build': 'cloud-build.svg',
    'cosmos-db': 'cosmos-db.svg',
    css: 'css.svg',
    default: 'default.svg',
    docker: 'Docker.svg',
    ec2: 'ec.png',
    eclipse: 'Eclipse.svg',
    firebase: 'firebase.svg',
    fossa: 'fossa.svg',
    git: 'git.svg',
    'git-(github-and-bitbucket)': 'git.svg',
    'google-cloud-platform': 'google-cloud-platform.svg',
    gcp: 'google-cloud-platform.svg',
    gradle: 'gradle.svg',
    grafana: 'grafana.svg',
    hibernate: 'hibernate.svg',
    html: 'html.svg',
    intellij: 'IntelliJ.svg',
    java: 'java.svg',
    jenkins: 'jenkins.svg',
    jfrog: 'jfrog.svg',
    jira: 'JIRA.svg',
    junit: 'junit.svg',
    kafka: 'kafka.svg',
    'key-vault': 'key-vault.svg',
    kotlin: 'kotlin.svg',
    lambda: 'lambda.svg',
    linux: 'Linux.svg',
    maven: 'maven.svg',
    mongodb: 'mongodb.svg',
    'native-script': 'nativescript.svg',
    nexus: 'nexus.svg',
    'node.js': 'node.js.svg',
    'oracle-db': 'oracle-db.svg',
    'pivotal-cloud-foundry': 'pivotal-cloud-foundry.svg',
    postgresql: 'postgresql.svg',
    postman: 'postman.svg',
    primeng: 'primeng.svg',
    python: 'python.svg',
    s3: 's3.svg',
    sonarqube: 'sonarqube.svg',
    splunk: 'splunk.svg',
    'spring-boot': 'spring.svg',
    springboot: 'spring.svg',
    'spring-mvc': 'spring.svg',
    'spring-data-jpa': 'spring.svg',
    sql: 'sql.svg',
    svn: 'svn.svg',
    'svn-(tortoise)': 'svn.svg',
    tekton: 'tekton.svg',
    terraform: 'terraform.svg',
    tomcat: 'tomcat.svg',
    typescript: 'typescript.svg',
    webstorm: 'WebStorm.svg',
    xml: 'XML.svg',
    'api-gateway': 'api-gateway.svg',
    'cloud-container': 'cloud-container.svg',
    'container-registry': 'cloud-container.svg',
    'cloud-run': 'cloud-run.svg',
    cloudfront: 'cloudfront.svg',
    cognito: 'cognito.svg',
    iam: 'iam.svg',
    rds: 'rds.svg',
    sns: 'sns.svg',
    'swagger-svgrepo-com': 'swagger-svgrepo-com.svg',
    swagger: 'swagger.svg',
    colab: 'colab.svg',
    jupyter: 'jupyter.svg',
    pandas: 'pandas.svg',
    opencv: 'opencv.svg',
    keras: 'keras.svg',
    pytorch: 'pytorch.svg',
    pyspark: 'pyspark.svg',
    numpy: 'numpy.svg',
    tensorflow: 'tensorflow.svg',
    'scikit-learn': 'scikit-learn.svg',
    'redhat-quay-(container-registry)': 'redhatquay.svg',
    'kubernetes-openshift-(orchestration-tool)': 'kubernetes-openshift.svg',
  };

  getSkillCategories(skills: any): string[] {
    return Object.keys(skills);
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  getSkillImage(skill: string): string {
    const basePath = 'assets/logos/';
    const skillNameVariations = skill.toLowerCase().replace(/\s+/g, '-');
  
    return this.skillImages[skillNameVariations]
      ? `${basePath}${this.skillImages[skillNameVariations]}`
      : `${basePath}${this.skillImages['default']}`;
  }

  getSkillColumns(skills: any): any[][] {
    const categories = this.getSkillCategories(skills).filter(category => skills[category].length > 0);
    const numberOfColumns = Math.min(3, categories.length);
    const columns: any[][] = Array.from({ length: numberOfColumns }, () => []);

    categories.forEach((category, index) => {
      columns[index % numberOfColumns].push(category);
    });

    return columns;
  }

  getSkillIcons(): { [key: string]: string } {
    return this.skillIcons;
  }
}
