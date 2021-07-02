import { by, element } from "protractor"

export const sendContestantTextInputs = (...inputs: string[]): void => {
    const contestantTextInputs = element.all(by.className('contestant-text-input'))

    inputs.forEach((value: string, index: number) => contestantTextInputs.get(index).sendKeys(value))
}
