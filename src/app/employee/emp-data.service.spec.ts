import { TestBed } from '@angular/core/testing';

import { EmpDataService } from './emp-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmpDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }).compileComponents()
  );

  it('should be created', () => {
    const service: EmpDataService = TestBed.get(EmpDataService);
    expect(service).toBeTruthy();
  });
});
