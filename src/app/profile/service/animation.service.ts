import { Injectable } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  getFadeInAnimation() {
    return trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in')])
    ]);
  }

  getSlideInAnimation() {
    return trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ transform: 'translateX(-100%)', offset: 0 }),
          style({ transform: 'translateX(15px)', offset: 0.3 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ]);
  }
}
