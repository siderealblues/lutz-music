import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lm-hero',
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToSignUp(): void {
    window.document.getElementById('sign-up')?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  scrollToAbout(): void {
    const aboutTop = window.document.getElementById('about')?.offsetTop || 0;
    const headerHeight = window.document.getElementsByTagName('header')[0]?.clientHeight;
    window.scroll({
      top: aboutTop - headerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
