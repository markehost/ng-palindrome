# NgPalindrome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Summary

Simple Angular setup to check for the highest palindromic number between two user inputs.  Does not include the input numbers, will search inbetween two inputs. 

## How to Run the App

Make sure you have `angular-cli` installed

```bash
$ npm install -g @angular/cli
```

Then pull the repo, navigate to the directory and run the app.

```bash
$ git clone https://github.com/markehost/ng-palindrome.git
$ cd ng-palindrome
$ npm install
$ npm start
```

Navigate to `http://localhost:4200/` in your browser.

I left the tests and generated files in place.  The tests have not been expanded to cover the additional functionality.  Components have not been broken out.


### TODO

1. Expand tests to cover additional functioality added for palindrome finder (and errors/validation).
2. ~~Break out components into their own modules.~~
3. Use inline styles or something smarter than off-the-shelf CSS.
4. Make the methods more functional.
5. Cleanup number/string conversion.  Currently uses strings then converts to number in order to loop over numbers, then converts back to strings to check for palindrome.
