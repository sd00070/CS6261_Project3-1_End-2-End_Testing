import { browser, element, by } from "protractor"

export const navigateToRegistration = () => {
    browser.get('/')

    clickRegistrationLink()
}

export const clickRegistrationLink = () => {
    element(by.id('registration-link')).click()
}

export const clickBracketsLink = () => {
    element(by.id('brackets-link')).click()
}
