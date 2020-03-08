import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {EntryModel} from '../Models/entry-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  journalEntries: EntryModel[]

  constructor(private journalService: JournalService, private router: Router) { }

  ngOnInit(): void {
    this.journalEntries = this.journalService.getEntries();
    console.log(this.journalEntries);
  }

  onGetEntry(index: number){
    this.router.navigate(['journal', index]);
  }

}
