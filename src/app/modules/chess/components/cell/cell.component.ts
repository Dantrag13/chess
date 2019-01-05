import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  host: {
    '(click)': 'onClick($event)'
  }
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
