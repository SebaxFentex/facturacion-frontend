import { TestBed } from '@angular/core/testing';

import { TipoIdService } from './tipo-id.service';

describe('TipoIdService', () => {
  let service: TipoIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
