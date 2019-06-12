import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Blog } from '../model/blog';
import { HttpblogService } from '../http/httpblog.service';
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {

  blog:Blog;
  constructor(private router:Router,
    private route:ActivatedRoute,
    private service:HttpblogService) {
      //let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe(
        (params:ParamMap) => {
          let id  = parseInt(params.get('id'))
          console.log(id);
          this.service.getBlog(id).subscribe(
            (data) => {
              this.blog = data
              console.log(this.blog);
            }     
          )
        }
      );
      
      
      
     }
     prev()
     {
     let previd = this.blog.id-1;
     
     this.router.navigate(['../',previd],{relativeTo:this.route});
     }
     next()
      {
        let nextid = this.blog.id+1;
        
        this.router.navigate(['../',nextid],{relativeTo:this.route});
      }
      back()
      {
        this.router.navigate(['../'],{relativeTo:this.route,queryParams:{id:this.blog.id}});
      }
      info(){
        this.router.navigate(['info'],{relativeTo:this.route})
      }
    

  ngOnInit() {
    
  }

}
