import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {EntryModel} from '../Models/entry-model';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  journalEntries: EntryModel[]

  constructor(private journalService: JournalService, private router: Router) { }

  ngOnInit(): void {

    this.journalService
        .getEntries()
        .pipe(
          map((res: EntryModel[]) => {
            console.log(res); //remove
            return res;
          }),
          catchError(err => "Cannot fetch entry data")
        )
        .subscribe((res: EntryModel[]) => {
          this.journalEntries = res;
          //console.log(res[0])
        })
    //this.journalEntries = this.journalService.getEntries();
  }

  onGetEntry(index: number){
    this.router.navigate(['journal', index]);
  }

}
