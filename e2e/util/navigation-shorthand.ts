import { browser, element, by } from "protractor"

export const navigateToRegistration = () => {
    browser.get('/')

    element(by.id('registration-link')).click()
}