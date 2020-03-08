import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {EntryModel} from '../Models/entry-model';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  journalEntries: EntryModel[]

  constructor(private journalService: JournalService) { }

  ngOnInit(): void {
    this.journalEntries = this.journalService.getEntries();
    console.log(this.journalEntries);
  }

}
