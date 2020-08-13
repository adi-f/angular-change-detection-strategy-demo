import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WithAsyncComponent } from './with-async/with-async.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WithAsyncComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
