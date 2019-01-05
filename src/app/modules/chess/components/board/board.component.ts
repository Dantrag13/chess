import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  rows: any;

  constructor() { }

  ngOnInit() {
    this.generateBoard();
  }

  generateBoard() {
    let rows = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push([i, j]);
      }
      rows.push(row);
    }

    this.rows = rows;
  }
}
