import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JournalMainModule } from './journal-main/journal-main.module';
import { TimelineHomeComponent } from './timeline-home/timeline-home.component';

import {HttpClientModule} from '@angular/common/http';

import { ActivityPipe } from './pipes/activity.pipe';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { DateStrPipe } from './pipes/date-str.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimelineHomeComponent,
    ActivityPipe,
    AuthenticationComponent,
    RegistrationComponent,
    LoginComponent,
    DateStrPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    JournalMainModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
