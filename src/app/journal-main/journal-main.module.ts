import { NgModule } from "@angular/core";

import { JournalRoutingModule } from './journal-routing.module';

import { JournalMainComponent } from '../journal-main/journal-main.component';
import { EntryAddComponent } from '../journal-main/entry-add/entry-add.component';
import { EntriesComponent } from '../journal-main/entries/entries.component';
import { EntryDisplayComponent } from '../journal-main/entry-display/entry-display.component';
import { EntriesDisplayComponent } from '../journal-main/entries/entries-display/entries-display.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShortenPipe } from '../pipes/shorten.pipe';

@NgModule({
    declarations:[
        JournalMainComponent,
        EntryAddComponent,
        EntriesComponent,
        EntryDisplayComponent,
        EntriesDisplayComponent,  
        ShortenPipe
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        JournalRoutingModule,
    ]
})
export class JournalMainModule{}