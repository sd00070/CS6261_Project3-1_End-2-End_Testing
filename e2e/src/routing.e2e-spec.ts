import { expectContestantTextInputValuesToEqual, register4Players } from "../util/registration"
import { browser, by, element } from "protractor"
import { clickBracketsLink, clickRegistrationLink } from "../util/navigation"
import { getSubpageTitleText } from "../util/elements"

describe('Routing', () => {

    beforeEach(() => {
        browser.get('/')
    })

    it('navigates to welcome page', () => {
        expect(getSubpageTitleText()).toContain("Brackets App")
    })

    it('can navigate to the registration page', () => {
        const registrationLink = element(by.id('registration-link'))

        registrationLink.click()

        expect(getSubpageTitleText()).toContain("Register Players")
    })

    it('can navigate to the brackets page', () => {
        clickBracketsLink()

        expect(getSubpageTitleText()).toContain("Brackets")
    })

    it('can navigate to the welcome page from another page', () => {
        clickBracketsLink()

        element(by.id('welcome-link')).click()

        expect(getSubpageTitleText()).toContain("Brackets App")
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
