import { Injectable } from '@angular/core';
import { EntryModel } from '../journal-main/Models/entry-model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  journalData: EntryModel[] = [];

  constructor() { }

  getEntries(){
    return this.journalData.slice();
  }

  getEntry(id: number){
    return this.journalData.slice()[id];
  }

  addEntry(entry: EntryModel){
    this.journalData.push(entry);
  }


}
