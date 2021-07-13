/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestInterceptService } from './requestIntercept.service';

describe('Service: RequestIntercept', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestInterceptService]
    });
  });

  it('should ...', inject([RequestInterceptService], (service: RequestInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
