import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JournalService } from './services/journal.service';
import { TimelineService } from './services/timeline.service';
import { UsersService } from './services/users.service';

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
              private usersService: UsersService){}

  ngOnInit(): void {

    if(this.usersService.getUsername() != ''){
      console.log(this.usersService.getUsername());
      this.notLoggedIn = false;
    }

    this.subscriptionUsers = this.usersService.loginEmitter.subscribe(isLoggedIn => {
      this.notLoggedIn = !isLoggedIn;
      this.username = this.usersService.getUsername();
    })

    this.subscriptionTimeline = this.journalService.timelineEmitter.subscribe(journalData => {
      this.timelineService.addTimelineData(journalData);
    });
  }

  ngOnDestroy(): void {
    this.subscriptionTimeline.unsubscribe(); 
    this.subscriptionUsers.unsubscribe();
  }

}
