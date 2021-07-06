import { getMessageText } from "../util/elements"
import { fillContestantTextInputsWith, clickRegisterButton } from "../util/form-interaction"
import { navigateToRegistration } from "../util/navigation"

describe('errors', () => {

    describe('registration page', () => {

        const contestantNumberError = 'Should be 2, 4, or 8 contestants'

        it('displays error when no contestants filled on submit', () => {
            navigateToRegistration()

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 1 player is submitted', () => {
            navigateToRegistration()

            fillContestantTextInputsWith('Samurai Jack')

            clickRegisterButton()

            expect(getMessageText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            navigateToRegistration()

            fillContestantTextInputsWith('Ed', 'Edd', 'Eddy')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 5 players are submitted', () => {
            navigateToRegistration()

            fillContestantTextInputsWith('Beast Boy', 'Cyborg', 'Raven', 'Robin', 'Starfire')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 6 players are submitted', () => {
            navigateToRegistration()

            fillContestantTextInputsWith('Ulrich', 'Yumi', 'Jeremie', 'Odd', 'Aelita', 'William')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 7 players are submitted', () => {
            navigateToRegistration()

            fillContestantTextInputsWith('SpongeBob', 'Patrick', 'Squidward', 'Mr. Krabs', 'Plankton', 'Gary', 'Sandy')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when given duplicate names', () => {
            navigateToRegistration()

            fillContestantTextInputsWith('Daryl', 'Daryl')

            clickRegisterButton()

            expect(getMessageText()).toContain('Duplicate player')
        })
    })

    describe('tournament page', () => {
        xit('displays an error if no winners are selected on submission', () => {

        })

        xit('displays an error if any match is missing a selected winner', () => {

        })

        xit('does not increment the counter on error', () => {

        })
    })
})
