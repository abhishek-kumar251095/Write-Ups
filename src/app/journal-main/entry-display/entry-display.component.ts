import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import { ActivatedRoute } from '@angular/router';
import {map, catchError} from 'rxjs/operators';
import {EntryModel} from '../Models/entry-model';

@Component({
  selector: 'app-entry-display',
  templateUrl: './entry-display.component.html',
  styleUrls: ['./entry-display.component.css']
})
export class EntryDisplayComponent implements OnInit {

  entryId: string;
  entry: EntryModel;

  constructor(private journalService: JournalService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEntryId();
  }

  getEntryData(){
    console.log(this.entryId);
    this.journalService
        .getEntry(this.entryId)
        .pipe(
          catchError(err => err)
        )
        .subscribe((res: EntryModel) => {
          this.entry = res;
        });
  }

  getEntryId(){
    this.activeRoute.params
      .pipe(
        map(data => {
          return data.id
        })
      )
      .subscribe((data) => {
        this.entryId = data;
        this.getEntryData();  
      });
  }

}
