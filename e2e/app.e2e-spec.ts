import { DocumentManagementSystemFrontendPage } from './app.po';

describe('document-management-system-frontend App', () => {
  let page: DocumentManagementSystemFrontendPage;

  beforeEach(() => {
    page = new DocumentManagementSystemFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
