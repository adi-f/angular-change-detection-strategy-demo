import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WithAsyncComponent } from './with-async/with-async.component';
import { WithSubscribeComponent } from './with-subscribe/with-subscribe.component';
import { WithSubscribeOnpushComponent } from './with-subscribe-onpush/with-subscribe-onpush.component';
import { WithAsyncSideeffectComponent } from './with-async-sideeffect/with-async-sideeffect.component';
import { WithFormComponent } from './with-form/with-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    WithAsyncComponent,
    WithSubscribeComponent,
    WithSubscribeOnpushComponent,
    WithAsyncSideeffectComponent,
    WithFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
