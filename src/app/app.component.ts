import { Component } from '@angular/core';
import {AuthService} from './guards/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogroute';
  constructor(private service : AuthService){
    
  }
}
