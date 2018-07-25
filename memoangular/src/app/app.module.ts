import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JugarComponent } from './jugar/jugar.component';
import { EventosComponent } from './eventos/eventos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    JugarComponent,
    EventosComponent,
    QuienesComponent,
    PaginaprincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
