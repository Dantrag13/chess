import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondRouting } from './second.routing';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    SecondRouting
  ],
  declarations: [WrapperComponent]
})
export class SecondModule { }
