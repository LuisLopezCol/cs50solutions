import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunoffComponent } from './runoff.component';

describe('RunoffComponent', () => {
  let component: RunoffComponent;
  let fixture: ComponentFixture<RunoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
