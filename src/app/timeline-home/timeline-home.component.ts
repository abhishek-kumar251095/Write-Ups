import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
import {TimelineModel} from '../Models-Shared/timeline-model';
import { TimelineService } from '../services/timeline.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
 
@Component({
  selector: 'app-timeline-home',
  templateUrl: './timeline-home.component.html',
  styleUrls: ['./timeline-home.component.css'],
  animations:[
    trigger('emptyState', [
      // state('in', style({
      //   'opacity': 1,
      //   'transform':'translatex(0)'
      // })),
      transition('void => *', [
        style({
          'opacity': 0,
          'transform': 'translatex(-100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class TimelineHomeComponent implements OnInit {

  timelineDataArr: TimelineModel[] = [];

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {

    this.timelineDataArr = this.timelineService.getTimelineData();
    
  }

}
