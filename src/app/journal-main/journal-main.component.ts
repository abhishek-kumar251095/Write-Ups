import { Component, OnInit } from '@angular/core';
import {JournalService} from '../services/journal.service';
import {EntryModel} from '../journal-main/Models/entry-model';

@Component({
  selector: 'app-journal-main',
  templateUrl: './journal-main.component.html',
  styleUrls: ['./journal-main.component.css']
})
export class JournalMainComponent implements OnInit {

  constructor(private journalService: JournalService) { }

  ngOnInit(): void {

    const entry: EntryModel = {
      userId: 1,
      content:"This is a temporary journal entry. There are going to be many more entries. Brace yourselves!",
      length: 10,
      dateTime: new Date(),
      title: "Temporary Journal Entry Temporary Journal EntryTemporary Journal Entry",
      tags:['tag1', 'tag2', 'aLongTag', 'aVeryLongTag', 'ashortOne']
    }

    this.journalService.addEntry(entry);
    console.log(this.journalService.getEntries());
  }

}
