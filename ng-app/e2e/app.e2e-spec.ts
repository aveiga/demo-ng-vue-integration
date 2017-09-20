import { NgVueTestPage } from './app.po';

describe('ng-vue-test App', function() {
  let page: NgVueTestPage;

  beforeEach(() => {
    page = new NgVueTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
