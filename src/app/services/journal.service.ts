import { Injectable, EventEmitter } from '@angular/core';
import { EntryModel } from '../journal-main/Models/entry-model';
import { Subject } from 'rxjs/';
import { TimelineModel } from '../Models-Shared/timeline-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  journalUrl = 'https://write-ups-server.herokuapp.com/journal';
  //journalUrl = 'http://localhost:3000/journal';

  journalData: EntryModel[] = [];
  timelineEmitter: Subject<TimelineModel> = new Subject<TimelineModel>();

  getEntries(){

    let reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(JSON.stringify(this.authService.getToken()))}`
    });

    return this.httpClient.get<EntryModel[]>(this.journalUrl, {headers: reqHeaders});
    //return this.journalData.slice();
  }

  getEntry(id: string){

    let reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(JSON.stringify(this.authService.getToken()))}`
    });

    return this.httpClient.get<EntryModel>(this.journalUrl + `/${id}`, {headers: reqHeaders});
    //return this.journalData.slice()[id];
  }

  addEntry(entry: EntryModel){

    let reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(JSON.stringify(this.authService.getToken()))}`
    });  

    return this.httpClient.post<EntryModel | any>(this.journalUrl, entry,  {headers: reqHeaders});
  }

  editEntry(entry: EntryModel | any, entryId: string){

    entry._id = entryId;
    let reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(JSON.stringify(this.authService.getToken()))}`
    });
    
    return this.httpClient.put<EntryModel | any>(this.journalUrl, entry,  {headers: reqHeaders});
  }
}
