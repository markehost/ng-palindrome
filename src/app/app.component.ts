import { Component, ViewEncapsulation } from '@angular/core';
// import R from 'ramda';

export class Palindrome {
  min: string;
  max: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native,
})

export class AppComponent {
  constructor() {
    this.highest = this.highestAvailablePalindrome( this.palindrome )
  }

  title = 'Highest Available Palindrome';
  highest = null;
  // error = null;
  error = '';
  palindrome: Palindrome = {
    min: '0',
    max: '100',
  };

  isNumeric( num: any ) {
    // https://github.com/markehost/javascript-exercises/blob/solutions/isNumeric/index.js

    return !isNaN( parseFloat(num) ) && isFinite(num)
  };

  isPalindrome( data: number ) {
    // function returns boolean value
    // used solution from my practice repo
    // https://github.com/markehost/javascript-exercises/tree/solutions/palindrome

    let string = data.toString();

    // REMOVE SPECIAL CHARACTERS - CONVERT TO LOWERCASE
    let removeCharacter = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // REVERSE THE STRING SO WE CAN COMPARE VALUES
    let reverseString = removeCharacter.split('').reverse().join('');

    // CHECK IF STRINGS IS SAME FORWARDS AND BACKWARDS
    return removeCharacter == reverseString;
  };

  highestAvailablePalindrome( range: { min: string, max: string } ) {
    // function returns a number based on a range within an object

    let min = parseInt( range.min, 10 );
    let max = parseInt( range.max, 10 );

    // loop through numeric values from highest first - lowest last
    for ( let i = max ; i > min; i-- ) {
      let check = this.isPalindrome( i );

      // if palindrome found - break out of loop
      if ( check === true ) {
        this.highest = i;
        return i;
        // break;
      }
    }
  };

  onChangeInput( event: any ) {
    let value = event.target.value;

    if ( this.isNumeric(value) ) {
      // set local values for input fields
      this.palindrome[event.target.name] = event.target.value;

      // set the highest available palindrome for given input values
      this.highest = this.highestAvailablePalindrome( this.palindrome );
      this.error = '';
    } else {

      // not numeric -> store error message
      this.error = 'not a numeric value';
    }

    // event.target.value
    if ( this.palindrome.min >= this.palindrome.max ) {
      this.error = 'lower boundary must be less than upper boundary';
    }

    // this.highest = this.highestAvailablePalindrome( this.palindrome );
  };
}
