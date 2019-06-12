import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog:Blog;
  constructor() { 
  //  this.blog =   new Blog(1,'My first interview',
  //    'it was an amazing experience and lots to learn in the firts interview','22 May 2019','8:03 Pm');
    
  }

  ngOnInit() {
   // console.log(this.blog);
  }

}
