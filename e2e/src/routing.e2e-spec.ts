import { expectContestantTextInputValuesToEqual, register4Players } from "../util/registration"
import { by, element } from "protractor"
import { clickBracketsLink, clickRegistrationLink } from "../util/navigation"
import { AppPage } from "./app.po"

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
        clickBracketsLink()

        expect(appPage.subpageTitleText).toContain("Brackets")
    })

    it('can navigate to the welcome page from another page', () => {
        clickBracketsLink()

        element(by.id('welcome-link')).click()

        expect(appPage.subpageTitleText).toContain("Brackets App")
    })

    it('clears the text inputs when returning to registration page', () => {
        register4Players()

        clickBracketsLink()

        clickRegistrationLink()

        expectContestantTextInputValuesToEqual(['', '', '', '', '', '', '', ''])
    })

    it('remembers registered players when navigating from and to brackets page (staying on site)', () => {
        register4Players()

        clickBracketsLink()

        let player1 = element(by.id('match1-player1'))
        let player2 = element(by.id('match1-player2'))
        let player3 = element(by.id('match2-player1'))
        let player4 = element(by.id('match2-player2'))

        clickRegistrationLink()

        clickBracketsLink()

        player1 = element(by.id('match1-player1'))
        player2 = element(by.id('match1-player2'))
        player3 = element(by.id('match2-player1'))
        player4 = element(by.id('match2-player2'))

        expect(player1.getAttribute('value')).toEqual('John')
        expect(player2.getAttribute('value')).toEqual('Paul')
        expect(player3.getAttribute('value')).toEqual('George')
        expect(player4.getAttribute('value')).toEqual('Ringo')
    })
})
