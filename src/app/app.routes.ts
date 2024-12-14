import { Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
  title: 'daniellutzmusic | ☆ Sidereal Blues ☆'
}, {
  path: 'lessons',
  component: LessonComponent,
  title: 'Lessons | Guitar & Banjo Lessons'
}];
