import { Injectable, EventEmitter } from '@angular/core';
import { EntryModel } from '../journal-main/Models/entry-model';
import { Subject } from 'rxjs/';
import { TimelineModel } from '../Models-Shared/timeline-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  journalUrl = 'https://write-ups-server.herokuapp.com/journal';
  //journalUrl = 'http://localhost:3000/journal';


  journalData: EntryModel[] = [];
  timelineEmitter: Subject<TimelineModel> = new Subject<TimelineModel>();

  constructor(private httpClient: HttpClient) { }

  getEntries(){
    return this.httpClient.get<EntryModel[]>(this.journalUrl);
    //return this.journalData.slice();
  }

  getEntry(id: string){
    return this.httpClient.get<EntryModel>(this.journalUrl + `/${id}`);
    //return this.journalData.slice()[id];
  }

  addEntry(entry: EntryModel){
    //this.journalData.push(entry);    
    return this.httpClient.post<EntryModel | any>(this.journalUrl, entry);
  }

  editEntry(entry: EntryModel | any, entryId: string){
    entry._id = entryId;
    return this.httpClient.put<EntryModel | any>(this.journalUrl, entry);
  }
}
