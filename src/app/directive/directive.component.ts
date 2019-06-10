import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  choice:boolean = false;
  nos = [23,34,34,34,4];
    people: any[] = [
    {
    "name": "Douglas Pace",
    "age": 35,
    "country": 'MARS'
    },
    {
    "name": "Mcleod Mueller",
    "age": 32,
    "country": 'USA'
    },
    {
    "name": "Aguirre Ellis",
    "age": 34,
    "country": 'UK'
    },
    {
    "name": "Cook Tyson",
    "age": 32,
    "country": 'USA'
    }
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
