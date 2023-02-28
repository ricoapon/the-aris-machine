import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineScreenComponent } from './machine-screen.component';

describe('MachineScreenComponent', () => {
  let component: MachineScreenComponent;
  let fixture: ComponentFixture<MachineScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
