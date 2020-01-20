import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingNowComponent } from './travelling-now.component';

describe('TravellingNowComponent', () => {
  let component: TravellingNowComponent;
  let fixture: ComponentFixture<TravellingNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
