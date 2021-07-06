import { clickRegisterButton, register2Players, register4Players, register8Players } from "../util/registration"
import { browser, by, element } from "protractor"
import { getMessageText } from "../util/elements"
import { fillContestantTextInputsWith } from "../util/form-interaction"
import { clickBracketsLink, clickRegistrationLink, navigateToRegistration } from "../util/navigation"
import { clickCompleteRoundButton, expectPlayerLabelTextsToContain, expectPlayerRadioButtonValuesToEqual, getChampionText, getNumberOfMatches } from "../util/brackets"

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

            expectPlayerRadioButtonValuesToEqual('Riku', 'Xion')
        })

        it('attaches the 4 registered players to the radio button values in the brackets', () => {
            fillContestantTextInputsWith('Sora', 'Donald', 'Goofy', 'Kairi')

            clickRegisterButton()

            clickBracketsLink()

            expectPlayerRadioButtonValuesToEqual('Sora', 'Donald', 'Goofy', 'Kairi')
        })

        it('attaches the 8 registered players to the radio button values in the brackets', () => {
            fillContestantTextInputsWith('Mickey', 'Minnie', 'Donald', 'Daisy', 'Goofy', 'Max', 'Clarabelle', 'Horace')

            clickRegisterButton()

            clickBracketsLink()

            expectPlayerRadioButtonValuesToEqual('Mickey', 'Minnie', 'Donald', 'Daisy', 'Goofy', 'Max', 'Clarabelle', 'Horace')
        })

        it('displays 2 players in the radio button labels', () => {
            element(by.id('autofill-2-players-button')).click()

            clickRegisterButton()

            clickBracketsLink()

            expectPlayerLabelTextsToContain('Zoe', 'Kaylee')
        })

        it('displays 4 players in the radio button labels', () => {
            element(by.id('autofill-4-players-button')).click()

            clickRegisterButton()

            clickBracketsLink()

            expectPlayerLabelTextsToContain('John', 'Paul', 'George', 'Ringo')
        })

        it('displays 8 players in the radio button labels', () => {
            element(by.id('autofill-8-players-button')).click()

            clickRegisterButton()

            clickBracketsLink()

            expectPlayerLabelTextsToContain('Leia', 'Luke', 'Lando', 'Han', 'Chewy', 'R2D2', 'C3P0', 'Vader')
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

            clickCompleteRoundButton()

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

            clickCompleteRoundButton()

            expect(getNumberOfMatches()).toBe(1)
        })

        it('displays the winners from the previous rounds in the new round (4 players initially)', () => {
            navigateToRegistration()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            clickCompleteRoundButton()

            expectPlayerRadioButtonValuesToEqual('John', 'George')
        })

        it('displays a new round of 2 matches when winners of 4 matches (8 players) are submitted', () => {
            navigateToRegistration()

            register8Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            clickCompleteRoundButton()

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

            clickCompleteRoundButton()

            expectPlayerRadioButtonValuesToEqual('Leia', 'Lando', 'Chewy', 'C3P0')
        })

        it('increments the counter when progressing to another round', () => {
            navigateToRegistration()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            expect(element(by.css('h3')).getText()).toContain('1')

            clickCompleteRoundButton()

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

        it('walks through a full 8-player tournament', () => {
            navigateToRegistration()

            register8Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()
            element(by.id('match3-player1')).click()
            element(by.id('match4-player1')).click()

            clickCompleteRoundButton()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            clickCompleteRoundButton()

            element(by.id('match1-player2')).click()

            clickCompleteRoundButton()

            expect(getChampionText()).toContain('Chewy')
        })

        it('walks through multiple tournaments', () => {
            browser.get('/')

            clickRegistrationLink()

            register2Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()

            clickCompleteRoundButton()

            expect(getChampionText()).toContain('Zoe')

            clickRegistrationLink()

            register4Players()

            clickBracketsLink()

            element(by.id('match1-player1')).click()
            element(by.id('match2-player1')).click()

            clickCompleteRoundButton()

            element(by.id('match1-player1')).click()

            clickCompleteRoundButton()

            expect(getChampionText()).toContain('John')
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

            clickCompleteRoundButton()

            expect(element(by.css('h3')).getText()).toContain('1')
        })
    })
})
