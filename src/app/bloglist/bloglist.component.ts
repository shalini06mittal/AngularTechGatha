import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Blog } from '../model/blog';
import { categories } from '../model/bloglist';
import { HttpblogService } from '../http/httpblog.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit, OnDestroy {
  blogs:Blog[] = [];
  bloglist:Observable<Blog[]>
  update=new BehaviorSubject<boolean>(false);
  categories = categories;
  cat:string = 'all';
  selid:number;
  constructor(private httpservice:HttpblogService,
    private router:Router, private route:ActivatedRoute) {  
      // this.route.paramMap.subscribe(
      //   (params:ParamMap) =>{
      //     this.selid = parseInt(params.get('id'));
      //     console.log(this.selid);
      //   }
      // )
      this.route.queryParams.subscribe(
        (params) =>{
              this.selid = parseInt(params['id']);
               console.log(this.selid);
             }
      );
   }
  ngOnInit() {
    this.getBlogs();
    this.update.subscribe(update=>update === true ? this.getBlogs() : '');
  }
  getBlogs()
  {
    this.bloglist = this.httpservice.getBlogs(); 
  }
  delete(blog)
  {
    this.httpservice.deleteBlog(blog.id).subscribe(
      (data)=>this.update.next(true),
      (err)=>console.log(err)
      );
    
  }
  edit(blog)
  {
    this.router.navigate(['edit',{id:blog.id}]);
  }
  onselect(blog)
  {
    this.router.navigate([blog.id],{relativeTo:this.route,queryParams:{}});
  }
  isselected(blog){
    return this.selid === blog.id;
  }
  ngOnDestroy()
  {
    this.update.unsubscribe();
  }
}
