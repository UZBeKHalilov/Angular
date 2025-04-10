import { TestBed } from '@angular/core/testing';

import { Lesson7Service } from './lesson-7.service';

describe('Lesson7Service', () => {
  let service: Lesson7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lesson7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
