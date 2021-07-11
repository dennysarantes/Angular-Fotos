/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetectorPlataformaService } from './detector-plataforma.service';

describe('Service: DetectorPlataforma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetectorPlataformaService]
    });
  });

  it('should ...', inject([DetectorPlataformaService], (service: DetectorPlataformaService) => {
    expect(service).toBeTruthy();
  }));
});
