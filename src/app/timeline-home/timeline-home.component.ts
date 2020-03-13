import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
import {TimelineModel} from '../Models-Shared/timeline-model';
import { TimelineService } from '../services/timeline.service';
 
@Component({
  selector: 'app-timeline-home',
  templateUrl: './timeline-home.component.html',
  styleUrls: ['./timeline-home.component.css']
})
export class TimelineHomeComponent implements OnInit {

  timelineDataArr: TimelineModel[] = [];

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {

    this.timelineDataArr = this.timelineService.getTimelineData();
    
  }

}
