import { TestBed } from '@angular/core/testing';

import { Cs50Service } from './cs50.service';

describe('Cs50Service', () => {
  let service: Cs50Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cs50Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
