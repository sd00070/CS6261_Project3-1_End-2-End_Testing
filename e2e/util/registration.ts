import { by, element, promise } from "protractor"
import { getContestantTextInputValues } from "./form-interaction"
import { navigateToRegistration } from "./navigation"

export const clickAutoFill2PlayersButton = () => {
    element(by.id('autofill-2-players-button')).click()
}

export const clickAutoFill4PlayersButton = () => {
    element(by.id('autofill-4-players-button')).click()
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

export const expectContestantTextInputValuesToEqual = (expectedValues: string[]): promise.Promise<void> =>
    getContestantTextInputValues().then(values => expect(values).toEqual(expectedValues))
