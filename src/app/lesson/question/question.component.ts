import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lm-question',
  imports: [
    CommonModule,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  index = 0;

  data = [{
    title: 'What is your teaching style?',
    text: [
      'Many students require different approaches which is why I curate lessons based on individual needs. My job is to create an atmosphere that grows confidence and sustains interest. I want students to feel comfortable asking questions and making mistakes. Learning anything new requires patience and persistence and I strive to help foster those qualities in students.'
    ]
  }, {
    title: 'What will I learn as your student?',
    text: [
      'At your first free lesson we will take some time to go over your goals and discuss how I can help you achieve them. If you are not quite sure what your goals are, then I will explain some different avenues that are available and what I believe makes sense for our path forward.'
    ]
  }, {
    title: 'Are we a good fit?',
    text: [
      'The first lesson is free, which gives us an opportunity to see that it is a good fit. If the prospective student is very young, we make sure that they have a sufficient ability to focus and follow direction.',
      'Being a good fit means that the primary focus is achieving our musical objectives, but it also means having time in-between lessons that can be dedicated to practice.'
    ]
  }, {
    title: 'Am I too young or old to learn an instrument?',
    text: [
      'I have taught students ranging from 5 to 65. What connects them all is the confidence they gain when they start to achieve their goals. If you are feeling hesitant about music lessons, I recommend reaching out to me and we can discuss any potential barriers for you or whomever you wish to enroll.'
    ]
  }, {
    title: 'Can I learn by watching YouTube?',
    text: [
      'There are many great online resources, but in some ways too many! It\'s hard to make decisions in the face of so many options and having accountability and consistency are some of the many benefits of private music lessons. Whether you choose online or in-person lessons, I recommend starting with a qualified instructor that you feel comfortable with.'
    ]
  }, {
    title: 'Where are you located?',
    text: [
      'Our home is located off of West Broadway near The ARC. After scheduling your first free lesson, I will send you a follow-up email with our address along with a copy of our studio policy and a short questionnaire.'
    ]
  }, {
    title: 'What do I need to get started?',
    text: [
      'Any instrument will get you started! For a list of my personal instrument and accessory recommendations, click here. Please reach out if you have any questions about which instrument is right for you.',
      'If you don\'t have an instrument, one can be provided for you on a temporary basis with the expectation that you will be looking to purchase your own for practicing at home.'
    ]
  }];


  onClick(index: number, card: HTMLButtonElement): void {
    this.index = index;
    setTimeout(() => {
      card.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }
}
