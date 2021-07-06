import { by, element, ElementArrayFinder, promise } from "protractor"

export const getContestantTextInputs = (): ElementArrayFinder =>
    element.all(by.className('contestant-text-input'))

export const fillContestantTextInputsWith = (...inputs: string[]): void => {
    const contestantTextInputs = getContestantTextInputs()

    inputs.forEach((value: string, index: number) => contestantTextInputs.get(index).sendKeys(value))
}

export const getContestantTextInputValues = (): promise.Promise<string[]> =>
    getContestantTextInputs().map(element => element.getAttribute('value'))

export const clickRegisterButton = () => element(by.id('register-contestants-button')).click()
