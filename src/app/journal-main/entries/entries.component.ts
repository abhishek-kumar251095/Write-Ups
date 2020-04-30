import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {EntryModel} from '../Models/entry-model';
import { Router, ActivatedRoute } from '@angular/router';
import { map, catchError, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  journalEntries: EntryModel[];
  tag: string;
  err: string;

  constructor(private journalService: JournalService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams
        .pipe(
          flatMap((res: {tag:string}) => {
            this.tag = res.tag;
            
            if (!this.tag) {
              return this.journalService.getEntries()
            } else {
              return this.journalService.getEntriesByTag(this.tag);
            }
          }),
          catchError(err => {
            this.err = "Cannot fetch entry data: "+err;
            return err;
          })
        )
        .subscribe((res: EntryModel[]) => {
          this.journalEntries = res;
        })
    

    // this.journalService
    //     .getEntries()
    //     .pipe(
    //       map((res: EntryModel[]) => {
    //         return res;
    //       }),
    //       catchError(err => {
    //         this.err = "Cannot fetch entry data: "+ err;
    //         return null;
    //       })
    //     )
    //     .subscribe((res: EntryModel[]) => {
    //       this.journalEntries = res;
    //     });
  }

  onGetEntry(index: number){
    this.router.navigate(['journal', index]);
  }

}
