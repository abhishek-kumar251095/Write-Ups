import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JournalService } from './services/journal.service';
import { TimelineService } from './services/timeline.service';
import { AuthenticationService } from './services/authentication.service';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'journal-app';
  active = 1;
  subscriptionTimeline: Subscription;
  subscriptionUsers: Subscription;
  notLoggedIn: boolean = true;
  username: string;

  constructor(private journalService: JournalService, 
              private timelineService: TimelineService,
              private authenticationService: AuthenticationService,
              private router: Router){}

  ngOnInit(): void {

    if(this.authenticationService.isLoggedIn()){
      this.notLoggedIn = false;
      this.router.navigate(['timeline']);
    }

    //Subscribe to the login event.
    this.subscriptionUsers = this.authenticationService.authEmitter.subscribe(isLoggedIn => {
      this.notLoggedIn = !isLoggedIn;
      this.username = this.authenticationService.getUsername();
      this.router.navigate(['timeline']);
    })

    //Subscribe to the timeline event
    this.subscriptionTimeline = this.journalService.timelineEmitter.subscribe(journalData => {
      this.timelineService
        .addTimelineData(journalData)
        .pipe(
          map(res => {
            console.log(res); //remove
          }),
          catchError(err => {
            return err;
          })
        )
        .subscribe(res => {
        });
    });
  }

  ngOnDestroy(): void {
    this.subscriptionTimeline.unsubscribe(); 
    this.subscriptionUsers.unsubscribe();
  }

  onLogout(): void {
    this.authenticationService.logout();
    this.notLoggedIn = true;
    this.router.navigate(['']);
  }

}
