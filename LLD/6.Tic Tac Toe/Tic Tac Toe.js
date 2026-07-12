
class Board {
    constructor(size = 3) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array(size).fill(null));
    }

    placeMove(row, col, symbol) {
        this.grid[row][col] = symbol;
    }

    isCellEmpty(row, col) {
        return this.grid[row][col] === null;
    }
}

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}

class Game {
    constructor(players, board) {
        this.players = players;
        this.board = board;
        this.currentPlayerIndex = 0;
        this.isGameOver = false;
    }

    startGame() {
        console.log("Game Started");
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    makeMove(row, col) {
        if (this.isGameOver) return;

        const player = this.getCurrentPlayer();

        if (!this.board.isCellEmpty(row, col)) {
            console.log("Cell already filled");
            return;
        }

        this.board.placeMove(row, col, player.symbol);

        if (this.checkWinner(player.symbol)) {
            console.log(`${player.name} wins`);
            this.isGameOver = true;
            return;
        }

        if (this.isDraw()) {
            console.log("Match Draw");
            this.isGameOver = true;
            return;
        }

        this.switchTurn();
    }

    switchTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    checkWinner(symbol) {
        const grid = this.board.grid;
        const n = this.board.size;

        // rows
        for (let i = 0; i < n; i++) {
            if (grid[i].every(cell => cell === symbol)) return true;
        }

        // columns
        for (let j = 0; j < n; j++) {
            let win = true;
            for (let i = 0; i < n; i++) {
                if (grid[i][j] !== symbol) {
                    win = false;
                    break;
                }
            }
            if (win) return true;
        }

        // main diagonal
        let diag1 = true;
        for (let i = 0; i < n; i++) {
            if (grid[i][i] !== symbol) {
                diag1 = false;
                break;
            }
        }
        if (diag1) return true;

        // anti diagonal
        let diag2 = true;
        for (let i = 0; i < n; i++) {
            if (grid[i][n - i - 1] !== symbol) {
                diag2 = false;
                break;
            }
        }
        return diag2;
    }

    isDraw() {
        return this.board.grid.every(row =>
            row.every(cell => cell !== null)
        );
    }
}


// ---------------- MAIN ----------------

function main() {
    const board = new Board(3);

    const p1 = new Player("Alex", "X");
    const p2 = new Player("Perry", "O");

    const game = new Game([p1, p2], board);

    game.startGame();

    game.makeMove(0, 0); // X
    game.makeMove(0, 1); // O
    game.makeMove(1, 1); // X
    game.makeMove(0, 2); // O
    game.makeMove(2, 2); // X wins
}

main();