import { Component } from '@angular/core';
// import R from 'ramda';

export class Palindrome {
  min: string;
  max: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {

    this.highest = this.highestAvailablePalindrome( this.palindrome )
    
  }

  title = 'Highest Available Palindrome';

  highest = null;

  palindrome: Palindrome = {
    min: '0',
    max: '100',
  };

  isPalindrome( data: number ) {
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
    console.log(" highest available palindrome - range  ", range );

    // this.isPalindrome( this.palindrome );
    let min = parseInt( range.min, 10 );
    let max = parseInt( range.max, 10 );
    // for ( let i = range.max; i > range.min; i-- ) {
    for ( let i = max; i > min; i-- ) {
      console.log("what is i ---->", i);

      let check = this.isPalindrome( i );
      console.log("check ", check );

      // if palindrome found - break out of loop
      if ( check === true ) {
        this.highest = i;
        return i;
        // break;
      }
    }
  };

  onChangeInput( event: any ) {
    console.log(" on change input ", event.target.value );

    this.highest = this.highestAvailablePalindrome( this.palindrome );
  };
}
