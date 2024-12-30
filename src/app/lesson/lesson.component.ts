import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HeroComponent } from './hero/hero.component';
import { QuestionComponent } from "./question/question.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { StudioComponent } from "./studio/studio.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

@Component({
  selector: 'lm-lesson',
  imports: [
    HeroComponent,
    AboutComponent,
    StudioComponent,
    QuestionComponent,
    TestimonialComponent,
    SignUpComponent,
    RouterLink,
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {

}
