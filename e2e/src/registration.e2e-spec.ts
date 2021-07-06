import { clickRegisterButton, expectContestantTextInputValuesToEqual, fillContestantTextInputsWith } from "../util/registration"
import { by, element } from "protractor"
import { getMessageText } from "../util/elements"
import { navigateToRegistration } from "../util/navigation"

describe('registration page', () => {
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
    })

    describe('autofill buttons', () => {

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