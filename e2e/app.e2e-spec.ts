import { TechAngularPage } from './app.po';

describe('tech-angular App', () => {
  let page: TechAngularPage;

  beforeEach(() => {
    page = new TechAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
