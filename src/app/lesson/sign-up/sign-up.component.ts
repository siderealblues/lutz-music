import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lm-sign-up',
  imports: [
    CommonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  data = [{
    subTitle: '(4) 30-minute lessons',
    price: 130
  }, {
    subTitle: '(4) 60-minute lessons',
    price: 250
  }];
}
