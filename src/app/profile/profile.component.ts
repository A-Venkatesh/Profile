import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProfileService } from './service/profile.service';
import { DockService } from './service/dock.service';
import { NavigationService } from './service/navigation.service';
import { LayoutService } from './service/layout.service';
import { SkillService } from './service/skill.service';
import { AnimationService } from './service/animation.service';
import { MenuItem } from 'primeng/api';
import { NgOptimizedImage } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { DockModule } from 'primeng/dock';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
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
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeIn', new AnimationService().getFadeInAnimation().definitions),
    trigger('slideIn', new AnimationService().getSlideInAnimation().definitions)
  ]
})
export class ProfileComponent implements OnInit {
  profile: any;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  items: MenuItem[] | undefined;
  dockPosition: 'bottom' | 'top' | 'left' | 'right' = 'left';
  skillIcons: { [key: string]: string }

  constructor(
    private profileService: ProfileService,
    private dockService: DockService,
    private navigationService: NavigationService,
    private layoutService: LayoutService,
    private skillService: SkillService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { 
    this.skillIcons = this.getSkillIcons();
  }

  ngOnInit() {
    
    this.profile = this.profileService.getProfile(this.getSubDomain());
    this.items = this.dockService.getDockItems(this.profile);
    this.dockPosition = this.layoutService.dockPosition;
  }

  getSubDomain() {
    let subdomain= "neha";
    if (isPlatformBrowser(this.platformId)) {
      subdomain = window.location.hostname.split('.')[0];
      console.log('Subdomain:', subdomain);
    } else {
      console.log('Running on the server, window is not defined.');
    }
    return subdomain;
  }

  jumpToSection(section: string | null) {
    this.navigationService.jumpToSection(section);
  }

  scrollToFragment(fragment: string) {
    this.navigationService.scrollToFragment(fragment);
  }

  onResize(event: any) {
    this.layoutService.updateDockPosition();
  }

  getSkillColumns(): any[][] {
    return this.skillService.getSkillColumns(this.profile.skills);
  }

  getSkillImage(skill: string): string {
    return this.skillService.getSkillImage(skill);
  }

  getSkillIcons() {
    return this.skillService.getSkillIcons();
  }

  isString(value: any): boolean {
    return this.skillService.isString(value);
  }
}
