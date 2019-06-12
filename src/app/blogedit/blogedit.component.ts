import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Blog } from '../model/blog';
import { HttpblogService } from '../http/httpblog.service';
import { categories } from '../model/bloglist';
@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.scss']
})
export class BlogeditComponent implements OnInit {
  categories;
  blog:Blog;
  constructor(private route:ActivatedRoute, private router:Router,
    private service:HttpblogService) {
    this.blog = new Blog('','','','');
    this.categories = categories;
   }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {  
        let id = parseInt(params.get('id'));
        this.service.getBlog(id).subscribe(
          (res) => this.blog = res
        )
      }
    )
  }

  onSubmit()
  {
    this.service.editBlog(this.blog).subscribe(
      (res)=>this.router.navigate(['../'],{relativeTo:this.route})
    );
  }

}
