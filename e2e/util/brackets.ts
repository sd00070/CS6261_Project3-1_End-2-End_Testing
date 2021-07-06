import { by, element } from "protractor"

export const clickCompleteRoundButton = () => {
    element(by.id('complete-round-button')).click()
}

export const getNumberOfMatches = () =>
    element.all(by.className('match-heading')).count()

export const getChampionText = () =>
    element(by.css('h4')).getText()
