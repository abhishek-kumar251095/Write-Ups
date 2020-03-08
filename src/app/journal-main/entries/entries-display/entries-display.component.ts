import { Component, OnInit, Input } from '@angular/core';
import {EntryModel} from '../../Models/entry-model';

@Component({
  selector: 'app-entries-display',
  templateUrl: './entries-display.component.html',
  styleUrls: ['./entries-display.component.css']
})
export class EntriesDisplayComponent implements OnInit {

  @Input() entry: EntryModel;

  constructor() { }

  ngOnInit(): void {
  }

}
