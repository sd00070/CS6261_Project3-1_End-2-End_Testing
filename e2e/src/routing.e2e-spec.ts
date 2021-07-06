import { expectContestantTextInputValuesToEqual, register4Players } from "../util/registration"
import { browser, by, element } from "protractor"
import { clickBracketsLink, clickRegistrationLink } from "../util/navigation"

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
        clickBracketsLink()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets")
    })

    it('can navigate to the welcome page from another page', () => {
        clickBracketsLink()

        element(by.id('welcome-link')).click()

        const subpageTitle = element(by.id('subpageTitle'))

        expect(subpageTitle.getText()).toContain("Brackets App")
    })

    xit('remembers registered players when navigating from and to brackets page (staying on site)', () => {

    })

    it('clears the text inputs when returning to registration page', () => {
        register4Players()

        clickBracketsLink()

        clickRegistrationLink()

        expectContestantTextInputValuesToEqual(['', '', '', '', '', '', '', ''])
    })
})
