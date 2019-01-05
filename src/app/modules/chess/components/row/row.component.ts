import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

  onClick(cell) {
    console.log('CLICK', cell);
  }

}
