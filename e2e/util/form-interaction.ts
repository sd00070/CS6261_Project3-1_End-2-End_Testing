import { by, element, ElementArrayFinder } from "protractor"

export const getContestantTextInputs = (): ElementArrayFinder =>
    element.all(by.className('contestant-text-input'))

export const sendContestantTextInputs = (...inputs: string[]): void => {
    const contestantTextInputs = getContestantTextInputs()

    inputs.forEach((value: string, index: number) => contestantTextInputs.get(index).sendKeys(value))
}

export const clickRegisterButton = () => element(by.id('register-contestants-button')).click()
