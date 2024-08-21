import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { faUser, faBriefcase, faGraduationCap, faAward, faMicrochip, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class DockService {

  constructor() { }

  getDockItems(profile: any): MenuItem[] {
    const items: MenuItem[] = [
      { label: 'About me', faIcon: faUser, target: 'about' }
    ];

    if (profile.skills && Object.keys(profile.skills).length > 0) {
      items.push({ label: 'Skills', faIcon: faMicrochip, target: 'skills' });
    }

    if (profile.experience && profile.experience.length > 0) {
      items.push({ label: 'Experience', faIcon: faBriefcase, target: 'experience' });
    }

    if (profile.personalProjects && profile.personalProjects.length > 0) {
      items.push({ label: 'Personal Projects', faIcon: faProjectDiagram, target: 'projects' });
    }

    if (profile.education && profile.education.length > 0) {
      items.push({ label: 'Education', faIcon: faGraduationCap, target: 'education' });
    }

    if (profile.awards && profile.awards.length > 0) {
      items.push({ label: 'Awards', faIcon: faAward, target: 'awards' });
    }

    return items;
  }
}
