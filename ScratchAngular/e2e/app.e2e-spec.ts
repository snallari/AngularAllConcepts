import { ScratchAngularPage } from './app.po';

describe('scratch-angular App', () => {
  let page: ScratchAngularPage;

  beforeEach(() => {
    page = new ScratchAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
