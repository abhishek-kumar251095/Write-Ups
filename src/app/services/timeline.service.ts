import { Injectable } from '@angular/core';
import { TimelineModel } from '../Models-Shared/timeline-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  timelineArr: TimelineModel[] = [];
  timelineServerUrl = 'https://write-ups-server.herokuapp.com/timeline';
  //timelineServerUrl = 'http://localhost:3000/timeline';

  
  constructor(private httpClient: HttpClient) { }

  addTimelineData(timelineData: TimelineModel){
    return this.httpClient.post<TimelineModel>(this.timelineServerUrl, timelineData);
    //this.timelineArr.push(timelineData);
  }

  getTimelineData(){
    return this.httpClient.get<TimelineModel[]>(this.timelineServerUrl);
  }

}
