import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
import {TimelineModel} from '../Models-Shared/timeline-model';
import { TimelineService } from '../services/timeline.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
 
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
  username: string;

  constructor(private timelineService: TimelineService, 
              private activatedRouter: Router,
              private usersService: UsersService) { }

  ngOnInit(): void {

    this.username = this.usersService.getUsername().split(' ')[0].replace(/"/g,'');
    this.timelineDataArr = this.timelineService.getTimelineData();    
  }

  onFetchDetail(id: number){
    this.activatedRouter.navigate(['journal', id]);
  }

}
