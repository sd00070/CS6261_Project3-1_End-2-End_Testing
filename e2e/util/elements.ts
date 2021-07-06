import { by, element } from "protractor";

export const getSubpageTitleText = () => element(by.id('subpageTitle')).getText()

export const getMessageText = () => element(by.id('message')).getText()
