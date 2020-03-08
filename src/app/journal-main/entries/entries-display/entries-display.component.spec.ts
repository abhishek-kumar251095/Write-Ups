import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesDisplayComponent } from './entries-display.component';

describe('EntriesDisplayComponent', () => {
  let component: EntriesDisplayComponent;
  let fixture: ComponentFixture<EntriesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntriesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
