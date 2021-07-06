import { clickRegisterButton, register2Players, register4Players, register8Players } from "../util/registration"
import { browser, by, element } from "protractor"
import { getMessageText } from "../util/elements"
import { fillContestantTextInputsWith } from "../util/form-interaction"
import { clickBracketsLink, navigateToRegistration } from "../util/navigation"
import { clickCompleteRoundButton, getChampionText, getNumberOfMatches } from "../util/brackets"

describe('brackets page', () => {
    describe('matches', () => {

        beforeEach(() => {
            navigateToRegistration()
        })

        it('displays 1 match on the brackets page after registering 2 players', () => {
            fillContestantTextInputsWith('Mac', 'Bloo')

            clickRegisterButton()

            clickBracketsLink()

            expect(getNumberOfMatches()).toBe(1)
        })

        it('displays 2 matches on the brackets page after registering 4 players', () => {
            fillContestantTextInputsWith('James', 'George', 'Shelby', 'Don')

            clickRegisterButton()

            clickBracketsLink()

            expect(getNumberOfMatches()).toBe(2)
        })

        it('displays 4 matches on the brackets page after registering 8 players', () => {
            fillContestantTextInputsWith('Snow White', 'Sleepy', 'Sneezy', 'Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy')

            clickRegisterButton()

            clickBracketsLink()

            expect(getNumberOfMatches()).toBe(4)
        })

        it('attaches the 2 registered players to the radio button values in the brackets', () => {
            fillContestantTextInputsWith('Riku', 'Xion')

            clickRegisterButton()

            clickBracketsLink()

            const player1 = element(by.id('match1-player1'))
            const player2 = element(by.id('match1-player2'))

            expect(player1.getAttribute('value')).toEqual('Riku')
            expect(player2.getAttribute('value')).toEqual('Xion')
        })

        it('attaches the 4 registered players to the radio button values in the brackets', () => {
            fillContestantTextInputsWith('Sora', 'Donald', 'Goofy', 'Kairi')

            clickRegisterButton()

            clickBracketsLink()

            const player1 = element(by.id('match1-player1'))
            const player2 = element(by.id('match1-player2'))
            const player3 = element(by.id('match2-player1'))
            const player4 = element(by.id('match2-player2'))

            expect(player1.getAttribute('value')).toEqual('Sora')
            expect(player2.getAttribute('value')).toEqual('Donald')
            expect(player3.getAttribute('value')).toEqual('Goofy')
            expect(player4.getAttribute('value')).toEqual('Kairi')
        })

        it('attaches the 8 registered players to the radio button values in the brackets', () => {
            fillContestantTextInputsWith('Mickey', 'Minnie', 'Donald', 'Daisy', 'Goofy', 'Max', 'Clarabelle', 'Horace')

            clickRegisterButton()

            clickBracketsLink()

            const player1 = element(by.id('match1-player1'))
            const player2 = element(by.id('match1-player2'))
            const player3 = element(by.id('match2-player1'))
            const player4 = element(by.id('match2-player2'))
            const player5 = element(by.id('match3-player1'))
            const player6 = element(by.id('match3-player2'))
            const player7 = element(by.id('match4-player1'))
            const player8 = element(by.id('match4-player2'))

            expect(player1.getAttribute('value')).toEqual('Mickey')
            expect(player2.getAttribute('value')).toEqual('Minnie')
            expect(player3.getAttribute('value')).toEqual('Donald')
            expect(player4.getAttribute('value')).toEqual('Daisy')
            expect(player5.getAttribute('value')).toEqual('Goofy')
            expect(player6.getAttribute('value')).toEqual('Max')
            expect(player7.getAttribute('value')).toEqual('Clarabelle')
            expect(player8.getAttribute('value')).toEqual('Horace')
        })

        it('displays 2 players in the radio button labels', () => {
            element(by.id('autofill-2-players-button')).click()

            clickRegisterButton()

            clickBracketsLink()

            const player1Label = element(by.id('match1-player1-label'))
            const player2Label = element(by.id('match1-player2-label'))

            expect(player1Label.getText()).toEqual('Zoe')
            expect(player2Label.getText()).toEqual('Kaylee')
        })

        it('displays 4 players in the radio button labels', () => {
            element(by.id('autofill-4-players-button')).click()

            clickRegisterButton()

            clickBracketsLink()

            const player1Label = element(by.id('match1-player1-label'))
            const player2Label = element(by.id('match1-player2-label'))
            const player3Label = element(by.id('match2-player1-label'))
            const player4Label = element(by.id('match2-player2-label'))

            expect(player1Label.getText()).toEqual('John')
            expect(player2Label.getText()).toEqual('Paul')
            expect(player3Label.getText()).toEqual('George')
            expect(player4Label.getText()).toEqual('Ringo')
        })

        it('displays 8 players in the radio button labels', () => {
            element(by.id('autofill-8-players-button')).click()

            clickRegisterButton()

            clickBracketsLink()

            const player1Label = element(by.id('match1-player1-label'))
            const player2Label = element(by.id('match1-player2-label'))
            const player3Label = element(by.id('match2-player1-label'))
            const player4Label = element(by.id('match2-player2-label'))
            const player5Label = element(by.id('match3-player1-label'))
            const player6Label = element(by.id('match3-player2-label'))
            const player7Label = element(by.id('match4-player1-label'))
            const player8Label = element(by.id('match4-player2-label'))

            expect(player1Label.getText()).toEqual('Leia')
            expect(player2Label.getText()).toEqual('Luke')
            expect(player3Label.getText()).toEqual('Lando')
            expect(player4Label.getText()).toEqual('Han')
            expect(player5Label.getText()).toEqual('Chewy')
            expect(player6Label.getText()).toEqual('R2D2')
            expect(player7Label.getText()).toEqual('C3P0')
            expect(player8Label.getText()).toEqual('Vader')
        })
    })

    describe('complete round button', () => {
        it('increments round counter when clicking `complete round` button while brackets are empty', () => {
            browser.get('/')

            clickBracketsLink()

            expect(element(by.css('h3')).getText()).toContain('1')

            clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('2')

            clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('3')
        })

        it('declares a winner when a match winner is selected with only one match (2 players)', () => {
            navigateToRegistration()

            register2Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()

            element(by.id('complete-round-button')).click()

            expect(element(by.css('h4')).getText()).toContain('Zoe')
        })

        it('removes complete round button when winner declared', () => {
            navigateToRegistration()

            register2Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()

            expect(element(by.id('complete-round-button'))).toBeTruthy()

            clickCompleteRoundButton()

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
            navigateToRegistration()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            element(by.id('complete-round-button')).click()

            expect(getNumberOfMatches()).toBe(1)
        })

        it('displays the winners from the previous rounds in the new round (4 players initially)', () => {
            navigateToRegistration()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            element(by.id('complete-round-button')).click()

            expect(element(by.id('match1-player1')).getAttribute('value')).toEqual('John')
            expect(element(by.id('match1-player2')).getAttribute('value')).toEqual('George')
        })

        it('displays a new round of 2 matches when winners of 4 matches (8 players) are submitted', () => {
            navigateToRegistration()

            register8Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            element(by.id('complete-round-button')).click()

            expect(getNumberOfMatches()).toBe(2)
        })

        it('displays the winners from the previous rounds in the new rounds (8 players initially)', () => {
            navigateToRegistration()

            register8Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            element(by.id('complete-round-button')).click()

            expect(element(by.id('match1-player1')).getAttribute('value')).toEqual('Leia')
            expect(element(by.id('match1-player2')).getAttribute('value')).toEqual('Lando')
            expect(element(by.id('match2-player1')).getAttribute('value')).toEqual('Chewy')
            expect(element(by.id('match2-player2')).getAttribute('value')).toEqual('C3P0')
        })

        it('increments the counter when progressing to another round', () => {
            navigateToRegistration()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            expect(element(by.css('h3')).getText()).toContain('1')

            element(by.id('complete-round-button')).click()

            expect(element(by.css('h3')).getText()).toContain('2')
        })

        it('walks through a full 4-player tournament', () => {
            navigateToRegistration()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            clickCompleteRoundButton()

            element(by.id('match1-player1')).click()

            clickCompleteRoundButton()

            expect(getChampionText()).toContain('John')
        })

        xit('walks through a full 8-player tournament', () => {

        })

        xit('walks through multiple tournaments', () => {

        })
    })

    describe('errors', () => {

        beforeEach(() => {
            navigateToRegistration()

            register4Players()

            clickBracketsLink()
        })

        it('displays an error if no winners are selected on submission', () => {
            clickCompleteRoundButton()

            expect(getMessageText()).toContain('Please complete all matches')
        })

        it('displays an error if any match is missing a selected winner', () => {
            element(by.id('match1-player1')).click()

            clickCompleteRoundButton()

            expect(getMessageText()).toContain('Please complete all matches')
        })

        it('does not increment the counter on error', () => {
            element(by.id('match1-player1')).click()

            expect(element(by.css('h3')).getText()).toContain('1')

            element(by.id('complete-round-button')).click()

            expect(element(by.css('h3')).getText()).toContain('1')
        })
    })
})
