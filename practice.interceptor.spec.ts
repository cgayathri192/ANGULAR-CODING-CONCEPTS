import { TestBed } from '@angular/core/testing';

import { PracticeInterceptor } from './practice.interceptor';

describe('PracticeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PracticeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PracticeInterceptor = TestBed.inject(PracticeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
