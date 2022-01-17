import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioDifficultComponent } from './mario-difficult.component';

describe('MarioDifficultComponent', () => {
  let component: MarioDifficultComponent;
  let fixture: ComponentFixture<MarioDifficultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarioDifficultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarioDifficultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
