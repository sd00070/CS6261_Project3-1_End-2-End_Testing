import { by, element, promise } from "protractor"
import { clickRegisterButton, getContestantTextInputValues } from "./form-interaction"
import { navigateToRegistration } from "./navigation"

export const clickAutoFill4PlayersButton = () => {
    element(by.id('autofill-4-players-button')).click()
}

export const register4Players = () => {
    navigateToRegistration()

    clickAutoFill4PlayersButton()

    clickRegisterButton()
}

export const expectContestantTextInputValuesToEqual = (expectedValues: string[]): promise.Promise<void> =>
    getContestantTextInputValues().then(values => expect(values).toEqual(expectedValues))
