import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Blog } from '../model/blog';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
/*
subscription
*/
  //name = new FormControl('Test');
  blog:Blog;
  blogform:FormGroup;
  title:FormControl;
  desc:FormControl;
  constructor(private fb:FormBuilder) { 
    this.createForm();
    // this.blogform = new FormGroup({
    //   title:new FormControl('Default title'),
    //   desc:new FormControl('Default Description'),
    // })
  }
 createForm()
 {
   this.title = new FormControl('',
   [Validators.required, Validators.minLength(5)]);
   this.desc = new FormControl('Some description',Validators.required);
    this.blogform = this.fb.group({
      title:this.title,
      desc:this.desc
    }) 
 }
  ngOnInit() {
  }
  submit(value)
  {
    console.log(value);
  }
}
