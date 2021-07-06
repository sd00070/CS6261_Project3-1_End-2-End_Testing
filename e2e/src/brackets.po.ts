import { by, element } from "protractor";
import { AppPage } from "./app.po";

export class BracketsPage extends AppPage {
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
}