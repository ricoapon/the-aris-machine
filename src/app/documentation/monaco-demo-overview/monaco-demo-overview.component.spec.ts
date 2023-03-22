import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoDemoOverviewComponent } from './monaco-demo-overview.component';

describe('MonacoDemoOverviewComponent', () => {
  let component: MonacoDemoOverviewComponent;
  let fixture: ComponentFixture<MonacoDemoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoDemoOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonacoDemoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
