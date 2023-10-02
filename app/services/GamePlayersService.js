import { AppState } from "../AppState.js"
import { gamePlayer } from "../models/GamePlayer.js"

class GamePlayersService {
    increasePlayerScore(playerID) {
        let player = AppState.gamePlayers.find(player => player.id == playerID)
        player.score++
    }
    decreasePlayerScore(playerID) {
        let player = AppState.gamePlayers.find(player => player.id == playerID)
        player.score--
    }
    makeNewPlayer(formData) {
        AppState.gamePlayers.push(new gamePlayer(formData.name, formData.icon, formData.color))
    }
}

export const gamePlayersService = new GamePlayersService()