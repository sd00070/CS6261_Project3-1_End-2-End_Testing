import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  get titleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  get subpageTitleText() {
    return element(by.id('subpageTitle')).getText()
  }

  get messageText() {
    return element(by.id('message')).getText()
  }

  clickWelcomeLink() {
    return element(by.id('welcome-link')).click() as Promise<any>
  }

  clickBracketsLink() {
    return element(by.id('brackets-link')).click() as Promise<any>
  }

  clickRegistrationLink() {
    return element(by.id('registration-link')).click() as Promise<any>
  }
}
