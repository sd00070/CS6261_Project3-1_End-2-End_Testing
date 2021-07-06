import { browser, by, element } from "protractor"
import { expectPlayerLabelTextsToContain, expectPlayerRadioButtonValuesToEqual } from "../util/assertions"
import { BracketsPage } from "./brackets.po"

describe('brackets page', () => {
    describe('matches', () => {

        let bracketsPage: BracketsPage

        beforeEach(() => {
            bracketsPage = new BracketsPage()

            bracketsPage.navigateTo()
        })

        it('displays 1 match on the brackets page after registering 2 players', () => {
            bracketsPage.registerPlayers('Mac', 'Bloo')

            expect(bracketsPage.numberOfMatches).toBe(1)
        })

        it('displays 2 matches on the brackets page after registering 4 players', () => {
            bracketsPage.registerPlayers('James', 'George', 'Shelby', 'Don')

            expect(bracketsPage.numberOfMatches).toBe(2)
        })

        it('displays 4 matches on the brackets page after registering 8 players', () => {
            bracketsPage.registerPlayers('Snow White', 'Sleepy', 'Sneezy', 'Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy')

            expect(bracketsPage.numberOfMatches).toBe(4)
        })

        it('attaches the 2 registered players to the radio button values in the brackets', () => {
            bracketsPage.registerPlayers('Riku', 'Xion')

            expectPlayerRadioButtonValuesToEqual('Riku', 'Xion')
        })

        it('attaches the 4 registered players to the radio button values in the brackets', () => {
            bracketsPage.registerPlayers('Sora', 'Donald', 'Goofy', 'Kairi')

            expectPlayerRadioButtonValuesToEqual('Sora', 'Donald', 'Goofy', 'Kairi')
        })

        it('attaches the 8 registered players to the radio button values in the brackets', () => {
            bracketsPage.registerPlayers('Mickey', 'Minnie', 'Donald', 'Daisy', 'Goofy', 'Max', 'Clarabelle', 'Horace')

            expectPlayerRadioButtonValuesToEqual('Mickey', 'Minnie', 'Donald', 'Daisy', 'Goofy', 'Max', 'Clarabelle', 'Horace')
        })

        it('displays 2 players in the radio button labels', () => {
            bracketsPage.register2Players()

            expectPlayerLabelTextsToContain('Zoe', 'Kaylee')
        })

        it('displays 4 players in the radio button labels', () => {
            bracketsPage.register4Players()

            expectPlayerLabelTextsToContain('John', 'Paul', 'George', 'Ringo')
        })

        it('displays 8 players in the radio button labels', () => {
            bracketsPage.register8Players()

            expectPlayerLabelTextsToContain('Leia', 'Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader')
        })
    })

    describe('complete round button', () => {

        let bracketsPage: BracketsPage

        beforeEach(() => {
            bracketsPage = new BracketsPage()

            bracketsPage.navigateTo()
        })

        it('increments round counter when clicking `complete round` button while brackets are empty', () => {
            expect(element(by.css('h3')).getText()).toContain('1')

            bracketsPage.clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('2')

            bracketsPage.clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('3')
        })

        it('declares a winner when a match winner is selected with only one match (2 players)', () => {
            bracketsPage.register2Players()

            element(by.id('match1-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(element(by.css('h4')).getText()).toContain('Zoe')
        })

        it('removes complete round button when winner declared', () => {
            bracketsPage.register2Players()

            element(by.id('match1-player1')).click()

            expect(element(by.id('complete-round-button'))).toBeTruthy()

            bracketsPage.clickCompleteRoundButton()

            /*
             * I needed to grab an array rather than just the single button
             * as protractor throws an error if the element does not exist
             * and the single element version is called. It is more than happy
             * to, on the other hand, return an array of length zero in the
             * array-returning method.
             */
            const completeRoundButtonAgain = element.all(by.id('complete-round-button'))

            expect(completeRoundButtonAgain.count()).toBe(0)
        })

        it('displays a new round of 1 match when winners for 2 matches (4 players) are submitted', () => {
            bracketsPage.register4Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.numberOfMatches).toBe(1)
        })

        it('displays the winners from the previous rounds in the new round (4 players initially)', () => {
            bracketsPage.register4Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expectPlayerRadioButtonValuesToEqual('John', 'George')
        })

        it('displays a new round of 2 matches when winners of 4 matches (8 players) are submitted', () => {
            bracketsPage.register8Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.numberOfMatches).toBe(2)
        })

        it('displays the winners from the previous rounds in the new rounds (8 players initially)', () => {
            bracketsPage.register8Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expectPlayerRadioButtonValuesToEqual('Leia', 'Lando', 'Chewy', 'C3P0')
        })

        it('increments the counter when progressing to another round', () => {
            bracketsPage.register4Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            expect(element(by.css('h3')).getText()).toContain('1')

            bracketsPage.clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('2')
        })

        it('walks through a full 4-player tournament', () => {
            bracketsPage.register4Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            element(by.id('match1-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.championText).toContain('John')
        })

        it('walks through a full 8-player tournament', () => {
            bracketsPage.register8Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            element(by.id('match1-player2')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.championText).toContain('Chewy')
        })

        it('walks through multiple tournaments', () => {
            bracketsPage.register2Players()

            element(by.id('match1-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.championText).toContain('Zoe')

            bracketsPage.register4Players()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            element(by.id('match1-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.championText).toContain('John')
        })
    })

    describe('errors', () => {

        let bracketsPage: BracketsPage

        beforeEach(() => {
            bracketsPage = new BracketsPage()

            bracketsPage.navigateTo()

            bracketsPage.register4Players()
        })

        it('displays an error if no winners are selected on submission', () => {
            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.messageText).toContain('Please complete all matches')
        })

        it('displays an error if any match is missing a selected winner', () => {
            element(by.id('match1-player1')).click()

            bracketsPage.clickCompleteRoundButton()

            expect(bracketsPage.messageText).toContain('Please complete all matches')
        })

        it('does not increment the counter on error', () => {
            element(by.id('match1-player1')).click()

            expect(element(by.css('h3')).getText()).toContain('1')

            bracketsPage.clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('1')
        })
    })
})
