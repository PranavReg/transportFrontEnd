import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleRoutesComponent } from './schedule-route.component';

describe('ShuttleRoutesComponent', () => {
  let component: ShuttleRoutesComponent;
  let fixture: ComponentFixture<ShuttleRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuttleRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShuttleRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
