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

        const getContestantTextInputs = () => element.all(by.className('contestant-text-input'))

        it('displays error when no contestants filled on submit', () => {
            navigateToRegistration()

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 1 player is submitted', () => {
            navigateToRegistration()

            const contestantTextInput = element(by.id('contestant0'))

            contestantTextInput.sendKeys('Samurai Jack')

            clickRegisterButton()

            expect(getMessageText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            navigateToRegistration()

            const contestantTextInputs = getContestantTextInputs()

            contestantTextInputs.get(0).sendKeys('Ed')
            contestantTextInputs.get(2).sendKeys('Edd')
            contestantTextInputs.get(3).sendKeys('Eddy')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 5 players are submitted', () => {
            navigateToRegistration()

            const contestantTextInputs = getContestantTextInputs()

            contestantTextInputs.get(0).sendKeys('Beast Boy')
            contestantTextInputs.get(1).sendKeys('Cyborg')
            contestantTextInputs.get(2).sendKeys('Raven')
            contestantTextInputs.get(3).sendKeys('Robin')
            contestantTextInputs.get(4).sendKeys('Starfire')

            clickRegisterButton()

            expect(getMessageText()).toContain(contestantNumberError)
        })

        it('displays an error when 6 players are submitted', () => {
            navigateToRegistration()

            const contestantTextInputs = getContestantTextInputs()

            contestantTextInputs.get(0).sendKeys('Ulrich')
            contestantTextInputs.get(1).sendKeys('Yumi')
            contestantTextInputs.get(2).sendKeys('Jeremie')
            contestantTextInputs.get(3).sendKeys('Odd')
            contestantTextInputs.get(4).sendKeys('Aelita')
            contestantTextInputs.get(5).sendKeys('William')

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
