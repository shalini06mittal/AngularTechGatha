import { Component, OnInit, OnChanges } from '@angular/core';
import { Blog } from '../model/blog';
import { blogs, categories } from '../model/bloglist';
import { BlogService } from '../service/blog.service';
import { HttpblogService } from '../http/httpblog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {
  blogs:Blog[] = [];
  bloglist:Observable<Blog[]>
  categories = categories;
  cat:string = 'all';
  constructor(private bs:BlogService, private httpservice:HttpblogService) {
    
   }
  ngOnInit() {
    //this.blogs = this.bs.getBlogs();
    this.bloglist = this.httpservice.getBlogs();
  }
  delete(blog)
  {
    //this.bs.deleteBlog(blog);
    this.httpservice.deleteBlog(blog.id).subscribe((data)=>console.log(data));
  }
}
