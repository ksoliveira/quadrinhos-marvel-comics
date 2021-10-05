import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display comming soon message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('App Marvel Comics is comming soon');
  });

  it('should display available date', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Available on October 13');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
