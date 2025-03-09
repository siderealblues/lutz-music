import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lm-studio',
  imports: [
    CommonModule,
  ],
  templateUrl: './studio.component.html',
  styleUrl: './studio.component.scss'
})
export class StudioComponent {
  images = [
    'studio-1.jpg',
    'studio-2.jpg',
    'studio-3.jpg'
  ];
  index = 0;
  buttonClicked = false;

  onClick(newIndex: number, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.buttonClicked = true;
    this.index = newIndex;
    setTimeout(() => {
      this.buttonClicked = false;
    }, 2);
  }

  onDialogClick(dialog: HTMLDialogElement) {
    setTimeout(() => {
      if (!this.buttonClicked) {
        dialog.close();
      }
    }, 1);
  }
}
