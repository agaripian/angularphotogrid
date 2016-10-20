import { PhotogridPage } from './app.po';

describe('photogrid App', function() {
  let page: PhotogridPage;

  beforeEach(() => {
    page = new PhotogridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
