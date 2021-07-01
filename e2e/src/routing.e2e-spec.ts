import { browser, by, element } from "protractor"

describe('Routing', () => {
    it('navigates to welcome page', () => {
        browser.get('/')

        const pageTitle = element(by.id('subpageTitle'))

        expect(pageTitle.getText()).toContain("Brackets App")
    })
})