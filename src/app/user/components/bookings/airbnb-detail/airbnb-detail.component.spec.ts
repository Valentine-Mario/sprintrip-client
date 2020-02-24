import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnbDetailComponent } from './airbnb-detail.component';

describe('AirbnbDetailComponent', () => {
  let component: AirbnbDetailComponent;
  let fixture: ComponentFixture<AirbnbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirbnbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbnbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
