import { by, element } from "protractor"

export const clickCompleteRoundButton = () => {
    element(by.id('complete-round-button')).click()
}