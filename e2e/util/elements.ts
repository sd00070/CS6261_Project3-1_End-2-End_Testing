import { by, element } from "protractor";

export const getMessageText = () => element(by.id('message')).getText()
