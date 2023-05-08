import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBookComponent } from './schedule-book.component';

describe('ScheduleBookComponent', () => {
  let component: ScheduleBookComponent;
  let fixture: ComponentFixture<ScheduleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
