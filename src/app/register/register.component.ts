import { Component, OnInit } from '@angular/core';
import {AuthService} from '../guards/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user={}
  constructor(private authservice:AuthService,
    private router:Router) {
    this.user ={'email':'', 'password':''};
   }

  ngOnInit() {
  }
  register()
  {
    this.authservice.register(this.user).subscribe(
      (resp:any)=>{
        localStorage.setItem('token',resp.token);
        this.router.navigate(['/create']);
      }
    )
  }
}
