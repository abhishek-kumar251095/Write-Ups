import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JournalService } from './services/journal.service';
import { TimelineService } from './services/timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'journal-app';
  active = 1;
  subscription: Subscription;

  constructor(private journalService: JournalService, private timelineService: TimelineService){}

  ngOnInit(): void {
    this.subscription = this.journalService.timelineEmitter.subscribe(journalData => {
      this.timelineService.addTimelineData(journalData);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }



}
