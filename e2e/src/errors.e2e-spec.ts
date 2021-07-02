import { browser, by, element } from "protractor"

const getMessageText = () => element(by.id('message')).getText()

describe('errors', () => {

    describe('registration page', () => {

        const contestantNumberError = 'Should be 2, 4, or 8 contestants'

        const navigateToRegistration = () => {
            browser.get('/')

            element(by.id('registration-link')).click()
        }

        const clickRegisterButton = () => element(by.id('register-contestants-button')).click()

        const sendContestantTextInputs = (...inputs: string[]): void => {
            const contestantTextInputs = element.all(by.className('contestant-text-input'))

            inputs.forEach((value: string, index: number) => contestantTextInputs.get(index).sendKeys(value))
        }

        it('displays error when no contestants filled on submit', () => {
            navigateToRegistration()

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 1 player is submitted', () => {
            navigateToRegistration()

            sendContestantTextInputs('Samurai Jack')

            clickRegisterButton()

            expect(getMessageText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            navigateToRegistration()

            sendContestantTextInputs(
                'Ed',
                'Edd',
                'Eddy'
            )

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 5 players are submitted', () => {
            navigateToRegistration()

            sendContestantTextInputs('Beast Boy', 'Cyborg', 'Raven', 'Robin', 'Starfire')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 6 players are submitted', () => {
            navigateToRegistration()

            sendContestantTextInputs('Ulrich', 'Yumi', 'Jeremie', 'Odd', 'Aelita', 'William')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        xit('displays an error when 7 players are submitted', () => {

        })

        xit('displays an error when given duplicate names', () => {

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
