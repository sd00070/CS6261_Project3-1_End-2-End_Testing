import { by, element } from "protractor"
import { getMessageText } from "../util/elements"
import { clickRegisterButton, getContestantTextInputs, sendContestantTextInputs } from "../util/form-interaction"
import { navigateToRegistration } from "../util/navigation"

describe('registration button', () => {
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

    it('displays 2 matches on the brackets page after registering 4 players', () => {
        navigateToRegistration()

        sendContestantTextInputs('James', 'George', 'Shelby', 'Don')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const matches = element.all(by.className('match-heading'))

        expect(matches.count()).toBe(2)
    })

    it('displays 4 matches on the brackets page after registering 8 players', () => {
        navigateToRegistration()

        sendContestantTextInputs('Snow White', 'Sleepy', 'Sneezy', 'Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const matches = element.all(by.className('match-heading'))

        expect(matches.count()).toBe(4)
    })

    it('attaches the 2 registered players to the radio button values in the brackets', () => {
        navigateToRegistration()

        sendContestantTextInputs('Riku', 'Xion')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const player1 = element(by.id('match1-player1'))
        const player2 = element(by.id('match1-player2'))

        expect(player1.getAttribute('value')).toEqual('Riku')
        expect(player2.getAttribute('value')).toEqual('Xion')
    })

    xit('displays the 4 registered players in the brackets', () => {

    })

    xit('displays the 8 registered players in the brackets', () => {

    })

    xit('clears the text inputs when returning to registration page', () => {

    })
})

describe('autofill buttons', () => {
    it('displays 2 players in the text input fields', () => {
        navigateToRegistration()

        element(by.id('autofill-2-players-button')).click()

        const contestantTextInputs = getContestantTextInputs()

        expect(contestantTextInputs.get(0).getAttribute('value')).toEqual('Zoe')
        expect(contestantTextInputs.get(1).getAttribute('value')).toEqual('Kaylee')
    })

    it('displays 4 players in the text input fields', () => {
        navigateToRegistration()

        element(by.id('autofill-4-players-button')).click()

        const contestantTextInputs = getContestantTextInputs()

        expect(contestantTextInputs.get(0).getAttribute('value')).toEqual('John')
        expect(contestantTextInputs.get(1).getAttribute('value')).toEqual('Paul')
        expect(contestantTextInputs.get(2).getAttribute('value')).toEqual('George')
        expect(contestantTextInputs.get(3).getAttribute('value')).toEqual('Ringo')
    })

    xit('displays 8 players in the text input fields', () => {

    })

    xit('clears any extra already-filled cells', () => {

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
