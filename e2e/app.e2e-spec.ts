import { NgPalindromePage } from './app.po';

describe('ng-palindrome App', () => {
  let page: NgPalindromePage;

  beforeEach(() => {
    page = new NgPalindromePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
