import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {EntryModel} from '../Models/entry-model';
import {JournalService} from '../../services/journal.service';

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css']
})
export class EntryAddComponent implements OnInit {

  constructor(private journalService: JournalService) { }
  journalEntry: FormGroup

  ngOnInit(): void {

    this.journalEntry = new FormGroup({
      dateTime: new FormControl(new Date()),
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      tags: new FormArray([])
    });
  }

  onEntrySubmit(){ 
    const entry: EntryModel = {
      userId:1,
      dateTime: this.journalEntry.value.dateTime,
      title: this.journalEntry.value.title,
      content: this.journalEntry.value.content,
      length: this.journalEntry.value.content.length,
      tags: this.journalEntry.value.tags
    }
    
    this.journalService.addEntry(entry);
    console.log(this.journalService.journalData);
    (<FormArray>this.journalEntry.get('tags')).clear();
    this.journalEntry.reset();
  }

  onAddTag(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.journalEntry.get('tags')).push(control);
  }

  getControls(){
    return (<FormArray>this.journalEntry.get('tags')).controls;
  }


}
