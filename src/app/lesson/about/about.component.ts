import { Component } from '@angular/core';

@Component({
  selector: 'lm-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  scrollToSignUp(): void {
    window.document.getElementById('sign-up')?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
