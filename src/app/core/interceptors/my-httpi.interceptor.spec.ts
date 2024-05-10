import { TestBed } from '@angular/core/testing';

import { MyHttpiInterceptor } from './my-httpi.interceptor';

describe('MyHttpiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyHttpiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyHttpiInterceptor = TestBed.inject(MyHttpiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
