/*
This module is responsible for adding a new entry
and editing existing entries. 
*/

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {EntryModel} from '../Models/entry-model';
import {JournalService} from '../../services/journal.service';
import { TimelineModel } from 'src/app/Models-Shared/timeline-model';
import { trigger, transition, style, animate } from '@angular/animations';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css'],
  animations:[
    trigger('tagState', [
      transition('void => *', [
        style({
          'opacity':0,
          'transform':'translatey(100px)'
        }),
        animate(200)
      ])
    ])
  ]
})
export class EntryAddComponent implements OnInit {

  journalEntry: FormGroup;
  tagInputCount: number = 0;
  entryId: string;
  entryDetail: EntryModel;

  constructor(private journalService: JournalService, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {

    this.routerActive.params.subscribe(result => {
      this.entryId = result.id;
    })
    
    const dateOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric", 
      year: "numeric"  
    };

    if (this.entryId === undefined) {

      const currentDateTime = new Date();

      this.journalEntry = new FormGroup({
        dateTime: new FormControl(currentDateTime.toLocaleString("en", dateOptions)),
        title: new FormControl(null, Validators.required),
        content: new FormControl(null, Validators.required),
        tags: new FormArray([])
      });

    } else {

      this.getEntryDetails(this.entryId)
        .subscribe((res: EntryModel) => {

          this.entryDetail = res;

          const dateEditedEntry = new Date(this.entryDetail.dateTime); 

          this.journalEntry = new FormGroup({
            dateTime: new FormControl(dateEditedEntry.toLocaleString("en", dateOptions)),
            title: new FormControl(this.entryDetail.title, Validators.required),
            content: new FormControl(this.entryDetail.content, Validators.required),
            tags: new FormArray([])

        });

        this.addTagFormControl(this.entryDetail.tags);  

      });
    }
  }

  /*
  Submits the newly added/modified entry.
  If the url has an 'id' parameter then calls editEntry(), 
  otherwise calls addEntry()
  */
  onEntrySubmit(){ 
    const entry: EntryModel = {
      dateTime: new Date(this.journalEntry.value.dateTime).toUTCString(),
      title: this.journalEntry.value.title,
      content: this.journalEntry.value.content,
      length: this.journalEntry.value.content.length,
      tags: this.journalEntry.value.tags
    };

    const filteredEntry = entry.tags.filter(item => item != null);
    entry.tags = filteredEntry;
    
    if (this.entryId === undefined) {
      this.addNewEntry(entry);
    } else {
      this.editEntry(entry, this.entryId);
    }
  }

  /*
    Adds a new tag input.
  */
  onAddTag(){

    if (this.tagInputCount < 6) {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.journalEntry.get('tags')).push(control);
      this.tagInputCount += 1;
    }
  }

  //Get the number of inputs for tags array
  getControls(){
    return (<FormArray>this.journalEntry.get('tags')).controls;
  }

  //Increase the height of TextArea with the content
  onInput(){
    const element = document.getElementById("content");
    element.style.height = element.style.height = element.scrollHeight + "px";
  }

  //Calls the journal service to add a new entry and emits an event for the timeline.
  addNewEntry(entry: EntryModel){
    this.journalService
    .addEntry(entry)
    .pipe(
      catchError(err => `Entry not created: ${err}`)
    )
    .subscribe(val => {
      (<FormArray>this.journalEntry.get('tags')).clear();
      this.journalEntry.reset();
      
      const timelineData = new TimelineModel(String(val._id), 'journal', entry.dateTime, entry.title, 'add');
      this.journalService.timelineEmitter.next(timelineData);
    });
  }

  //Get entry-details by id (by calling the journal service)
  getEntryDetails(id: string){

    return this.journalService
      .getEntry(id)
      .pipe(
        catchError(err => `Unable to fetch details: ${err}`)
      );

  }

  // Creates an input field with a tag
  createTagFormControl(value: string){

    let tag = new FormControl(value, Validators.required);
    (<FormArray>this.journalEntry.get('tags')).push(tag);
    this.tagInputCount += 1;

  }

  // Adds an input field for every existing tag
  addTagFormControl(tags: string[]){

    tags.map(tag => {
      this.createTagFormControl(tag);
    })
  }

  //Calls the journal service to edit an existing entry and emits an event for the timeline.
  editEntry(entry: EntryModel, entryId: string){

    this.journalService
      .editEntry(entry, entryId)
      .pipe(
        catchError(err => `Edit failed: ${err}`)
      )
      .subscribe(res => {

        (<FormArray>this.journalEntry.get('tags')).clear();
        this.journalEntry.reset();

        const timelineData = new TimelineModel(entryId, 'journal', entry.dateTime, entry.title, 'edit');
        this.journalService.timelineEmitter.next(timelineData);

      });
  }
}
