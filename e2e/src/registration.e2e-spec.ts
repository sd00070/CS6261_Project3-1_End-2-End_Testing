import { by, element, promise } from "protractor"
import { getMessageText } from "../util/elements"
import { clickRegisterButton, fillContestantTextInputsWith, getContestantTextInputValues } from "../util/form-interaction"
import { navigateToRegistration } from "../util/navigation"

describe('brackets page', () => {
    describe('register contestants button', () => {

        beforeEach(() => {
            navigateToRegistration()
        })

        it('registers 2 players & displays them in a message', () => {
            fillContestantTextInputsWith('Yogi', 'Booboo')

            clickRegisterButton()

            expect(getMessageText()).toContain('Yogi,Booboo')
        })

        it('registers 4 players & displays them in a message', () => {
            fillContestantTextInputsWith('Mario', 'Luigi', 'Peach', 'Toad')

            clickRegisterButton()

            expect(getMessageText()).toContain('Mario,Luigi,Peach,Toad')
        })

        it('registers 8 players & displays them in a message', () => {
            fillContestantTextInputsWith('Frodo', 'Sam', 'Aragorn', 'Boromir', 'Legalos', 'Gimli', 'Merry', 'Pippin')

            clickRegisterButton()

            expect(getMessageText()).toContain('Frodo,Sam,Aragorn,Boromir,Legalos,Gimli,Merry,Pippin')
        })

        it('displays 1 match on the brackets page after registering 2 players', () => {
            fillContestantTextInputsWith('Mac', 'Bloo')

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const matches = element.all(by.className('match-heading'))

            expect(matches.count()).toBe(1)
        })

        it('displays 2 matches on the brackets page after registering 4 players', () => {
            fillContestantTextInputsWith('James', 'George', 'Shelby', 'Don')

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const matches = element.all(by.className('match-heading'))

            expect(matches.count()).toBe(2)
        })

        it('displays 4 matches on the brackets page after registering 8 players', () => {
            fillContestantTextInputsWith('Snow White', 'Sleepy', 'Sneezy', 'Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy')

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const matches = element.all(by.className('match-heading'))

            expect(matches.count()).toBe(4)
        })

        it('attaches the 2 registered players to the radio button values in the brackets', () => {
            fillContestantTextInputsWith('Riku', 'Xion')

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const player1 = element(by.id('match1-player1'))
            const player2 = element(by.id('match1-player2'))

            expect(player1.getAttribute('value')).toEqual('Riku')
            expect(player2.getAttribute('value')).toEqual('Xion')
        })

        it('attaches the 4 registered players to the radio button values in the brackets', () => {
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
            element(by.id('autofill-2-players-button')).click()

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const player1Label = element(by.id('match1-player1-label'))
            const player2Label = element(by.id('match1-player2-label'))

            expect(player1Label.getText()).toEqual('Zoe')
            expect(player2Label.getText()).toEqual('Kaylee')
        })

        it('display 4 players in the radio button labels', () => {
            element(by.id('autofill-4-players-button')).click()

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const player1Label = element(by.id('match1-player1-label'))
            const player2Label = element(by.id('match1-player2-label'))
            const player3Label = element(by.id('match2-player1-label'))
            const player4Label = element(by.id('match2-player2-label'))

            expect(player1Label.getText()).toEqual('John')
            expect(player2Label.getText()).toEqual('Paul')
            expect(player3Label.getText()).toEqual('George')
            expect(player4Label.getText()).toEqual('Ringo')
        })

        it('display 8 players in the radio button labels', () => {
            element(by.id('autofill-8-players-button')).click()

            clickRegisterButton()

            element(by.id('brackets-link')).click()

            const player1Label = element(by.id('match1-player1-label'))
            const player2Label = element(by.id('match1-player2-label'))
            const player3Label = element(by.id('match2-player1-label'))
            const player4Label = element(by.id('match2-player2-label'))
            const player5Label = element(by.id('match3-player1-label'))
            const player6Label = element(by.id('match3-player2-label'))
            const player7Label = element(by.id('match4-player1-label'))
            const player8Label = element(by.id('match4-player2-label'))

            expect(player1Label.getText()).toEqual('Leia')
            expect(player2Label.getText()).toEqual('Luke')
            expect(player3Label.getText()).toEqual('Lando')
            expect(player4Label.getText()).toEqual('Han')
            expect(player5Label.getText()).toEqual('Chewy')
            expect(player6Label.getText()).toEqual('R2D2')
            expect(player7Label.getText()).toEqual('C3P0')
            expect(player8Label.getText()).toEqual('Vader')
        })

        xit('clears the text inputs when returning to registration page', () => {

        })
    })

    describe('autofill buttons', () => {

        const expectContestantTextInputValuesToEqual = (expectedValues: string[]): promise.Promise<void> =>
            getContestantTextInputValues().then(values => expect(values).toEqual(expectedValues))

        beforeEach(() => {
            navigateToRegistration()
        })

        it('displays 2 players in the text input fields', () => {
            element(by.id('autofill-2-players-button')).click()

            expectContestantTextInputValuesToEqual(['Zoe', 'Kaylee', '', '', '', '', '', ''])
        })

        it('displays 4 players in the text input fields', () => {
            element(by.id('autofill-4-players-button')).click()

            expectContestantTextInputValuesToEqual(['John', 'Paul', 'George', 'Ringo', '', '', '', ''])
        })

        it('displays 8 players in the text input fields', () => {
            element(by.id('autofill-8-players-button')).click()

            expectContestantTextInputValuesToEqual(['Leia', 'Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader'])
        })

        it('clears any extra already-filled cells', () => {
            fillContestantTextInputsWith('Woody', 'Bo Peep', 'Buzz', 'Jessie', 'Bullseye', 'Slinky', 'Mr. Potato Head', 'Rex')

            element(by.id('autofill-2-players-button')).click()

            expectContestantTextInputValuesToEqual(['Zoe', 'Kaylee', '', '', '', '', '', ''])
        })
    })

    describe('errors', () => {

        const contestantNumberError = 'Should be 2, 4, or 8 contestants'

        beforeEach(() => {
            navigateToRegistration()
        })

        it('displays error when no contestants filled on submit', () => {
            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 1 player is submitted', () => {
            fillContestantTextInputsWith('Samurai Jack')

            clickRegisterButton()

            expect(getMessageText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            fillContestantTextInputsWith('Ed', 'Edd', 'Eddy')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 5 players are submitted', () => {
            fillContestantTextInputsWith('Beast Boy', 'Cyborg', 'Raven', 'Robin', 'Starfire')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 6 players are submitted', () => {
            fillContestantTextInputsWith('Ulrich', 'Yumi', 'Jeremie', 'Odd', 'Aelita', 'William')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 7 players are submitted', () => {
            fillContestantTextInputsWith('SpongeBob', 'Patrick', 'Squidward', 'Mr. Krabs', 'Plankton', 'Gary', 'Sandy')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when given duplicate names', () => {
            fillContestantTextInputsWith('Daryl', 'Daryl')

            clickRegisterButton()

            expect(getMessageText()).toContain('Duplicate player')
        })
    })
})