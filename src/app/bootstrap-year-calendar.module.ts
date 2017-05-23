import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BootstrapYearCalendarComponent } from './bootstrap-year-calendar.component';

@NgModule({
  declarations: [
    BootstrapYearCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BootstrapYearCalendarComponent]
})
export class BootstrapYearCalendarModule { }
