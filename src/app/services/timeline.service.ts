import { Injectable } from '@angular/core';
import { TimelineModel } from '../Models-Shared/timeline-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  timelineArr: TimelineModel[] = [];
  //timelineServerUrl = 'https://write-ups-server.herokuapp.com/timeline';
  timelineServerUrl = 'http://localhost:3000/timeline';
  
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  addTimelineData(timelineData: TimelineModel){
    
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.httpClient.post<TimelineModel>(this.timelineServerUrl, timelineData,
                                                 {headers: reqHeaders});
    //this.timelineArr.push(timelineData);
  }

  getTimelineData(){

    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.httpClient.get<TimelineModel[]>(this.timelineServerUrl, {headers: reqHeaders});
  }

}
