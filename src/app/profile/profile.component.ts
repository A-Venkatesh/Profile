import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {MatChipsModule} from '@angular/material/chips';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { DockModule } from 'primeng/dock';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { TimelineModule } from 'primeng/timeline';
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
    TimelineModule
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
    Java: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
    'Spring Boot': 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
  };

  defaultSkillImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAWmAe5UBdinr66fGFYymYvFCenoK9pizhg&s';

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
    this.setupFragmentNavigation();
    this.setupDockItems();
  }

  setupFragmentNavigation() {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  setupDockItems() {
    this.items = [
      { label: 'About me', icon: 'https://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg', target: 'about' },
      { label: 'Experience', icon: '/assets/docker/experience.png', target: 'experience' },
      { label: 'Skills', icon: '/assets/docker/skills.png', target: 'skills' },
      { label: 'Award', icon: '/assets/docker/award.png', target: 'award' }
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
    const imagePath = `${basePath}${skillNameVariations}.svg`;

    try {
      const req = new XMLHttpRequest();
      req.open('HEAD', imagePath, false);
      req.send();
      if (req.status === 200) {
        return imagePath;
      }
    } catch (e) {
      // Continue to fallback if error occurs
    }

    return this.skillImages[skill] || this.defaultSkillImage;
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
  
}