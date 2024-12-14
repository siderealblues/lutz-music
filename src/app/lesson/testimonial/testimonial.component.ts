import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lm-testimonial',
  imports: [
    CommonModule,
  ],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  data = [{
    image: 'test-1.webp',
    name: 'Kalle Lemone',
    title: 'Business Owner',
    text: 'My 9 year old son has been taking guitar lessons with Daniel for several months and he loves it. Daniel is patient and makes it exciting to play and develop new skills. We are really grateful for Daniel and his teaching!'
  }, {
    image: 'test-2.jpg',
    name: 'Adam Cade',
    title: 'Surgical Technologist',
    text: 'Daniel is a great teacher and goes the extra mile for his students. I wanted to learn a new style of banjo that he didn\'t know and took on the challenge of learning it so he could show it to me. It has been a great experience and I am looking forward to my next lesson.'
  }, {
    image: 'test-3.jpg',
    name: 'Cheryl Birkey',
    title: 'Personal Trainer',
    text: 'Daniel has always made me feel comfortable during our sessions and has created a judgement free environment for me to make mistakes and learn. His approach is relaxed, patient and encouraging. I would recommend him to beginners and more experienced players alike.'
  }, {
    image: 'test-4.jpeg',
    name: 'Leah Gastonguay',
    title: 'College Student',
    text: '[Daniel] has a deep understanding of music and is great at communicating this knowledge to his students . . . Daniel\'s teaching style makes learning to play fun, interesting, and not scary at all. I highly recommend taking lessons with Daniel, I\'ve had such a good experience learning from him.'
  }];
}
