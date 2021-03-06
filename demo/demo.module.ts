import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBarModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, SearchBarModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
