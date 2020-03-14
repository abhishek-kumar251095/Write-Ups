import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {EntryModel} from '../Models/entry-model';
import {JournalService} from '../../services/journal.service';
import { TimelineModel } from 'src/app/Models-Shared/timeline-model';
import { trigger, transition, style, animate } from '@angular/animations';

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

  journalEntry: FormGroup
  tagInputCount: number = 0

  constructor(private journalService: JournalService) { }

  ngOnInit(): void {

    const currentDateTime = new Date();
    const dateOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"   
    };

    this.journalEntry = new FormGroup({
      dateTime: new FormControl(currentDateTime.toLocaleString("en", dateOptions)),
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
    };

    const filteredEntry = entry.tags.filter(item => item != null);
    entry.tags = filteredEntry;

    this.journalService.addEntry(entry);
    (<FormArray>this.journalEntry.get('tags')).clear();
    this.journalEntry.reset();

    const timelineData = new TimelineModel(this.journalService.journalData.length-1,'journal', entry.dateTime, entry.title);
    this.journalService.timelineEmitter.next(timelineData);
  }

  onAddTag(){

    if (this.tagInputCount < 6) {
      const control = new FormControl(null,Validators.required);
      (<FormArray>this.journalEntry.get('tags')).push(control);
      this.tagInputCount += 1;
    }

  }

  getControls(){
    return (<FormArray>this.journalEntry.get('tags')).controls;
  }

  onInput(){
    const element = document.getElementById("content");
    element.style.height = element.style.height = element.scrollHeight + "px";
  }
}
