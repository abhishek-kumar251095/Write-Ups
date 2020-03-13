import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JournalMainModule } from './journal-main/journal-main.module';
import { TimelineHomeComponent } from './timeline-home/timeline-home.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    JournalMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
