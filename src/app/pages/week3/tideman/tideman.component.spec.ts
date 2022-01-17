import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidemanComponent } from './tideman.component';

describe('TidemanComponent', () => {
  let component: TidemanComponent;
  let fixture: ComponentFixture<TidemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TidemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TidemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
