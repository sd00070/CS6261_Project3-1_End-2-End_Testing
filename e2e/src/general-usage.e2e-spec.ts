import { by, element } from "protractor"
import { getMessageText } from "../util/elements"
import { clickRegisterButton, sendContestantTextInputs } from "../util/form-interaction"
import { navigateToRegistration } from "../util/navigation"

describe('registering players', () => {
    it('registers 2 players & displays them in a message', () => {
        navigateToRegistration()

        sendContestantTextInputs('Yogi', 'Booboo')

        clickRegisterButton()

        expect(getMessageText()).toContain('Yogi,Booboo')
    })

    it('registers 4 players & displays them in a message', () => {
        navigateToRegistration()

        sendContestantTextInputs('Mario', 'Luigi', 'Peach', 'Toad')

        clickRegisterButton()

        expect(getMessageText()).toContain('Mario,Luigi,Peach,Toad')
    })

    it('registers 8 players & displays them in a message', () => {
        navigateToRegistration()

        sendContestantTextInputs('Frodo', 'Sam', 'Aragorn', 'Boromir', 'Legalos', 'Gimli', 'Merry', 'Pippin')

        clickRegisterButton()

        expect(getMessageText()).toContain('Frodo,Sam,Aragorn,Boromir,Legalos,Gimli,Merry,Pippin')
    })

    it('displays 1 match on the brackets page after registering 2 players', () => {
        navigateToRegistration()

        sendContestantTextInputs('Mac', 'Bloo')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const matches = element.all(by.className('match-heading'))

        expect(matches.count()).toBe(1)
    })

    xit('displays 2 matches on the brackets page after registering 4 players', () => {

    })

    xit('displays 4 matches on the brackets page after registering 8 players', () => {

    })

    xit('auto-generates 2 players & registers them', () => {

    })

    xit('auto-generates 4 players & registers them', () => {

    })

    xit('auto-generates 8 players & registers them', () => {

    })

    xit('clears the text inputs when returning to registration page', () => {

    })
})

/**
 * This technically is a start-to-finish test group.
 * I would test this in isolation, but I am not allowed
 * to directly interact with the Angular models.
 */
describe('running tournaments', () => {
    xit('increments the round counter when the `complete round` button is clicked while brackets are empty', () => {

    })

    xit('declares a winner when a match winner is selected with only one match (2 players)', () => {

    })

    xit('displays a new round of 1 match when winners for 2 matches (4 players) are submitted', () => {

    })

    xit('displays a new round of 2 matches when winners of 4 matches (8 players) are submitted', () => {

    })

    xit('increments the counter when progressing to another round', () => {

    })

    xit('walks through a full 4-player tournament', () => {

    })

    xit('walks through a full 8-player tournament', () => {

    })

    xit('walks through multiple tournaments', () => {

    })

    xit('remembers registered players when navigating away and to brackets page (staying on site)', () => {

    })
})
