import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioEasyComponent } from './mario-easy.component';

describe('MarioEasyComponent', () => {
  let component: MarioEasyComponent;
  let fixture: ComponentFixture<MarioEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarioEasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarioEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
