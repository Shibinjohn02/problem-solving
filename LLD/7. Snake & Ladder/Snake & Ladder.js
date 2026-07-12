class Dice {
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

class Snake {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

class Ladder {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

class Board {
    constructor(size = 100, snakes = [], ladders = []) {
        this.size = size;
        this.snakes = snakes;
        this.ladders = ladders;
    }

    getFinalPosition(position) {
        // check snake
        for (let snake of this.snakes) {
            if (snake.start === position) {
                console.log("Bitten by snake 🐍");
                return snake.end;
            }
        }

        // check ladder
        for (let ladder of this.ladders) {
            if (ladder.start === position) {
                console.log("Climbed ladder 🪜");
                return ladder.end;
            }
        }

        return position;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }
}

class Game {
    constructor(players, board, dice) {
        this.players = players;
        this.board = board;
        this.dice = dice;
        this.currentPlayerIndex = 0;
        this.isGameOver = false;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    startGame() {
        console.log("Game Started");
    }

    makeMove() {
        if (this.isGameOver) return;

        const player = this.getCurrentPlayer();

        const roll = this.dice.roll();
        console.log(`${player.name} rolled ${roll}`);

        let newPosition = player.position + roll;

        // boundary check
        if (newPosition > this.board.size) {
            console.log("Move skipped");
            this.switchTurn();
            return;
        }

        // snake or ladder
        newPosition = this.board.getFinalPosition(newPosition);

        player.position = newPosition;
        console.log(`${player.name} at ${player.position}`);

        if (this.checkWinner(player)) {
            console.log(`${player.name} wins 🎉`);
            this.isGameOver = true;
            return;
        }

        this.switchTurn();
    }

    checkWinner(player) {
        return player.position === this.board.size;
    }

    switchTurn() {
        this.currentPlayerIndex =
            (this.currentPlayerIndex + 1) % this.players.length;
    }
}


// ---------------- MAIN ----------------

function main() {
    const snakes = [
        new Snake(99, 10),
        new Snake(70, 20)
    ];

    const ladders = [
        new Ladder(5, 25),
        new Ladder(40, 80)
    ];

    const board = new Board(100, snakes, ladders);
    const dice = new Dice();

    const p1 = new Player("Alex");
    const p2 = new Player("Perry");

    const game = new Game([p1, p2], board, dice);

    game.startGame();

    while (!game.isGameOver) {
        game.makeMove();
    }
}

main();