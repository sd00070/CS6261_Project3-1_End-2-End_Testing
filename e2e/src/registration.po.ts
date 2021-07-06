import { by, element, ElementArrayFinder, promise } from "protractor";
import { AppPage } from "./app.po";

export class RegistrationPage extends AppPage {
    navigateTo() {
        super.navigateTo()

        return this.clickRegistrationLink()
    }

    get contestantTextInputs(): ElementArrayFinder {
        return element.all(by.className('contestant-text-input'))
    }

    get contestantTextInputValues(): promise.Promise<string[]> {
        return this.contestantTextInputs.map(element => element.getAttribute('value'))
    }

    clickAutoFill2PlayersButton() {
        element(by.id('autofill-2-players-button')).click()
    }

    clickAutoFill4PlayersButton() {
        element(by.id('autofill-4-players-button')).click()
    }

    clickAutoFill8PlayersButton() {
        element(by.id('autofill-8-players-button')).click()
    }

    clickRegisterButton() {
        element(by.id('register-contestants-button')).click()
    }

    register2Players() {
        this.clickAutoFill2PlayersButton()

        this.clickRegisterButton()
    }

    register4Players() {
        this.clickAutoFill4PlayersButton()

        this.clickRegisterButton()
    }

    register8Players() {
        this.clickAutoFill8PlayersButton()

        this.clickRegisterButton()
    }

    fillContestantTextInputsWith(...inputs: string[]): void {
        const contestantTextInputs = this.contestantTextInputs

        inputs.forEach((value: string, index: number) => contestantTextInputs.get(index).sendKeys(value))
    }
}
