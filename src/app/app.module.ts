import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JournalMainComponent } from './journal-main/journal-main.component';
import { EntryAddComponent } from './journal-main/entry-add/entry-add.component';
import { EntriesComponent } from './journal-main/entries/entries.component';
import { EntryDisplayComponent } from './journal-main/entry-display/entry-display.component';
import { EntriesDisplayComponent } from './journal-main/entries/entries-display/entries-display.component';

import { ShortenPipe } from '../app/pipes/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JournalMainComponent,
    EntryAddComponent,
    EntriesComponent,
    EntryDisplayComponent,
    EntriesDisplayComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
