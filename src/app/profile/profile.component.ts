import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {MatChipsModule} from '@angular/material/chips';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    FontAwesomeModule,
    MatChipsModule,
    FieldsetModule,
    AvatarModule,
    PanelModule,
    ChipModule,
    DividerModule
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
    'Spring Boot': 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
  };

  defaultSkillImage: string = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'; 
  
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
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
  
    // Return the first found image path
      const imagePath = `${basePath}${skillNameVariations}.svg`;
      // return imagePath;
      try {
        const req = new XMLHttpRequest();
        req.open('HEAD', imagePath, false);
        req.send();
  
        if (req.status === 200) {
          return imagePath;
        }
      } catch (e) {
        // Continue to the next variation if there's an error
      }
  
    // If no images match, fall back to the predefined key-value pair or default image
    return this.skillImages[skill] || this.defaultSkillImage;
  }
  
  
}