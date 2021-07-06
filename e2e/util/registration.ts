import { by, element, ElementArrayFinder, promise } from "protractor"
import { navigateToRegistration } from "./navigation"

export const clickAutoFill2PlayersButton = () => {
    element(by.id('autofill-2-players-button')).click()
}

export const clickAutoFill4PlayersButton = () => {
    element(by.id('autofill-4-players-button')).click()
}

export const clickAutoFill8PlayersButton = () => {
    element(by.id('autofill-8-players-button')).click()
}

export const clickRegisterButton = () => {
    element(by.id('register-contestants-button')).click()
}

export const register2Players = () => {
    clickAutoFill2PlayersButton()

    clickRegisterButton()
}

export const register4Players = () => {
    navigateToRegistration()

    clickAutoFill4PlayersButton()

    clickRegisterButton()
}

export const register8Players = () => {
    clickAutoFill8PlayersButton()

    clickRegisterButton()
}

export const getContestantTextInputs = (): ElementArrayFinder =>
    element.all(by.className('contestant-text-input'))

export const fillContestantTextInputsWith = (...inputs: string[]): void => {
    const contestantTextInputs = getContestantTextInputs()

    inputs.forEach((value: string, index: number) => contestantTextInputs.get(index).sendKeys(value))
}

export const getContestantTextInputValues = (): promise.Promise<string[]> =>
    getContestantTextInputs().map(element => element.getAttribute('value'))
