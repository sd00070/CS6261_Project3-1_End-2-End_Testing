import { by, element } from "protractor"

export const expectPlayerRadioButtonValuesToEqual = (...values: string[]) => {
    const playerRadioButtons = element.all(by.className('player-radio-button'))

    values.forEach((value, index) => expect(playerRadioButtons.get(index).getAttribute('value')).toEqual(value))
}

export const expectPlayerLabelTextsToContain = (...values: string[]) => {
    const playerLabels = element.all(by.className('player-label'))

    values.forEach((value, index) => expect(playerLabels.get(index).getText()).toContain(value))
}
