import { DevPortalAppPage } from './app.po';

describe('dev-portal-app App', function() {
  let page: DevPortalAppPage;

  beforeEach(() => {
    page = new DevPortalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
