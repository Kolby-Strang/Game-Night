export class gamePlayer {
    constructor(name, icon, color) {
        this.name = name
        this.icon = icon
        this.color = color
        this.score = 0
        this.id = Math.floor(Math.random() * 10000000)
    }

    get PlayerHTML() {
        return /*html*/`
        <div class="col-12 player-card flex-column flex-sm-row mb-1 ${this.color}">
            <div class="d-flex align-items-center">
              <img
                src="${this.icon}"
                alt="${this.name}">
              <p class="m-2">${this.name}</p>
            </div>
            <div class="d-flex align-items-center p-3">
              <button onclick="app.GamePlayersController.decreasePlayerScore('${this.id}')" class="btn btn-danger">-</button>
              <p class="mx-3">${this.score}</p>
              <button onclick="app.GamePlayersController.increasePlayerScore('${this.id}')" class="btn btn-success">+</button>
            </div>
        </div>
        `
    }
}