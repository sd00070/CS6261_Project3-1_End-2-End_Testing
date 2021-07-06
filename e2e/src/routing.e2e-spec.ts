import { browser, by, element } from "protractor"

describe('Routing', () => {

    beforeEach(() => {
        browser.get('/')
    })

    it('navigates to welcome page', () => {
        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets App")
    })

    it('can navigate to the registration page', () => {
        const registrationLink = element(by.id('registration-link'))

        registrationLink.click()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Register Players")
    })

    it('can navigate to the brackets page', () => {
        const bracketsLink = element(by.id('brackets-link'))

        bracketsLink.click()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets")
    })

    it('can navigate to the welcome page from another page', () => {
        const bracketsLink = element(by.id('brackets-link'))

        bracketsLink.click()

        const welcomeLink = element(by.id('welcome-link'))

        welcomeLink.click()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets App")
    })

    xit('remembers registered players when navigating from and to brackets page (staying on site)', () => {

    })
})
