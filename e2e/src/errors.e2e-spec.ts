import { browser, by, element } from "protractor"

describe('errors', () => {

    describe('registration page', () => {

        const navigateToRegistration = () => {
            browser.get('/')

            element(by.id('registration-link')).click()
        }

        const clickRegisterButton = () => element(by.id('register-contestants-button')).click()

        it('displays error when no contestants filled on submit', () => {
            navigateToRegistration()

            clickRegisterButton()

            const message = element(by.id('message'))

            expect(message.getText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 1 player is submitted', () => {
            navigateToRegistration()

            const contestantTextInput = element(by.id('contestant0'))

            contestantTextInput.sendKeys('Samurai Jack')

            clickRegisterButton()

            const message = element(by.id('message'))

            expect(message.getText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            navigateToRegistration()

            const contestantTextInputs = element.all(by.className('contestant-text-input'))

            contestantTextInputs.get(0).sendKeys('Ed')
            contestantTextInputs.get(2).sendKeys('Edd')
            contestantTextInputs.get(3).sendKeys('Eddy')

            clickRegisterButton()

            const message = element(by.id('message'))

            expect(message.getText()).toContain('Should be 2, 4, or 8 contestants')
        })

        xit('displays an error when 5, 6, or 7 players are submitted', () => {

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
