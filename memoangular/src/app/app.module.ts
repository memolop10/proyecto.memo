import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JugarComponent } from './jugar/jugar.component';
import { EventosComponent } from './eventos/eventos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    JugarComponent,
    EventosComponent,
    QuienesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
