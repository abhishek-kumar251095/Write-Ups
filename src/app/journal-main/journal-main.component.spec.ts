import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalMainComponent } from './journal-main.component';

describe('JournalMainComponent', () => {
  let component: JournalMainComponent;
  let fixture: ComponentFixture<JournalMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
