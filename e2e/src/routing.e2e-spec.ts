import { browser, by, element } from "protractor"

describe('Routing', () => {
    it('navigates to welcome page', () => {
        browser.get('/')

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets App")
    })

    it('can navigate to the registration page', () => {
        browser.get('/')

        const registrationLink = element(by.id('registration-link'))

        registrationLink.click()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Register Players")
    })

    it('can navigate to the brackets page', () => {
        browser.get('/')

        const bracketsLink = element(by.id('brackets-link'))

        bracketsLink.click()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets")
    })
})
