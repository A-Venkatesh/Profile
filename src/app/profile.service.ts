import { Injectable } from '@angular/core';
import { Profile } from './profile.interface';
import { neha } from './profile.neha';
import { venkatesh } from './profile.venkatesh';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: { [key: string]: Profile } = {
    neha: neha,
    venkatesh: venkatesh
  };

  getProfile(profileKey: string): Profile {
    return this.profiles[profileKey] || venkatesh; 
  }
}