import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutTrackComponent } from './in-out-track.component';

describe('InOutTrackComponent', () => {
  let component: InOutTrackComponent;
  let fixture: ComponentFixture<InOutTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
