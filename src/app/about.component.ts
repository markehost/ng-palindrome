import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // encapsulation: ViewEncapsulation.Native,
})

export class AboutComponent {
  description = 'This mini tool finds the largest available integer that is a palindrome, given a range of values.  A palindrome is a phrase, number or string reads the same forwards and backwards.  In this case it is numbers, but a sentence can be a palindrome, such as; "A Man, A Plan, A Canal-Panama".';
  instructions= 'Enter in a numeric range in the input fields.';
}
