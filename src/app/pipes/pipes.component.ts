import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  dob:Date = new Date();
  employee:any = {'name':'shalini','city':'Mumbai'};

  constructor() { }
  ngOnInit() {
  }

}
