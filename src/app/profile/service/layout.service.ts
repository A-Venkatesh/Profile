import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  dockPosition: 'bottom' | 'top' | 'left' | 'right' = 'left';

  constructor() { 
    this.updateDockPosition();
  }

  updateDockPosition() {
    if (typeof window !== 'undefined') { 
      const screenWidth = window.innerWidth;
      this.dockPosition = screenWidth < 990 ? 'bottom' : 'left';
    }
    else { 
      console.log("Windows Undefined");
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log("window size changed");
    
    this.updateDockPosition();
  }
}
