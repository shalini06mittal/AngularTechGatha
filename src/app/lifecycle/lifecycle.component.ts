import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck {

  @Input() name:string;
  @Input() employee = {'name' : this.name};
  constructor() { 
    console.log('constructor called '+this.name);
    console.log('constructor called emp name '+this.employee.name);
  }

  ngOnInit() {
    console.log('ng oninit called' +this.name);
    console.log('ng oninit called emp name '+this.employee.name);
  }
  ngOnChanges()
  {
    console.log('ng on changes called '+this.name);
    console.log('ng on changes called emp name '+this.employee.name);
  }
  ngDoCheck()
  {
    console.log('ng do check called '+this.name);
    console.log('ng do check called emp name '+this.employee.name);
  }

}
