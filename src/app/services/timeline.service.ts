import { Injectable } from '@angular/core';
import { TimelineModel } from '../Models-Shared/timeline-model';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  timelineArr: TimelineModel[] = [];
  
  constructor() { }

  addTimelineData(timelineData: TimelineModel): void{
    this.timelineArr.push(timelineData);
  }

  getTimelineData(){
    return this.timelineArr.slice();
  }

}
