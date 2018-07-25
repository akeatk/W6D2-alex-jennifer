class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let squares = $('li');

    for (let i = 0; i < 9; i++) {
      squares.eq(i).on("click", () => {
        if (!this.game.isOver()) {
          this.makeMove(squares.eq(i));
        }
      });
    }
  }

  makeMove($square) {
    let num = parseInt($square.attr('id'));
    let mark = this.game.currentPlayer;

    this.game.playMove([Math.floor(num / 3), num % 3]);
    $square.text(mark);
    $square.addClass(mark);

    $square.css('background-color','white');

    if (this.game.winner() !== null) {
      this.$el.append($(`<p>You win, ${mark}!</p>`));

      let squares = $(`li`);

      for (let i = 0; i < 9; i++) {
        if (squares.eq(i).attr('class') === mark) {
          squares.eq(i).css('background-color', 'green');
          squares.eq(i).css('color', 'white');
        } else {
          squares.eq(i).css('background-color', 'white');
          squares.eq(i).css('color', 'red');
        }
      }
    } else if (this.game.isOver()) {
      this.$el.append($(`<p>It's a draw!</p>`));

      let squares = $(`li`);
      for (let i = 0; i < 9; i++) {
        squares.eq(i).css('background-color', 'white');
        squares.eq(i).css('color', 'red');
      }
    }
  }

  setupBoard() {
    const board = $('<ul></ul>');
    this.$el.append(board);
    for (let i = 0; i < 9; i++) {
      board.append($(`<li id='${i}''></li>`));
    }
  }
}



module.exports = View;
