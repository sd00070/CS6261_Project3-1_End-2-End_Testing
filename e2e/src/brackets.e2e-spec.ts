import { getMessageText } from "../util/elements"
import { fillContestantTextInputsWith, clickRegisterButton } from "../util/form-interaction"
import { navigateToRegistration } from "../util/navigation"

describe('brackets page', () => {
    describe('complete round button', () => {
        xit('increments the round counter when the `complete round` button is clicked while brackets are empty', () => {

        })

        xit('declares a winner when a match winner is selected with only one match (2 players)', () => {

        })

        xit('displays a new round of 1 match when winners for 2 matches (4 players) are submitted', () => {

        })

        xit('displays a new round of 2 matches when winners of 4 matches (8 players) are submitted', () => {

        })

        xit('increments the counter when progressing to another round', () => {

        })

        xit('walks through a full 4-player tournament', () => {

        })

        xit('walks through a full 8-player tournament', () => {

        })

        xit('walks through multiple tournaments', () => {

        })
    })

    describe('errors', () => {
        xit('displays an error if no winners are selected on submission', () => {

        })

        xit('displays an error if any match is missing a selected winner', () => {

        })

        xit('does not increment the counter on error', () => {

        })
    })
})
