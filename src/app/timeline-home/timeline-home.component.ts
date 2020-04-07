import { Component, OnInit, Input, AfterViewChecked, AfterViewInit } from '@angular/core';
import {TimelineModel} from '../Models-Shared/timeline-model';
import { TimelineService } from '../services/timeline.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { map, catchError } from 'rxjs/operators';
 
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

  timelineDataArr: TimelineModel[];
  username: string;

  constructor(private timelineService: TimelineService, 
              private activatedRouter: Router,
              private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.username = this.authService.getUsername();//.split(' ')[0].replace(/"/g,'');
    this.timelineService
        .getTimelineData()
        .pipe(
          map(res => {
            return res
          }),
          catchError(err => err)
        )
        .subscribe((res: TimelineModel[]) => {
          this.timelineDataArr = res;
        });    
  }

  onFetchDetail(id: number){
    this.activatedRouter.navigate(['journal', id]);
  }

}
