import { Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'lessons',
  component: LessonComponent,
}];
