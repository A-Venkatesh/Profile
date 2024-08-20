import { Component, OnInit, HostListener } from '@angular/core';
import { ProfileService } from '../profile.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { DockModule } from 'primeng/dock';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { faUser, faBriefcase, faGraduationCap, faAward, faMicrochip } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    FontAwesomeModule,
    FieldsetModule,
    AvatarModule,
    PanelModule,
    ChipModule,
    DockModule,
    TimelineModule,
    ButtonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in')])
    ]),
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ transform: 'translateX(-100%)', offset: 0 }),
          style({ transform: 'translateX(15px)', offset: 0.3 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  profile: any;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  items: MenuItem[] | undefined;

  skillIcons: { [key: string]: string } = {
    Languages: 'language',
    Frameworks: 'settings',
    Testing: 'bug_report',
    CloudPlatforms: 'cloud',
    Web: 'web',
    DatabaseSystems: 'storage',
    OperatingSystems: 'computer',
    VersionControl: 'history',
    DevOpsTools: 'build',
    QualityAssurance: 'verified',
    SiteReliability: 'insights',
    MobileDevelopment: 'phone_android',
    BuildTools: 'build_circle',
    Artifactory: 'archive',
    DataFormats: 'data_usage',
    DevelopmentTools: 'code',
    DevelopmentPractice: 'engineering',
    Others: 'more_horiz'
  };

  skillImages: { [key: string]: string } = {
    '42crunch': '42crunch.svg',
    ad: 'ad.svg',
    'amazon-web-services': 'amazon-web-services.svg',
    analytics: 'analytics.svg',
    angular: 'angular.svg',
    ansible: 'ansible.svg',
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
    cloudbuild: 'cloudbuild.svg',
    'cosmos-db': 'cosmos-db.svg',
    css: 'css.svg',
    docker: 'Docker.svg',
    ec2: 'EC2.svg',
    eclipse: 'Eclipse.svg',
    firebase: 'firebase.svg',
    fossa: 'fossa.svg',
    git: 'git.svg',
    'git-(github-and-bitbucket)': 'git.svg',
    'google-cloud-platform': 'google-cloud-platform.svg',
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
    s3: 's3.svg',
    sonarqube: 'sonarqube.svg',
    splunk: 'splunk.svg',
    'spring-boot': 'spring-boot.svg',
    sql: 'sql.svg',
    svn: 'svn.svg',
    'svn-(tortoise)': 'svn.svg',
    tekton: 'tekton.svg',
    terraform: 'terraform.svg',
    tomcat: 'tomcat.svg',
    typescript: 'typescript.svg',
    webstorm: 'WebStorm.svg',
    xml: 'XML.svg'
  };
  
  
  

  defaultSkillImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAWmAe5UBdinr66fGFYymYvFCenoK9pizhg&s';

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile("venkatesh");
    this.setupFragmentNavigation();
    this.setupDockItems();
    this.updateDockPosition();
  }

  setupFragmentNavigation() {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  setupDockItems() {
    this.items = [
      {
        label: 'About me',
        faIcon: faUser,  // FontAwesome icon
        target: 'about'
      },
      {
        label: 'Skills',
        faIcon: faMicrochip,  // FontAwesome icon
        target: 'skills'
      },
      {
        label: 'Experience',
        faIcon: faBriefcase,  // FontAwesome icon
        target: 'experience'
      },
      {
        label: 'Education',
        faIcon: faGraduationCap,  // FontAwesome icon
        target: 'education'
      },
      {
        label: 'Award',
        faIcon: faAward,  // FontAwesome icon
        target: 'awards'
      }
    ];
  }

  getSkillCategories() {
    return Object.keys(this.profile.skills);
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  getSkillImage(skill: string): string {
    const basePath = 'assets/logos/';
    const skillNameVariations = skill.toLowerCase().replace(/\s+/g, '-');
  
    // Append the basePath to the found skill image or return the default image
    return this.skillImages[skillNameVariations] ? `${basePath}${this.skillImages[skillNameVariations]}` : this.defaultSkillImage;
  }
  

  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToFragment(fragment: string) {
    this.router.navigate(['/home'], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  getSkillColumns(): any[][] {
    const categories = this.getSkillCategories();
    const numberOfColumns = Math.min(3, categories.length); // Maximum 3 columns
    const columns: any[][] = Array.from({ length: numberOfColumns }, () => []);

    categories.forEach((category, index) => {
      columns[index % numberOfColumns].push(category);
    });

    return columns;
  }

  dockPosition: 'bottom' | 'top' | 'left' | 'right' = 'left';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDockPosition();
  }

  updateDockPosition() {
    if (typeof window !== 'undefined') { // Check if window is defined
      const screenWidth = window.innerWidth;
      if (screenWidth < 990) {
        this.dockPosition = 'bottom'; // For smaller screens
      } else {
        this.dockPosition = 'left'; // For larger screens
      }
    }
  }

}