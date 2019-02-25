import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should fail login', () => {
    const service: AuthService = TestBed.get(AuthService);

    const res = service.signIn({
      username: 'User1',
      password: '123456'
    });
    res.subscribe((data)=>{
    }, (err: HttpErrorResponse) => expect(err.status).toBe(401));
  });
});
