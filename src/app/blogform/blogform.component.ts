import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/blog';
import { categories } from '../model/bloglist';
import { BlogService } from '../service/blog.service';
import { HttpblogService } from '../http/httpblog.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {
  categories;
  blog:Blog
  hasError:boolean = true;
  month = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
  constructor(private bs:BlogService, private http:HttpblogService) { 
    this.blog = new Blog('','','','','default');
    this.categories = categories;
  }

  ngOnInit() {
  }
  validate(category)
  {
    if(category === 'default')
    {
      this.hasError = true;
    }
    else {
      this.hasError = false;
    }

  }
  onSubmit()
  {
    let today = new Date();
    let date = today.getDate() + ' '+this.month[today.getMonth()] +' '+today.getFullYear();
    let ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    let time = today.getHours()+':'+today.getMinutes()+' '+ampm;
    this.blog.date = date;
    this.blog.time = time;
    console.log(this.blog);
    //this.bs.addBlog(this.blog);
    this.http.addBlog(this.blog).subscribe((data)=>console.log(data));
  }
}










/*

    */