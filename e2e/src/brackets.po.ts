import { by, element } from "protractor"
import { AppPage } from "./app.po"
import { RegistrationPage } from "./registration.po"
export class BracketsPage extends AppPage {

    private registrationPage: RegistrationPage

    constructor() {
        super()

        this.registrationPage = new RegistrationPage()
    }

    public navigateTo() {
        super.navigateTo()

        return super.clickBracketsLink()
    }

    public get numberOfMatches() {
        return element.all(by.className('match-heading')).count()
    }

    public get championText() {
        return element(by.css('h4')).getText()
    }

    public clickCompleteRoundButton() {
        element(by.id('complete-round-button')).click()
    }

    /**
     * The Japanese term for going and coming back.
     * This method clicks the link to the Registration Page,
     * calls the passed-in method,
     * clicks the Register button on the Registration Page,
     * and finally clicks the Brackets Page link.
     * 
     * @param fn function to call on the RegistrationPage before clicking the register button
     */
    private ittekimasu(fn) {
        super.clickRegistrationLink()

        fn()

        this.registrationPage.clickRegisterButton()

        super.clickBracketsLink()
    }

    public registerPlayers(...players: string[]) {
        /*
         * I would love to use the spread operator, but this
         * version of typescript doesn't seem to have it...
         */
        this.ittekimasu(() =>
            this.registrationPage.fillContestantTextInputsWith.apply(this.registrationPage, players)
        )
    }

    public register2Players() {
        this.ittekimasu(() => this.registrationPage.clickAutoFill2PlayersButton())
    }

    public register4Players() {
        this.ittekimasu(() => this.registrationPage.clickAutoFill4PlayersButton())
    }

    public register8Players() {
        this.ittekimasu(() => this.registrationPage.clickAutoFill8PlayersButton())
    }
}