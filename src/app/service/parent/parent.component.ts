import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers:[LogService]
})
export class ParentComponent implements OnInit {

  constructor(private service:LogService) {
    console.log(service.message); 
   }

  ngOnInit() {
  }

}
