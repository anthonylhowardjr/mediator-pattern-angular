import { TestBed } from '@angular/core/testing';

import { SignalMediatorService } from './mediator.service';

describe('MediatorService', () => {
  let service: SignalMediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalMediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
