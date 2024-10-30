import { Injectable } from '@angular/core';
import { Profile } from '../data/profile.interface';
import { neha } from '../data/profile.neha';
import { venkatesh } from '../data/profile.venkatesh';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: { [key: string]: Profile } = {
    neha: neha,
    venkatesh: venkatesh
  };

  getProfile(profileKey: string): Profile {
    return this.profiles[profileKey] || neha; 
  }
}