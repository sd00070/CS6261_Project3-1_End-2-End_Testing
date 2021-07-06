import { by, element } from "protractor"
import { AppPage } from "./app.po"
import { RegistrationPage } from "./registration.po"
export class BracketsPage extends AppPage {

    private registrationPage: RegistrationPage

    constructor() {
        super()

        this.registrationPage = new RegistrationPage()
    }

    navigateTo() {
        super.navigateTo()

        return super.clickBracketsLink()
    }

    get numberOfMatches() {
        return element.all(by.className('match-heading')).count()
    }

    get championText() {
        return element(by.css('h4')).getText()
    }

    clickCompleteRoundButton() {
        element(by.id('complete-round-button')).click()
    }

    registerPlayers(...players: string[]) {
        super.clickRegistrationLink()

        /*
         * I would love to use the spread operator, but this
         * version of typescript doesn't seem to have it...
         */
        this.registrationPage.fillContestantTextInputsWith.apply(this.registrationPage, players)

        this.registrationPage.clickRegisterButton()

        super.clickBracketsLink()
    }

    register2Players() {
        super.clickRegistrationLink()

        this.registrationPage.clickAutoFill2PlayersButton()

        this.registrationPage.clickRegisterButton()

        super.clickBracketsLink()
    }

    register4Players() {
        super.clickRegistrationLink()

        this.registrationPage.clickAutoFill4PlayersButton()

        this.registrationPage.clickRegisterButton()

        super.clickBracketsLink()
    }

    register8Players() {
        super.clickRegistrationLink()

        this.registrationPage.clickAutoFill8PlayersButton()

        this.registrationPage.clickRegisterButton()

        super.clickBracketsLink()
    }
}