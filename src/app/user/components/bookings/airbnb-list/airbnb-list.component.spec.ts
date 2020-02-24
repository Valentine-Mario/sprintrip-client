import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnbListComponent } from './airbnb-list.component';

describe('AirbnbListComponent', () => {
  let component: AirbnbListComponent;
  let fixture: ComponentFixture<AirbnbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirbnbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbnbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
