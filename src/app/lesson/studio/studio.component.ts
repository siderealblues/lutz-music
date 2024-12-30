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

  onClick(newIndex: number) {
    this.index = newIndex;
  }
}
