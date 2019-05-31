const game = document.querySelector('#app');
const turn = document.querySelector('#turn');
const winner = document.querySelector('#winner');

class TicTacToe {

  player = 0;
  board = ['', '', '', '', '', '', '', '', ''];
  symbols = ['❌', '⭕'];

  win(symbol) {
    winner.innerHTML = `${symbol} Win!!!`;
  }

  checkWin(symbol) {
    for (let index = 0; index <= 9; index += 3) {
      if ((this.board[index] === this.board[index + 1]) && (this.board[index + 1] === this.board[index + 2]) && (this.board[index] === symbol)) {
        this.win(symbol);
        return;
      }
    }

    for (let index = 0; index <= 9; index++) {
      if ((this.board[index] === this.board[index + 3]) && (this.board[index + 3] === this.board[index + 6]) && (this.board[index] === symbol)) {
        this.win(symbol);
        return;
      }
    }

    if ((this.board[0] === this.board[4]) && (this.board[4] === this.board[8]) && (this.board[0] === symbol)) {
      this.win(symbol);
      return;
    }

    if ((this.board[2] === this.board[4]) && (this.board[4] === this.board[6]) && (this.board[2] === symbol)) {
      this.win(symbol);
      return;
    }
  }

  play(obj, number) {
    const symbol = this.symbols[this.player];

    if (this.player === 0 && !obj.firstChild) {
      obj.innerHTML += symbol;
      this.board[number] = symbol;
      this.checkWin(symbol);
      this.player = 1;
      turn.innerHTML = `Turn: ${this.symbols[this.player]}`;
      return;
    }

    if (this.player === 1 && !obj.firstChild) {
      obj.innerHTML += symbol;
      this.board[number] = symbol;
      this.checkWin(symbol);
      this.player = 0;
      turn.innerHTML = `Turn: ${this.symbols[this.player]}`;
      return;
    }

  }

  makeBoard() {
    this.board.forEach((item, index) => {
      game.innerHTML += `<div class="item" onclick="ttt.play(this, ${index})"></div>`;
    });

  }

  init() {
    this.makeBoard();
  }
}

var ttt = new TicTacToe();
ttt.init();
