import { by, element } from "protractor";
import { RegistrationPage } from "./registration.po";

export class BracketsPage extends RegistrationPage {
    navigateTo() {
        super.navigateTo()

        return super.clickBracketsLink()
    }

    clickCompleteRoundButton() {
        element(by.id('complete-round-button')).click()
    }

    get numberOfMatches() {
        return element.all(by.className('match-heading')).count()
    }

    get championText() {
        return element(by.css('h4')).getText()
    }

    registerPlayers(...players: string[]) {
        this.clickRegistrationLink()

        /*
         * I would love to use the spread operator, but this
         * version of typescript doesn't seem to have it...
         */
        this.fillContestantTextInputsWith.apply(this, players)

        this.clickRegisterButton()

        this.clickBracketsLink()
    }

    register2Players() {
        this.clickRegistrationLink()

        this.clickAutoFill2PlayersButton()

        this.clickRegisterButton()

        this.clickBracketsLink()
    }

    register4Players() {
        this.clickRegistrationLink()

        this.clickAutoFill4PlayersButton()

        this.clickRegisterButton()

        this.clickBracketsLink()
    }

    register8Players() {
        this.clickRegistrationLink()

        this.clickAutoFill8PlayersButton()

        this.clickRegisterButton()

        this.clickBracketsLink()
    }
}