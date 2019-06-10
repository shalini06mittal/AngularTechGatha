import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.scss']
})
export class InputoutputComponent implements OnInit {

  @Input() count:number;
  @Output() countChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  change()
  {
    this.count++;
    this.countChange.emit(this.count);
  }
}
