import { browser, by, element } from "protractor"

const navigateToRegistration = () => {
    browser.get('/')

    element(by.id('registration-link')).click()
}

describe('errors', () => {
    describe('registration page', () => {
        it('displays error when no contestants filled on submit', () => {
            navigateToRegistration()

            const registerContestantsButton = element(by.id('register-contestants-button'))

            registerContestantsButton.click()

            const message = element(by.id('message'))

            expect(message.getText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 1 player is submitted', () => {
            navigateToRegistration()

            const contestantTextInput = element(by.id('contestant0'))

            contestantTextInput.sendKeys('Samurai Jack')

            const registerContestantsButton = element(by.id('register-contestants-button'))

            registerContestantsButton.click()

            const message = element(by.id('message'))

            expect(message.getText()).toContain('Should be 2, 4, or 8 contestants')
        })

        it('displays an error when 3 players are submitted', () => {
            navigateToRegistration()

            const contestantTextInputs = new Array(3).fill('').map((_, index) => element(by.id(`contestant${index}`)))

            contestantTextInputs[0].sendKeys('Ed')
            contestantTextInputs[1].sendKeys('Edd')
            contestantTextInputs[2].sendKeys('Eddy')

            const registerContestantsButton = element(by.id('register-contestants-button'))

            registerContestantsButton.click()

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
