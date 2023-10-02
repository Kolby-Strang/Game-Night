import { AppState } from "../AppState.js"
import { gamePlayersService } from "../services/GamePlayersService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

export class GamePlayersController {
    constructor() {
        _drawGamePlayers()
    }

    increasePlayerScore(playerID) {
        gamePlayersService.increasePlayerScore(playerID)
        _drawGamePlayers()
    }

    decreasePlayerScore(playerID) {
        gamePlayersService.decreasePlayerScore(playerID)
        _drawGamePlayers()
    }

    makeNewPlayer(event) {
        event.preventDefault()
        const formData = getFormData(event.target)
        gamePlayersService.makeNewPlayer(formData)
        _drawGamePlayers()
    }

}

function _drawGamePlayers() {
    let gamePlayers = AppState.gamePlayers
    gamePlayers.sort(function (player1, player2) { return player2.score - player1.score })
    let content = ''
    gamePlayers.forEach(player => content += player.PlayerHTML)
    setHTML('gamePlayersDump', content)
}
