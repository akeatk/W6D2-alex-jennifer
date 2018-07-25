class HanoiView {
  constructor (game, $el) {
    this.start = null;
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers(){
    for (let i = 0; i < 3; i++) {
      let peg = $(`<ul class="p${i}"></ul>`);
      peg.on('click', () => {
        console.log(i);
        if (!this.game.isWon()) {
          if (this.start === null) {
            this.start = i;
          } else {
            if (this.game.move(this.start, i)) {
              this.start = null;
            } else if (this.game.isWon()) {
              $('li').css('background-color', 'green');
              alert('Good work, you!');
            } else {
              alert('Invalid Move! Try again.');

            }
          }
          this.render();
        }
      });
      this.el.append(peg);

      for (let j = 3; j > 0; j--) {
        peg.append($(`<li id='d${j}'></li>`));
      }
    }
  }

  render () {
    console.log((this.game.towers[0][0] * 60));
    // console.log(this.game.towers);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.game.towers[i][j] !== undefined) {
          $(`ul.p${i} li#d${this.game.towers[i][j]}`).css('width', `${this.game.towers[i][j] * 60}px`);
          $(`ul.p${i} li#d${this.game.towers[i][j]}`).show();
        } else {
          $(`ul.p${i} li#d${j+1}`).hide();
        }
      }
    }
  }
}

module.exports = HanoiView;
