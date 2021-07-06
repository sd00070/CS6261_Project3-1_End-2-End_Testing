import { by, element, promise } from "protractor"
import { getMessageText } from "../util/elements"
import { clickRegisterButton, getContestantTextInputValues, fillContestantTextInputsWith } from "../util/form-interaction"
import { navigateToRegistration } from "../util/navigation"

describe('registration button', () => {
    it('registers 2 players & displays them in a message', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Yogi', 'Booboo')

        clickRegisterButton()

        expect(getMessageText()).toContain('Yogi,Booboo')
    })

    it('registers 4 players & displays them in a message', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Mario', 'Luigi', 'Peach', 'Toad')

        clickRegisterButton()

        expect(getMessageText()).toContain('Mario,Luigi,Peach,Toad')
    })

    it('registers 8 players & displays them in a message', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Frodo', 'Sam', 'Aragorn', 'Boromir', 'Legalos', 'Gimli', 'Merry', 'Pippin')

        clickRegisterButton()

        expect(getMessageText()).toContain('Frodo,Sam,Aragorn,Boromir,Legalos,Gimli,Merry,Pippin')
    })

    it('displays 1 match on the brackets page after registering 2 players', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Mac', 'Bloo')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const matches = element.all(by.className('match-heading'))

        expect(matches.count()).toBe(1)
    })

    it('displays 2 matches on the brackets page after registering 4 players', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('James', 'George', 'Shelby', 'Don')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const matches = element.all(by.className('match-heading'))

        expect(matches.count()).toBe(2)
    })

    it('displays 4 matches on the brackets page after registering 8 players', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Snow White', 'Sleepy', 'Sneezy', 'Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const matches = element.all(by.className('match-heading'))

        expect(matches.count()).toBe(4)
    })

    it('attaches the 2 registered players to the radio button values in the brackets', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Riku', 'Xion')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const player1 = element(by.id('match1-player1'))
        const player2 = element(by.id('match1-player2'))

        expect(player1.getAttribute('value')).toEqual('Riku')
        expect(player2.getAttribute('value')).toEqual('Xion')
    })

    it('attaches the 4 registered players to the radio button values in the brackets', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Sora', 'Donald', 'Goofy', 'Kairi')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const player1 = element(by.id('match1-player1'))
        const player2 = element(by.id('match1-player2'))
        const player3 = element(by.id('match2-player1'))
        const player4 = element(by.id('match2-player2'))

        expect(player1.getAttribute('value')).toEqual('Sora')
        expect(player2.getAttribute('value')).toEqual('Donald')
        expect(player3.getAttribute('value')).toEqual('Goofy')
        expect(player4.getAttribute('value')).toEqual('Kairi')
    })

    it('attaches the 8 registered players to the radio button values in the brackets', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Mickey', 'Minnie', 'Donald', 'Daisy', 'Goofy', 'Max', 'Clarabelle', 'Horace')

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const player1 = element(by.id('match1-player1'))
        const player2 = element(by.id('match1-player2'))
        const player3 = element(by.id('match2-player1'))
        const player4 = element(by.id('match2-player2'))
        const player5 = element(by.id('match3-player1'))
        const player6 = element(by.id('match3-player2'))
        const player7 = element(by.id('match4-player1'))
        const player8 = element(by.id('match4-player2'))

        expect(player1.getAttribute('value')).toEqual('Mickey')
        expect(player2.getAttribute('value')).toEqual('Minnie')
        expect(player3.getAttribute('value')).toEqual('Donald')
        expect(player4.getAttribute('value')).toEqual('Daisy')
        expect(player5.getAttribute('value')).toEqual('Goofy')
        expect(player6.getAttribute('value')).toEqual('Max')
        expect(player7.getAttribute('value')).toEqual('Clarabelle')
        expect(player8.getAttribute('value')).toEqual('Horace')
    })

    it('display 2 players in the radio button labels', () => {
        navigateToRegistration()

        element(by.id('autofill-2-players-button')).click()

        clickRegisterButton()

        element(by.id('brackets-link')).click()

        const player1Label = element(by.id('match1-player1-label'))
        const player2Label = element(by.id('match1-player2-label'))

        expect(player1Label.getText()).toEqual('Zoe')
        expect(player2Label.getText()).toEqual('Kaylee')
    })

    xit('display 4 players in the radio button labels', () => {

    })

    xit('display 8 players in the radio button labels', () => {

    })

    xit('clears the text inputs when returning to registration page', () => {

    })
})

describe('autofill buttons', () => {

    const expectContestantTextInputValuesToEqual = (expectedValues: string[]): promise.Promise<void> =>
        getContestantTextInputValues().then(values => expect(values).toEqual(expectedValues))

    it('displays 2 players in the text input fields', () => {
        navigateToRegistration()

        element(by.id('autofill-2-players-button')).click()

        expectContestantTextInputValuesToEqual(['Zoe', 'Kaylee', '', '', '', '', '', ''])
    })

    it('displays 4 players in the text input fields', () => {
        navigateToRegistration()

        element(by.id('autofill-4-players-button')).click()

        expectContestantTextInputValuesToEqual(['John', 'Paul', 'George', 'Ringo', '', '', '', ''])
    })

    it('displays 8 players in the text input fields', () => {
        navigateToRegistration()

        element(by.id('autofill-8-players-button')).click()

        expectContestantTextInputValuesToEqual(['Leia', 'Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader'])
    })

    it('clears any extra already-filled cells', () => {
        navigateToRegistration()

        fillContestantTextInputsWith('Woody', 'Bo Peep', 'Buzz', 'Jessie', 'Bullseye', 'Slinky', 'Mr. Potato Head', 'Rex')

        element(by.id('autofill-2-players-button')).click()

        expectContestantTextInputValuesToEqual(['Zoe', 'Kaylee', '', '', '', '', '', ''])
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
