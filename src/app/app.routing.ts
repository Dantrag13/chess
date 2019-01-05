import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chess',
    loadChildren: './modules/chess/chess.module#ChessModule' },
  { path: 'second',
    loadChildren: './modules/second/second.module#SecondModule' },
  { path: '**', redirectTo: 'chess' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  providers: []
})
export class AppRouting { }
