import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LogService } from './service/log.service';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls:['./app.component.scss'],
  
})
export class AppComponent implements OnInit{

constructor()
{
  console.log('app component constructor called');
}
ngOnInit()
{
  console.log('app component ng on init called');
}

/*
For Input and Output Event Emitter
username:string = 'Shalini';
emp = {'name':'Navin'};
count:number = 10;
  changed(no)
  {
    this.count = no;
  }
  */
}
