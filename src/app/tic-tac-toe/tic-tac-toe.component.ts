import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  // private cleanPuzzle: string[] = ['', '', '', '', '', '', '', '', ''];

  public player: boolean;
  public status: string;
  public puzzle = ['', '', '', '', '', '', '', '', ''];

  // public tictactoeData = 

  public ngOnInit() {
    this.reset();
    this.status = "Next player: ";
  }

  onClick(item) {

    if (this.puzzle[item] !== '') {
      return;
    }
    this.puzzle[item] = this.player ? 'x' : 'o';

    console.log('current puzzle', this.puzzle);

    const currentPlayerItens = this.puzzle.filter(square => {
      return square === this.puzzle[item];
    });

    console.log('itensInside', currentPlayerItens);
    if (currentPlayerItens.length >= 3) {
      this.checkGameStatus();
    }

    this.player = !this.player;
  }

  public reset() {
    this.player = true;
    this.puzzle = ['', '', '', '', '', '', '', '', ''];
  }

  checkGameStatus() {

  }

}
