import { expectContestantTextInputValuesToEqual } from "../util/assertions"
import { RegistrationPage } from "./registration.po"

describe('registration page', () => {
    describe('register contestants button', () => {

        let registrationPage: RegistrationPage

        beforeEach(() => {
            registrationPage = new RegistrationPage()

            registrationPage.navigateTo()
        })

        it('registers 2 players & displays them in a message', () => {
            registrationPage.fillContestantTextInputsWith('Yogi', 'Booboo')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain('Yogi,Booboo')
        })

        it('registers 4 players & displays them in a message', () => {
            registrationPage.fillContestantTextInputsWith('Mario', 'Luigi', 'Peach', 'Toad')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain('Mario,Luigi,Peach,Toad')
        })

        it('registers 8 players & displays them in a message', () => {
            registrationPage.fillContestantTextInputsWith('Frodo', 'Sam', 'Aragorn', 'Boromir', 'Legalos', 'Gimli', 'Merry', 'Pippin')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain('Frodo,Sam,Aragorn,Boromir,Legalos,Gimli,Merry,Pippin')
        })
    })

    describe('autofill buttons', () => {

        let registrationPage: RegistrationPage

        beforeEach(() => {
            registrationPage = new RegistrationPage()

            registrationPage.navigateTo()
        })

        it('displays 2 players in the text input fields', () => {
            registrationPage.clickAutoFill2PlayersButton()

            expectContestantTextInputValuesToEqual('Zoe', 'Kaylee', '', '', '', '', '', '')
        })

        it('displays 4 players in the text input fields', () => {
            registrationPage.clickAutoFill4PlayersButton()

            expectContestantTextInputValuesToEqual('John', 'Paul', 'George', 'Ringo', '', '', '', '')
        })

        it('displays 8 players in the text input fields', () => {
            registrationPage.clickAutoFill8PlayersButton()

            expectContestantTextInputValuesToEqual('Leia', 'Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader')
        })

        it('clears any extra already-filled cells', () => {
            registrationPage.fillContestantTextInputsWith('Woody', 'Bo Peep', 'Buzz', 'Jessie', 'Bullseye', 'Slinky', 'Mr. Potato Head', 'Rex')

            registrationPage.clickRegisterButton()

            registrationPage.clickAutoFill2PlayersButton()

            expectContestantTextInputValuesToEqual('Zoe', 'Kaylee', '', '', '', '', '', '')
        })
    })

    describe('errors', () => {

        const contestantNumberError = 'Should be 2, 4, or 8 contestants'

        let registrationPage: RegistrationPage

        beforeEach(() => {
            registrationPage = new RegistrationPage()

            registrationPage.navigateTo()
        })

        it('displays error when no contestants filled on submit', () => {
            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain(contestantNumberError)
        })

        it('displays an error when 1 player is submitted', () => {
            registrationPage.fillContestantTextInputsWith('Samurai Jack')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            registrationPage.fillContestantTextInputsWith('Ed', 'Edd', 'Eddy')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain(contestantNumberError)
        })

        it('displays an error when 5 players are submitted', () => {
            registrationPage.fillContestantTextInputsWith('Beast Boy', 'Cyborg', 'Raven', 'Robin', 'Starfire')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain(contestantNumberError)
        })

        it('displays an error when 6 players are submitted', () => {
            registrationPage.fillContestantTextInputsWith('Ulrich', 'Yumi', 'Jeremie', 'Odd', 'Aelita', 'William')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain(contestantNumberError)
        })

        it('displays an error when 7 players are submitted', () => {
            registrationPage.fillContestantTextInputsWith('SpongeBob', 'Patrick', 'Squidward', 'Mr. Krabs', 'Plankton', 'Gary', 'Sandy')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain(contestantNumberError)
        })

        it('displays an error when given duplicate names', () => {
            registrationPage.fillContestantTextInputsWith('Daryl', 'Daryl')

            registrationPage.clickRegisterButton()

            expect(registrationPage.messageText).toContain('Duplicate player')
        })
    })
})