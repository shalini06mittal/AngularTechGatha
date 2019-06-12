import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private service:AuthService, private router:Router){}
  canActivate()
  {
    console.log('auth guard working');
    if(this.service.isLoggedIn())
      return true;
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
