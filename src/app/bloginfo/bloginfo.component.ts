import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Blog } from '../model/blog';
import { HttpblogService } from '../http/httpblog.service';
@Component({
  selector: 'app-bloginfo',
  templateUrl: './bloginfo.component.html',
  styleUrls: ['./bloginfo.component.scss']
})
export class BloginfoComponent implements OnInit {

  blog:Blog
  constructor(private route:ActivatedRoute,
    private service:HttpblogService) { 
    this.blog = new Blog('','','','');
  }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params) => {
        let id = params.id;
        this.service.getBlog(id).subscribe(
          (res)=> {
            console.log(res)
            this.blog = res
          }
        )
      }
    )
  }

}
