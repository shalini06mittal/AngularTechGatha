import { Component, OnInit } from '@angular/core';
import {AuthService} from '../guards/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user={}
  constructor(private authservice:AuthService, private router:Router) {
    this.user ={'email':'', 'password':''};
   }

  ngOnInit() {
  }
  login()
  {
    this.authservice.login(this.user).subscribe(
      (resp:any)=>{
        console.log(resp)
        localStorage.setItem('token',resp.token);
        this.router.navigate(['/create']);
      },
      (err)=>console.log(err)
    );
  }
}
