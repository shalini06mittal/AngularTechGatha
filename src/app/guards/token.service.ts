import { Injectable} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
@Injectable()
export class TokenService implements HttpInterceptor{

  constructor(private service:AuthService) { }
  intercept(req, next)
  {
    console.log('intercept req');
    let tokenreq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${this.service.getToken()}`
      }
    });
    return next.handle(tokenreq);
  }
}
