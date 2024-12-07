import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "./about/about.component";
import { StudioComponent } from "./studio/studio.component";
import { QuestionComponent } from "./question/question.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@Component({
  selector: 'lm-lesson',
  imports: [
    HeroComponent,
    AboutComponent,
    StudioComponent,
    QuestionComponent,
    TestimonialComponent,
    SignUpComponent
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {

}
