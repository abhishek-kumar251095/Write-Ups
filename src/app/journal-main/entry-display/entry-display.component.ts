import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import {EntryModel} from '../Models/entry-model';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {

  entryId: number;
  entry: EntryModel;

  constructor(private journalService: JournalService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEntryId();
    this.entry = this.getEntryData();
  }

  getEntryData(): EntryModel{
    return this.journalService.getEntry(this.entryId);
  }

  getEntryId(){
    this.activeRoute.params
      .pipe(
        map(data => {
          return +data.id
        })
      )
      .subscribe((data) => {
       this.entryId = data;
      });
  }

}
