import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
url = 'http://localhost:3000';
  constructor(private http:HttpClient, private router:Router) { }
  isLoggedIn()
  {
    console.log(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
  register(user)
  {
    return this.http.post(this.url+'/register',user);
  }
  login(user)
  {
    console.log(user)
    return this.http.post(this.url+'/login',user);
  }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
}
