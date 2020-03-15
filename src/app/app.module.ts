import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JournalMainModule } from './journal-main/journal-main.module';
import { TimelineHomeComponent } from './timeline-home/timeline-home.component';
import { NameComponent } from './name/name.component';

import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    TimelineHomeComponent,
    NameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    JournalMainModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
