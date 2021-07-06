import { register4Players } from "../util/registration"
import { by, element } from "protractor"
import { AppPage } from "./app.po"
import { expectContestantTextInputValuesToEqual, expectPlayerRadioButtonValuesToEqual } from "../util/assertions"

describe('Routing', () => {

    let appPage: AppPage

    beforeEach(() => {
        appPage = new AppPage()

        appPage.navigateTo()
    })

    it('navigates to welcome page', () => {
        expect(appPage.subpageTitleText).toContain("Brackets App")
    })

    it('can navigate to the registration page', () => {
        const registrationLink = element(by.id('registration-link'))

        registrationLink.click()

        expect(appPage.subpageTitleText).toContain("Register Players")
    })

    it('can navigate to the brackets page', () => {
        appPage.clickBracketsLink()

        expect(appPage.subpageTitleText).toContain("Brackets")
    })

    it('can navigate to the welcome page from another page', () => {
        appPage.clickBracketsLink()

        element(by.id('welcome-link')).click()

        expect(appPage.subpageTitleText).toContain("Brackets App")
    })

    it('clears the text inputs when returning to registration page', () => {
        appPage.clickRegistrationLink()

        register4Players()

        appPage.clickBracketsLink()

        appPage.clickRegistrationLink()

        expectContestantTextInputValuesToEqual(['', '', '', '', '', '', '', ''])
    })

    it('remembers registered players when navigating from and to brackets page (staying on site)', () => {
        appPage.clickRegistrationLink()

        register4Players()

        appPage.clickBracketsLink()

        expectPlayerRadioButtonValuesToEqual('John', 'Paul', 'George', 'Ringo')

        appPage.clickRegistrationLink()

        appPage.clickBracketsLink()

        expectPlayerRadioButtonValuesToEqual('John', 'Paul', 'George', 'Ringo')
    })
})
