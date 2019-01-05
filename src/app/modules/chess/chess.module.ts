import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessRouting } from './chess.routing';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BoardComponent } from './components/board/board.component';
import { RowComponent } from './components/row/row.component';
import { CellComponent } from './components/cell/cell.component';

@NgModule({
  imports: [
    CommonModule,
    ChessRouting
  ],
  declarations: [WrapperComponent, BoardComponent, RowComponent, CellComponent],
  providers: []
})
export class ChessModule { }
