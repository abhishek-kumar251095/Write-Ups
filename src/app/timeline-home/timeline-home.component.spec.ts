import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineHomeComponent } from './timeline-home.component';

describe('TimelineHomeComponent', () => {
  let component: TimelineHomeComponent;
  let fixture: ComponentFixture<TimelineHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
