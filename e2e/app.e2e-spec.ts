import { Angular2BoilerPage } from './app.po';

describe('angular2-boiler App', function() {
  let page: Angular2BoilerPage;

  beforeEach(() => {
    page = new Angular2BoilerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
